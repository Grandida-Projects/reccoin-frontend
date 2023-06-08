import PolybaseInstance from './PolybaseInstance';

const DataHandler = {
  addUser: async (user) => {
    try {
      await PolybaseInstance.addUser(user);
      console.log('User added successfully');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  },

  addCompany: async (company) => {
    try {
      await PolybaseInstance.addCompany(company);
      console.log('Company added successfully');
    } catch (error) {
      console.error('Error adding company:', error);
    }
  },

  getUsers: async () => {
    try {
      const users = await PolybaseInstance.getUsers();
      console.log('Retrieved users:', users);
      // Process or return the retrieved users as needed
    } catch (error) {
      console.error('Error retrieving users:', error);
    }
  },

  getCompanies: async () => {
    try {
      const companies = await PolybaseInstance.getCompanies();
      console.log('Retrieved companies:', companies);
      // Process or return the retrieved companies as needed
    } catch (error) {
      console.error('Error retrieving companies:', error);
    }
  },
};

export default DataHandler;
