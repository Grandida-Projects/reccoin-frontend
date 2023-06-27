// recycle.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { recycleABI } from './recycle-abi';
import PropTypes from 'prop-types';

export const RecycleContext = createContext();

export const useRecycle = () => useContext(RecycleContext);

export const RecycleProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [pickers, setPickers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [connectedAccount, setConnectedAccount] = useState('');
  const [isMethodCallLoading, setIsMethodCallLoading] = useState(false);
  const [isMethodCallSuccessful, setIsMethodCallSuccessful] = useState(false);
  
  // added variables
  const [picker_count, setPicker_Count] = useState(0);
  const [isWalletConnected, setIsWalletconnected] = useState(false);

  // const initializeContract = async () => {
  //   try {
  //     setLoading(true);
  //     if (window.ethereum) {
       
  //       const getAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //       // save connected wallet address
  //       setConnectedAccount(getAccounts[0]);
  //       setIsWalletconnected(true);
       
  //       const ethereumProvider = new ethers.providers.Web3Provider(window.ethereum);
  //       // MetaMask requires requesting permission to connect users accounts
  //       setProvider(ethereumProvider);
  //       const signer = ethereumProvider.getSigner();
  //       const contractAddress = '0x92eD2020A7f0d39eA7bacb4c3DF335B9Ae56659a'; 
  //       // Replace with the actual contract address
  //       const contract = new ethers.Contract(contractAddress, recycleABI, signer);
  //       console.log('contract =>', contract);
  //       setContract(contract);

  //       // Fetch companies and pickers from the contract
  //       // const companies = await contract.getCompanyAddresses();

  //       // console.log("companies =>", companies);

  //       // const pickers = await contract.getPickerAddresses();
  //       // setCompanies(companies);
  //       // setPickers(pickers);
  //       // console.log(pickers);
  //       setLoading(false);
  //     } else {
  //       setLoading(false);
  //       // throw new Error('Please install MetaMask or any other Ethereum wallet extension.');
  //       alert('Please install MetaMask or any other Ethereum wallet extension.');
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     console.error('Error initializing contract:', error);
  //   }
  // };

const initializeRecycleContract = async () => {
  try {
    setLoading(true);
    if (window.ethereum) {
      const storedAccount = localStorage.getItem('connectedAccount');
      const storedWalletConnected = localStorage.getItem('isWalletConnected');

      console.log(storedAccount, storedWalletConnected);

      if (storedAccount && storedWalletConnected) {
        // Use the stored account and wallet connection status
        setConnectedAccount(storedAccount);
        const ethereumProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(ethereumProvider); 
        const signer = ethereumProvider.getSigner();
        const contractAddress = '0x92eD2020A7f0d39eA7bacb4c3DF335B9Ae56659a'; // Replace with the actual contract address
        const contract = new ethers.Contract(contractAddress, recycleABI, signer);
        console.log('contract =>', contract);
        setContract(contract);
      } else {
        const getAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = getAccounts[0];
        setConnectedAccount(account);
        localStorage.setItem('connectedAccount', account);
        const ethereumProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(ethereumProvider);
        const signer = ethereumProvider.getSigner();
        const contractAddress = '0x92eD2020A7f0d39eA7bacb4c3DF335B9Ae56659a'; // Replace with the actual contract address
        const contract = new ethers.Contract(contractAddress, recycleABI, signer);
        console.log('contract =>', contract);
        setContract(contract);
        localStorage.setItem('isWalletConnected', true);
      }

      // Fetch companies and pickers from the contract
      // const companies = await contract.getCompanyAddresses();

      // console.log("companies =>", companies);

      // const pickers = await contract.getPickerAddresses();
      // setCompanies(companies);
      // setPickers(pickers);
      // console.log(pickers);

      setLoading(false);
    } else {
      setLoading(false);
      // throw new Error('Please install MetaMask or any other Ethereum wallet extension.');
      alert('Please install MetaMask or any other Ethereum wallet extension.');
    }
  } catch (error) {
    setLoading(false);
    console.error('Error initializing contract:', error);
  }
};

  const registerPicker = async (name, email) => {
    try {
      setIsMethodCallLoading(true);
      const tx = await contract.registerPicker(name, email);
      await tx.wait();
      const newPicker = await contract.getPicker(connectedAccount);
      setPickers([...pickers, newPicker]);
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Error registering user:', error);
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(false);
    }
  };

  const editPicker = async (name, email) => {
    try {
      setIsMethodCallLoading(true);
      const transaction = await contract.connect(signer).editPicker(name, email);
      await transaction.wait();
      console.log('Picker edited successfully!');
      // Additional logic or UI updates after successful edit
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Failed to edit picker:', error);
      // Handle error scenario
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(false);
    }
  };

  const updatePickerName = async (name) => {
    try {
      setIsMethodCallLoading(true);
      const transaction = await contract.connect(signer).updatePickerName(name);
      await transaction.wait();
      console.log('Picker name updated successfully!');
      // Additional logic or UI updates after successful update
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Failed to update picker name:', error);
      // Handle error scenario
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(false);
    }
  };
  
  const updatePickerEmail = async (email) => {
    try {
      setIsMethodCallLoading(true);
      const transaction = await contract.connect(signer).updatePickerEmail(email);
      await transaction.wait();
      console.log('Picker email updated successfully!');
      // Additional logic or UI updates after successful update
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Failed to update picker email:', error);
      // Handle error scenario
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(false);
    }
  }

  const getPicker = async (address) => {
    try {
      const picker = await contract.getPicker(address);
      console.log('Picker details:', picker);
      // Additional logic or UI updates with the picker data
    } catch (error) {
      console.error('Failed to fetch picker details:', error);
      // Handle error scenario
    }
  };

  const getRegisteredPickerCount = async () => {
    try {
      const count = await contract.getRegisteredPickerCount();
      console.log('Registered picker count:', count);
      setPicker_Count(count);
      // Additional logic or UI updates with the count data
    } catch (error) {
      console.error('Failed to fetch registered picker count:', error);
      // Handle error scenario
    }
  };  
  
  const payPicker = async (transactionId) => {
    try {
      setIsMethodCallLoading(true);
      const transaction = await contract.connect(signer).payPicker(transactionId);
      await transaction.wait();
      console.log('Picker paid successfully!');
      // Additional logic or UI updates after successful payment
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Failed to pay picker:', error);
      // Handle error scenario
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(false);
    }
  };
   
  const removePicker = async (pickerAddress) => {
    try {
      setIsMethodCallLoading(true);
      const tx = await contract.removePicker(pickerAddress);
      await tx.wait();
      setPickers(pickers.filter((address) => address !== pickerAddress));
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Error removing picker:', error);
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(false);
    }
  };

  const registerCompany = async (name, minWeightRequirement, maxPricePerKg, active) => {
    try {
      setIsMethodCallLoading(true);
      const tx = await contract.registerCompany(name, minWeightRequirement, maxPricePerKg, active);
      await tx.wait();
      const newCompany = await contract.getCompany(connectedAccount);
      setCompanies([...companies, newCompany]);
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Error registering company:', error);
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(false);
    }
  };

  const editCompany = async (name, minWeightRequirement, maxPricePerKg, active) => {
    try {
      setIsMethodCallLoading(true);
      const transaction = await contract.connect(signer).editCompany(
        name,
        minWeightRequirement,
        maxPricePerKg,
        active
      );
      await transaction.wait();
      console.log('Company edited successfully!');
      // Additional logic or UI updates after successful edit
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Failed to edit company:', error);
      // Handle error scenario
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(false);
    }
  };

  const updateCompanyName = async (name) => {
    try {
      setIsMethodCallLoading(true);
      const transaction = await contract.connect(signer).updateCompanyName(name);
      await transaction.wait();
      console.log('Company name updated successfully!');
      // Additional logic or UI updates after successful update
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Failed to update company name:', error);
      // Handle error scenario
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(false);
    }
  };
  
  const updateCompanyMinWeightRequirement = async (minWeightRequirement) => {
    try {
      setIsMethodCallLoading(true);
      const transaction = await contract.connect(signer).updateCompanyMinWeightRequirement(minWeightRequirement);
      await transaction.wait();
      console.log('Company minimum weight requirement updated successfully!');
      // Additional logic or UI updates after successful update
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Failed to update company minimum weight requirement:', error);
      // Handle error scenario
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(false);
    }
  };

  const updateCompanyMaxPricePerKg = async (maxPricePerKg) => {
    try {
      setIsMethodCallLoading(true);
      const transaction = await contract.connect(signer).updateCompanyMaxPricePerKg(maxPricePerKg);
      await transaction.wait();
      console.log('Company maximum price per kg updated successfully!');
      // Additional logic or UI updates after successful update
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Failed to update company maximum price per kg:', error);
      // Handle error scenario
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(false);
    }
  };
  
  const updateCompanyActiveStatus = async (active) => {
    try {
      setIsMethodCallLoading(true);
      const transaction = await contract.connect(signer).updateCompanyActiveStatus(active);
      await transaction.wait();
      console.log('Company active status updated successfully!');
      // Additional logic or UI updates after successful update
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Failed to update company active status:', error);
      // Handle error scenario
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(false);
    }
  };
  
  const removeCompany = async (companyAddress) => {
    try {
      setIsMethodCallLoading(true);
      const tx = await contract.removeCompany(companyAddress);
      await tx.wait();
      setCompanies(companies.filter((address) => address !== companyAddress));
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Error removing company:', error);
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(false);
    }
  };

  const depositPlastic = async (companyAddress, weight) => {
    try {
      setIsMethodCallLoading(true);
      const transaction = await contract.connect(signer).depositPlastic(companyAddress, weight);
      await transaction.wait();
      console.log('Plastic deposited successfully!');
      // Additional logic or UI updates after successful deposit
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Failed to deposit plastic:', error);
      // Handle error scenario
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(false);
    }
  };
  
  const validatePlastic = async (transactionId) => {
    try {
      setIsMethodCallLoading(true);
      const transaction = await contract.connect(signer).validatePlastic(transactionId);
      await transaction.wait();
      console.log('Plastic validated successfully!');
      // Additional logic or UI updates after successful validation
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Failed to validate plastic:', error);
      // Handle error scenario
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(false);
    }
  };
  
  const createRequest = async (companyId, material, quantity) => {
    try {
      setIsMethodCallLoading(true);
      const tx = await contract.createRequest(companyId, material, quantity);
      await tx.wait();
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Error creating request:', error);
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(false);
    }
  };

  const approveRequest = async (requestId) => {
    try {
      setIsMethodCallLoading(true);
      const tx = await contract.approveRequest(requestId);
      await tx.wait();
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Error approving request:', error);
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(false);
    }
  };

  const rejectRequest = async (requestId) => {
    try {
      setIsMethodCallLoading(true);
      const tx = await contract.rejectRequest(requestId);
      await tx.wait();
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Error rejecting request:', error);
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(false);
    }
  };

  

  useEffect(() => {
    initializeRecycleContract()
  }, []);

  return (
    <RecycleContext.Provider
      value={{
        // companies,
        pickers,
        loading,
        provider,
        contract,
        connectedAccount,
        isMethodCallLoading,
        isMethodCallSuccessful,
        picker_count,
        registerPicker,
        editPicker,
        getPicker,
        updatePickerName,
        updatePickerEmail,
        getRegisteredPickerCount,
        payPicker,
        removePicker,
        registerCompany,
        editCompany,
        updateCompanyName,
        updateCompanyMinWeightRequirement,
        updateCompanyMaxPricePerKg,
        updateCompanyActiveStatus,
        removeCompany,
        depositPlastic,
        validatePlastic,
        createRequest,
        approveRequest,
        rejectRequest,
        initializeRecycleContract
      }}
    >
      {children}
    </RecycleContext.Provider>
  );
};

RecycleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

