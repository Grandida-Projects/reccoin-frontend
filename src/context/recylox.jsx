/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { recyloxABI } from './recylox-abi';
import PropTypes from 'prop-types';

export const TokenContext = createContext();

export const useToken = () => useContext(TokenContext);

export const TokenProvider = ({ children }) => {

  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [decimals, setDecimals] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [accountBalance, setAccountBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [connectedAccount, setConnectedAccount] = useState('')
  const [isMethodCallLoading, setIsMethodCallLoading] = useState(false);
  const [isMethodCallSuccessful, setIsMethodCallSuccessful] = useState(false);

  // added variable
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  // useEffect(() => {
  //   const initializeContract = async () => {
  //     try {
  //       setLoading(true)
  //       if (window.ethereum) {
  //         const getAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //         // save connected wallet address
  //         setConnectedAccount(getAccounts[0])
  //         const ethereumProvider = new ethers.providers.Web3Provider(window.ethereum);
  //         // MetaMask requires requesting permission to connect users accounts
  //         setProvider(ethereumProvider);
  //         const signer = ethereumProvider.getSigner();
  //         const contractAddress = '0x835451710F730f06b4AE5978bfD1727322fCFBA9'; // Replace with the actual contract address
  //         const contract = new ethers.Contract(contractAddress, recyloxABI, signer);
  //         console.log('contract =>', contract);
  //         setContract(contract);

  //         const name = await contract.name();
  //         const symbol = await contract.symbol();
  //         const decimals = await contract.decimals();
  //         const totalSupply = await contract.totalSupply();
  //         const yourAccountAddress = '0x1928062edfAFbCCb7D1C788B24F6aCdE80869048'; // Replace with your actual Ethereum address
  //         const accountBalance = await contract.balanceOf(yourAccountAddress);

  //         setName(name);
  //         setSymbol(symbol);
  //         setDecimals(decimals);
  //         setTotalSupply(totalSupply);
  //         setAccountBalance(accountBalance);
  //         setLoading(false);
  //       } else {
  //         setLoading(false)
  //         throw new Error('Please install MetaMask or any other Ethereum wallet extension.');
  //       }
  //     } catch (error) {
  //       setLoading(false)
  //       console.error('Error initializing contract:', error);
  //     }
  //   };

  //   // initializeContract();
  // }, []);

  const initializeContract = async () => {
    try {
      setLoading(true)
      if (window.ethereum && !connectedAccount) {
        const getAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // save connected wallet address
        setConnectedAccount(getAccounts[0])
        setIsWalletConnected(true); 

        const ethereumProvider = new ethers.providers.Web3Provider(window.ethereum);
        // MetaMask requires requesting permission to connect users accounts
        setProvider(ethereumProvider);
        const signer = ethereumProvider.getSigner();
        const contractAddress = '0x0750Da72092d0eD371f9aD7Cabd8EcB23f1cC480'; // Replace with the actual contract address
        const contract = new ethers.Contract(contractAddress, recyloxABI, signer);
        console.log('contract =>', contract);
        setContract(contract);

        const name = await contract.name();
        const symbol = await contract.symbol();
        const decimals = await contract.decimals();
        const totalSupply = await contract.totalSupply();
        const yourAccountAddress = '0x1928062edfAFbCCb7D1C788B24F6aCdE80869048';// Replace with your actual Ethereum address
        const accountBalance = await contract.balanceOf(yourAccountAddress);

        setName(name);
        setSymbol(symbol);
        setDecimals(decimals);
        setTotalSupply(totalSupply);
        setAccountBalance(accountBalance);
        setLoading(false);

        console.log(accountBalance);
        console.log("name", name);
        console.log("symbol", symbol);

      } else {
        setLoading(false)
        // throw new Error('Please install MetaMask or any other Ethereum wallet extension.');
        alert('Please install MetaMask or any other Ethereum wallet extension.')
      }
    } catch (error) {
      setLoading(false)
      console.error('Error initializing contract:', error);
    }
  };

/*
  const initializeContract = async () => {
  try {
    setLoading(true);
    if (window.ethereum) {
      const storedAccount = localStorage.getItem('recyloxConnectedAccount');
      const storedWalletConnected = localStorage.getItem('recyloxWalletConnected');

      if (!storedAccount && storedWalletConnected) {
        // Use the stored account and wallet connection status
        setConnectedAccount(storedAccount);
        setIsWalletConnected(true);
        // const ethereumProvider = new ethers.providers.Web3Provider(window.ethereum);
        // setProvider(ethereumProvider);
        const signer = provider.getSigner();
        const contractAddress = '0x0750Da72092d0eD371f9aD7Cabd8EcB23f1cC480'; // Replace with the actual contract address
        const contract = new ethers.Contract(contractAddress, recyloxABI, signer);
        console.log('contract =>', contract);
        setContract(contract);

        const name = await contract.name();
        const symbol = await contract.symbol();
        const decimals = await contract.decimals();
        const totalSupply = await contract.totalSupply();
        const yourAccountAddress = '0x1928062edfAFbCCb7D1C788B24F6aCdE80869048'; // Replace with your actual Ethereum address
        const accountBalance = await contract.balanceOf(yourAccountAddress);

        setName(name);
        setSymbol(symbol);
        setDecimals(decimals);
        setTotalSupply(totalSupply);
        setAccountBalance(accountBalance);
        setLoading(false);

        console.log(accountBalance);
        console.log('name', name);
        console.log('symbol', symbol);
      } else {
        const getAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = getAccounts[0];
        setConnectedAccount(account);
        localStorage.setItem('recyloxConnectedAccount', account);
        setIsWalletConnected(true);
        const ethereumProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(ethereumProvider);
        const signer = ethereumProvider.getSigner();
        const contractAddress = '0x0750Da72092d0eD371f9aD7Cabd8EcB23f1cC480'; // Replace with the actual contract address
        const contract = new ethers.Contract(contractAddress, recyloxABI, signer);
        console.log('contract =>', contract);
        setContract(contract);
        console.log("privider =>", ethereumProvider);

        localStorage.setItem('recyloxWalletConnected', true);

        const name = await contract.name();
        const symbol = await contract.symbol();
        const decimals = await contract.decimals();
        const totalSupply = await contract.totalSupply();
        const yourAccountAddress = '0x1928062edfAFbCCb7D1C788B24F6aCdE80869048'; // Replace with your actual Ethereum address
        const accountBalance = await contract.balanceOf(yourAccountAddress);

        setName(name);
        setSymbol(symbol);
        setDecimals(decimals);
        setTotalSupply(totalSupply);
        setAccountBalance(accountBalance);
        setLoading(false);

        console.log(accountBalance);
        console.log('name', name);
        console.log('symbol', symbol);
       
      }
    } else {
      setLoading(false);
      // throw new Error('Please install MetaMask or any other Ethereum wallet extension.');
      alert('Please install MetaMask or any other Ethereum wallet extension.');
    }
  } catch (error) {
    setLoading(false);
    console.error('Error initializing contract:', error);
  }
}
*/

  const transferTokens = async (recipient, amount) => {
    setIsMethodCallLoading(true)
    setIsMethodCallSuccessful(false)
    try {
      if (contract) {
        const transaction = await contract.transfer(recipient, amount);
        await transaction.wait();
        // Perform any additional actions or update state as needed
        setIsMethodCallSuccessful(true)
        setIsMethodCallLoading(false)
      } else {
        setIsMethodCallLoading(false)
        setIsMethodCallSuccessful(false)
        alert("Contract is not initialized. Connect wallet to get started")
        throw new Error('Contract is not initialized.');
      }
    } catch (error) {
      setIsMethodCallLoading(false)
      setIsMethodCallSuccessful(false)
      alert('Error transferring tokens:', error.msg)
      console.error('Error transferring tokens:', error);
    }
  };

    // Add the mintTokens and burnTokens functions
  const mintTokens = async (account, amount) => {
    try {
      setIsMethodCallLoading(true)
      setIsMethodCallSuccessful(false)
      if (contract) {
        const transaction = await contract.mint(account, amount);
        await transaction.wait();
        // Perform any additional actions or update state as needed
        setIsMethodCallLoading(false)
        setIsMethodCallSuccessful(true)
      } else {
        setIsMethodCallLoading(false)
        setIsMethodCallSuccessful(false)
        alert("Contract is not initialized. Connect wallet to get started")
        throw new Error('Contract is not initialized.');
        
      }
    } catch (error) {
      setIsMethodCallLoading(false)
      setIsMethodCallSuccessful(false)
      alert('Error transferring tokens:', error)
      console.error('Error transferring tokens:', error);
    }
  };

  const burnTokens = async (amount) => {
    setIsMethodCallLoading(true)
    setIsMethodCallSuccessful(false)
    try {
      if (contract) {
        const transaction = await contract.burn(amount);
        await transaction.wait();
        // Perform any additional actions or update state as needed
        setIsMethodCallSuccessful(true)
        setIsMethodCallLoading(false)
      } else {
        setIsMethodCallLoading(false)
        setIsMethodCallSuccessful(false)
        alert("Contract is not initialized. Connect wallet to get started")
        throw new Error('Contract is not initialized.');
      }
    } catch (error) {
      setIsMethodCallLoading(false)
      setIsMethodCallSuccessful(false)
      alert('Error transferring tokens:', error)
      console.error('Error burning tokens:', error);
    }
  };

  const approveTokens = async (spender, amount) => {
    setIsMethodCallLoading(true)
    setIsMethodCallSuccessful(false)
    try {
      if (contract) {
        const transaction = await contract.approve(spender, amount);
        await transaction.wait();
        // Perform any additional actions or update state as needed
        setIsMethodCallSuccessful(true)
        setIsMethodCallLoading(false)
      } else {
        setIsMethodCallLoading(false)
        setIsMethodCallSuccessful(false)
        alert("Contract is not initialized. Connect wallet to get started")
        throw new Error('Contract is not initialized.');
      }
    } catch (error) {
      setIsMethodCallLoading(false)
      setIsMethodCallSuccessful(false)
      alert('Error transferring tokens:', error)
      console.error('Error approving tokens:', error);
    }
  };

  const transferFrom = async (sender, recipient, amount) => {
    try {
      setIsMethodCallLoading(true)
      setIsMethodCallSuccessful(false)
      if (contract) {
        const transaction = await contract.transferFrom(sender, recipient, amount);
        await transaction.wait();
        // Perform any additional actions or update state as needed
         // Perform any additional actions or update state as needed
         setIsMethodCallSuccessful(true)
         setIsMethodCallLoading(false)
      } else {
        setIsMethodCallLoading(false)
        setIsMethodCallSuccessful(false)
        alert("Contract is not initialized. Connect wallet to get started")
        throw new Error('Contract is not initialized.');
      }
    } catch (error) {
      setIsMethodCallLoading(false)
      setIsMethodCallSuccessful(false)
      alert('Error transferring tokens:', error)
      console.error('Error transferring tokens from:', error);
    }
  };

  // useEffect(() => {
  //   initializeContract(); 
  // },[])

  return (
    <TokenContext.Provider
      value={{
        loading,
        contract,
        name,
        symbol,
        decimals,
        totalSupply,
        accountBalance,
        provider, // Include the provider in the context value
        connectedAccount,
        initializeContract,
        transferTokens,
        mintTokens,
        burnTokens,
        approveTokens,
        transferFrom,
        isMethodCallSuccessful,
        isMethodCallLoading
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

TokenProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
