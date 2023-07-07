/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { recyloxABI } from './recylox-abi';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { recycleABI } from './recycle-abi';

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
  const [adminAddress, setAdminAddress] = useState('');



/*******************************  recycle state variables   *********************************/
    const [recycleContract, setRecycleContract] = useState(null);    
    const [picker_count, set_Picker_Count] = useState(0);
    const [company_count, set_Company_Count] = useState(0);
    const [account_category, set_account_category] = useState('');
    const [tokenHolderBalance, setTokenHolderBalance] = useState(0);
    const [totalTransaction, setTotalTransaction] = useState(0)
  

  useEffect (() => {
    try {
      if (window.ethereum.selectedAddress) {
        initializeContract();
      }
    } catch (error) {
      console.log(error);
    } 

  }, [])

  const initializeContract = async () => {
    try {
      setLoading(true)
      if (window.ethereum) {
        const getAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // save connected wallet address
        const _connectedAccount = getAccounts[0];
        setConnectedAccount(_connectedAccount);
        console.log("account ",  getAccounts[0]);
        const ethereumProvider = new ethers.providers.Web3Provider(window.ethereum);
        // MetaMask requires requesting permission to connect users accounts
        setProvider(ethereumProvider);
        const signer = ethereumProvider.getSigner();

        /* recylox contract */
        const contractAddress = '0x509D44Bf4E1E5E696eA288eC4fF1114f79a09AC9'; // Replace with the actual contract address
        const contract = new ethers.Contract(contractAddress, recyloxABI, signer);
        console.log('contract =>', contract);
        setContract(contract);

/*******************************    get recycle contract   *********************************/
        const recycleContractAddress = '0x96843178AEf01A428798177F45E809Dc6F7b76f2'; // Replace with the actual contract address
        const recycleContract = new ethers.Contract(recycleContractAddress, recycleABI, signer);
        console.log('recycle contract =>', recycleContract);
        setRecycleContract(recycleContract);

/*******************************    recylox functionalities   *********************************/

        const name = await contract.name();
        const symbol = await contract.symbol();
        const decimals = await contract.decimals();
        const totalSupply = await contract.totalSupply();
        const yourAccountAddress = '0x1928062edfAFbCCb7D1C788B24F6aCdE80869048';// Replace with your actual Ethereum address
        setAdminAddress(yourAccountAddress);
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


/*******************************    recycle functionalities   *********************************/       
          // get no of pickers
      const no_of_registered_pickers = await recycleContract.getRegisteredPickerCount();
      console.log('Registered picker count:', no_of_registered_pickers);
      set_Picker_Count(no_of_registered_pickers);
      console.log("no_of_registered_pickers =>", no_of_registered_pickers);

      // get no of companies
      const no_of_registered_companies = await recycleContract.getRegisteredCompanyCount();
      console.log('Registered company count:', no_of_registered_companies);
      set_Company_Count(no_of_registered_companies);
      console.log("no_of_registered_companies =>", no_of_registered_companies); 

      // get tokenholder balance
      const balance = await recycleContract.balanceOf();
      console.log("token balance", balance);
      setTokenHolderBalance(balance);

      // get total transaction
      const totalTransactions = await recycleContract.totalTransactions();
      setTotalTransaction(totalTransactions)
      console.log("totalTransaction => ", totalTransactions);

      try {
        const transaction = await recycleContract.transactions(0);
        console.log("transaction structs =>", transaction);
        
      } catch (error) {

        console.log("transactions struct =>", error.reason);
        
      }

      try {
        const picker = await recycleContract.getPicker(_connectedAccount);
        console.log("picker array", picker);
        console.log("picker name => ", picker[0]);
        if (picker[0]) {
          set_account_category("picker");
        }
      } catch (error) {
        console.log("picker array => ", error);
      } //ends getPicker
     
      // get company
      try {

        const company = await recycleContract.getCompany(_connectedAccount);
        console.log("company array", company);
        if (company[0]) {
          set_account_category("company");

        } 
      } catch (error) {
        console.log("company array => ", error);
      } //ends getCompany
      

      } else {
        setLoading(false)
        // throw new Error('Please install MetaMask or any other Ethereum wallet extension.');
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Please install MetaMask or any other Ethereum wallet extension.',
          confirmButtonColor:"#006D44",
          customClass: {
              icon: "font-montserrat",
              title: " font-montserrat text-[20px] text-[#000] font-[600]",
              text: "font-montserrat, text-[16px] text-[#000] font-[600]",
          }
        })
        console.log('Please install MetaMask or any other Ethereum wallet extension.')
      }
    } catch (error) {
      setLoading(false);

      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: `Error initializing contract: ${error.message}`,
        confirmButtonColor:"#006D44",
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      });
      console.error('Error initializing contract:', error);
    }
  }; // ends initializeContract

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
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: `Contract is not initialized. Connect wallet to get started`,
          confirmButtonColor:"#006D44",
          customClass: {
              icon: "font-montserrat",
              title: " font-montserrat text-[20px] text-[#000] font-[600]",
              text: "font-montserrat, text-[16px] text-[#000] font-[600]",
          }
        })
        throw new Error('Contract is not initialized.');
      }
    } catch (error) {
      setIsMethodCallLoading(false)
      setIsMethodCallSuccessful(false)
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: `Error transferring tokens: ${error.reason}`,
        confirmButtonColor:"#006D44",
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
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
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Contract is not initialized. Connect wallet to get started',
          confirmButtonColor:"#006D44",
          customClass: {
              icon: "font-montserrat",
              title: " font-montserrat text-[20px] text-[#000] font-[600]",
              text: "font-montserrat, text-[16px] text-[#000] font-[600]",
          }
        })
        throw new Error('Contract is not initialized.');
        
      }
    } catch (error) {
      setIsMethodCallLoading(false)
      setIsMethodCallSuccessful(false)
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: `Error transferring tokens: ${error.reason}`,
        confirmButtonColor:"#006D44",
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
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
        setIsMethodCallSuccessful(true);
        setIsMethodCallLoading(false);
      } else {
        setIsMethodCallLoading(false);
        setIsMethodCallSuccessful(false);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Contract is not initialized. Connect wallet to get started',
          confirmButtonColor:"#006D44",
          customClass: {
              icon: "font-montserrat",
              title: " font-montserrat text-[20px] text-[#000] font-[600]",
              text: "font-montserrat, text-[16px] text-[#000] font-[600]",
          }
        })
        throw new Error('Contract is not initialized.');
      }
    } catch (error) {
      setIsMethodCallLoading(false)
      setIsMethodCallSuccessful(false)
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: `Error transferring tokens: ${error.reason}`,
        confirmButtonColor:"#006D44",
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
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
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Contract is not initialized. Connect wallet to get started',
          confirmButtonColor:"#006D44",
          customClass: {
              icon: "font-montserrat",
              title: " font-montserrat text-[20px] text-[#000] font-[600]",
              text: "font-montserrat, text-[16px] text-[#000] font-[600]",
          }
        })
        throw new Error('Contract is not initialized.');
      }
    } catch (error) {
      setIsMethodCallLoading(false)
      setIsMethodCallSuccessful(false);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: `Error approving tokens:', ${error.reason}`,
        confirmButtonColor:"#006D44",
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
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
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Contract is not initialized. Connect wallet to get started',
          confirmButtonColor:"#006D44",
          customClass: {
              icon: "font-montserrat",
              title: " font-montserrat text-[20px] text-[#000] font-[600]",
              text: "font-montserrat, text-[16px] text-[#000] font-[600]",
          }
        })
        throw new Error('Contract is not initialized.');
      }
    } catch (error) {
      setIsMethodCallLoading(false)
      setIsMethodCallSuccessful(false);
      
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: `Error transferring tokens: ${error.reason}`,
        confirmButtonColor:"#006D44",
        customClass: {
            icon: "font-montserrat",
            title: " font-montserrat text-[20px] text-[#000] font-[600]",
            text: "font-montserrat, text-[16px] text-[#000] font-[600]",
        }
      })
      console.error('Error transferring tokens from:', error);
    }
  };


  return (
    <TokenContext.Provider
      value={{
        loading,
        contract,
        adminAddress,
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
        isMethodCallLoading,

        recycleContract,
        picker_count,
        company_count,
        account_category,
        tokenHolderBalance
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

TokenProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

