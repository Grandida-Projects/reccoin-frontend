/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
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

  useEffect (() => {
    const recylox_status = localStorage.getItem("connectRecylox")
    console.log("recylox status => ", recylox_status);
    if (recylox_status == 'true') {
      initializeContract()
    }
  // initializeContract()
  }, [])

  const initializeContract = async () => {
    try {
      setLoading(true)
      if (window.ethereum) {
        const getAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // save connected wallet address
        setConnectedAccount(getAccounts[0])
        const ethereumProvider = new ethers.providers.Web3Provider(window.ethereum);
        // MetaMask requires requesting permission to connect users accounts
        setProvider(ethereumProvider);
        const signer = ethereumProvider.getSigner();
        const contractAddress = '0x509D44Bf4E1E5E696eA288eC4fF1114f79a09AC9'; // Replace with the actual contract address
        const contract = new ethers.Contract(contractAddress, recyloxABI, signer);
        console.log('contract =>', contract);
        setContract(contract);

        localStorage.setItem("connectRecylox", true);

        const name = await contract.name();
        const symbol = await contract.symbol();
        const decimals = await contract.decimals();
        const totalSupply = await contract.totalSupply();
        const yourAccountAddress = '0x1928062edfAFbCCb7D1C788B24F6aCdE80869048';// Replace with your actual Ethereum address
        const accountBalance = await contract.balanceOf(yourAccountAddress);

        console.log("account balance", accountBalance);
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

