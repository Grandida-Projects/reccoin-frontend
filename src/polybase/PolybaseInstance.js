import { Polybase } from '@polybase/client';
import { userSchema, companySchema } from './Schema';

const polybase = new Polybase({
  defaultNamespace: 'pk/0x459b5cd08825bddef2229aa0b36cc4000e055174f4a7e4803fb70d98b44bcf4f038a79c3f9c789520c4a67f1303621f58c1dc013033cba98518d6f91ecf3559a/reccoin-test-database',
});

const usersDb = polybase.database(userSchema);
const companiesDb = polybase.database(companySchema);

const PolybaseInstance = {
  addUser: async (user) => {
    try {
      await usersDb.insert(user);
      console.log('User added successfully');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  },

  addCompany: async (company) => {
    try {
      await companiesDb.insert(company);
      console.log('Company added successfully');
    } catch (error) {
      console.error('Error adding company:', error);
    }
  },

  getUsers: async () => {
    try {
      const users = await usersDb.find();
      console.log('Retrieved users:', users);
      // Process or return the retrieved users as needed
    } catch (error) {
      console.error('Error retrieving users:', error);
    }
  },

  getCompanies: async () => {
    try {
      const companies = await companiesDb.find();
      console.log('Retrieved companies:', companies);
      // Process or return the retrieved companies as needed
    } catch (error) {
      console.error('Error retrieving companies:', error);
    }
  },
};

export default PolybaseInstance;
