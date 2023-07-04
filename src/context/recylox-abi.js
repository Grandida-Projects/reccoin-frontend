/* eslint-disable no-mixed-spaces-and-tabs */
export const recyloxABI = [
	{
	  "type": "constructor",
	  "name": "",
	  "inputs": [
		{
		  "type": "string",
		  "name": "_name",
		  "internalType": "string"
		},
		{
		  "type": "string",
		  "name": "_symbol",
		  "internalType": "string"
		},
		{
		  "type": "uint256",
		  "name": "initialSupply",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "event",
	  "name": "Approval",
	  "inputs": [
		{
		  "type": "address",
		  "name": "owner",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "spender",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "value",
		  "indexed": false,
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "OwnershipTransferred",
	  "inputs": [
		{
		  "type": "address",
		  "name": "previousOwner",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "newOwner",
		  "indexed": true,
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "Transfer",
	  "inputs": [
		{
		  "type": "address",
		  "name": "from",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "to",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "value",
		  "indexed": false,
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "anonymous": false
	},
	{
	  "type": "function",
	  "name": "allowance",
	  "inputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "approve",
	  "inputs": [
		{
		  "type": "address",
		  "name": "spender",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "amount",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "bool",
		  "name": "",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "balanceOf",
	  "inputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "burn",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "amount",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "decimals",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint8",
		  "name": "",
		  "internalType": "uint8"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "mint",
	  "inputs": [
		{
		  "type": "address",
		  "name": "account",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "amount",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "name",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "string",
		  "name": "",
		  "internalType": "string"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "owner",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "address"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "renounceOwnership",
	  "inputs": [],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "symbol",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "string",
		  "name": "",
		  "internalType": "string"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "totalSupply",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "transfer",
	  "inputs": [
		{
		  "type": "address",
		  "name": "recipient",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "amount",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "bool",
		  "name": "",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "transferFrom",
	  "inputs": [
		{
		  "type": "address",
		  "name": "sender",
		  "internalType": "address"
		},
		{
		  "type": "address",
		  "name": "recipient",
		  "internalType": "address"
		},
		{
		  "type": "uint256",
		  "name": "amount",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "bool",
		  "name": "",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "transferOwnership",
	  "inputs": [
		{
		  "type": "address",
		  "name": "newOwner",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	}
  ]