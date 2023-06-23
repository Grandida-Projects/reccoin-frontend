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

  const initializeContract = async () => {
    try {
      setLoading(true);
      if (window.ethereum) {
        const getAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // save connected wallet address
        setConnectedAccount(getAccounts[0]);
        const ethereumProvider = new ethers.providers.Web3Provider(window.ethereum);
        // MetaMask requires requesting permission to connect users accounts
        setProvider(ethereumProvider);
        const signer = ethereumProvider.getSigner();
        const contractAddress = '0x92eD2020A7f0d39eA7bacb4c3DF335B9Ae56659a'; // Replace with the actual contract address
        const contract = new ethers.Contract(contractAddress, recycleABI, signer);
        console.log('contract =>', contract);
        setContract(contract);

        // Fetch companies and pickers from the contract
        const companies = await contract.getCompanyAddresses();

        console.log("companies =>", companies);

        const pickers = await contract.getPickerAddresses();
        setCompanies(companies);
        setPickers(pickers);

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

  const addCompany = async (companyAddress) => {
    try {
      setIsMethodCallLoading(true);
      const tx = await contract.addCompany(companyAddress);
      await tx.wait();
      setCompanies([...companies, companyAddress]);
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Error adding company:', error);
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

  const createPicker = async (name) => {
    try {
      setIsMethodCallLoading(true);
      const tx = await contract.createPicker(name);
      await tx.wait();
      const newPicker = await contract.getPickerByAddress(connectedAccount);
      setPickers([...pickers, newPicker]);
      setIsMethodCallLoading(false);
      setIsMethodCallSuccessful(true);
    } catch (error) {
      console.error('Error creating picker:', error);
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
    initializeContract();
  }, []);

  return (
    <RecycleContext.Provider
      value={{
        companies,
        pickers,
        loading,
        provider,
        contract,
        connectedAccount,
        isMethodCallLoading,
        isMethodCallSuccessful,
        addCompany,
        removeCompany,
        createPicker,
        removePicker,
        createRequest,
        approveRequest,
        rejectRequest
      }}
    >
      {children}
    </RecycleContext.Provider>
  );
};

RecycleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
