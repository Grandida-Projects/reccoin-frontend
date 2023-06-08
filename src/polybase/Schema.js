const userSchema = {
    name: 'users',
    fields: [
      { name: 'id', type: 'string', primaryKey: true },
      { name: 'name', type: 'string' },
      { name: 'email', type: 'string' },
      { name: 'walletAddress', type: 'string' },
      { name: 'verification', type: 'boolean' },
    ],
  };
  
  const companySchema = {
    name: 'companies',
    fields: [
      { name: 'id', type: 'string', primaryKey: true },
      { name: 'companyName', type: 'string' },
      { name: 'minimumWeightRequired', type: 'number' },
      { name: 'maximumPricePerKilogram', type: 'number' },
      { name: 'walletAddress', type: 'string' },
      { name: 'verification', type: 'boolean' },
    ],
  };
  
  export { userSchema, companySchema };
  