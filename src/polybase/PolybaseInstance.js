import { Polybase, LocalStorageStoreAdapter } from 'polybase-js';
import { userSchema, companySchema } from './Schema';

const polybase = new Polybase({
  adapter: new LocalStorageStoreAdapter(), // Use an appropriate adapter for your use case
});

const usersDb = polybase.createDatabase(userSchema);
const companiesDb = polybase.createDatabase(companySchema);

const PolybaseInstance = {
  addUser: async (user) => {
    await usersDb.add(user);
  },

  addCompany: async (company) => {
    await companiesDb.add(company);
  },

  getUsers: async () => {
    const query = 'SELECT * FROM users';
    const result = await usersDb.query(query);
    return result;
  },

  getCompanies: async () => {
    const query = 'SELECT * FROM companies';
    const result = await companiesDb.query(query);
    return result;
  },
};

export default PolybaseInstance;
