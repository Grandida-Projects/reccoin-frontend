// import { useState } from 'react'
import { MainRoutes } from './routes/index';
import { UserDashboardRoutes } from './routes/dashboard/user.jsx';
import { CompanyDashboardRoutes } from './routes/dashboard/company.jsx';
import { AdminDashboardRoutes } from "./routes/dashboard/admin.jsx";

// // wagmi
// import { WagmiConfig, createConfig, configureChains } from 'wagmi';
// import { polygonMumbai } from 'wagmi/chains';
// import { alchemyProvider } from 'wagmi/providers/alchemy';
// import { publicProvider } from 'wagmi/providers/public';
// import { connectorsForWallets } from '@rainbow-me/rainbowkit';
// import {
//   injectedWallet,
//   metaMaskWallet,
//   trustWallet,
// } from '@rainbow-me/rainbowkit/wallets';
// import '@rainbow-me/rainbowkit/styles.css';
// import { lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'

// import { createPublicClient, http } from 'viem'


// const { chains, provider, webSocketProvider } = configureChains(
//   [polygonMumbai],
//   [
//     alchemyProvider({ apiKey: '82qowNhkJBoR8Qt2x-EdvSvPZWTRqW_8' }),
//     publicProvider(),
//   ]
// );

// const connectors = connectorsForWallets([
//   {
//     groupName: 'Recommended',
//     wallets: [
//       injectedWallet({ chains }),
//       metaMaskWallet({ chains }),
//       trustWallet({ chains }),
//     ],
//   },
// ]);

// const wagmiClient = createConfig({
//   autoConnect: true,
//   connectors,
//   provider,
//   webSocketProvider,
// });

// const config = createConfig({
//   autoConnect: true,
//   publicClient: createPublicClient({
//     chain: mainnet,
//     transport: http()
//   }),
// })

// function App() {

//   return (

//     <WagmiConfig client={config}>
//           <RainbowKitProvider
//             chains={chains}
//             modalSize='compact'
//             appInfo={{
//               appName: 'PayBlock',
//             }}
//             theme={lightTheme({
//               accentColor: '#48bb78',
//               accentColorForeground: '#1A202C',
//               borderRadius: 'large',
//               fontStack: 'system',
//               overlayBlur: 'small',
//             })}
//           >
//             <MainRoutes />
//             <UserDashboardRoutes />
//             <CompanyDashboardRoutes />
//             <AdminDashboardRoutes />

//       </RainbowKitProvider>
//     </WagmiConfig>
   
//   );
// }


import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { mainnet, polygon, optimism } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygon],
  [alchemyProvider({ apiKey: 'rhW5xFUm8_XwK9xG2BQtqx-yBJYi6vDQ' }), publicProvider()],
)

// Set up wagmi config
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: '...',
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
})

// Pass config to React Context Provider
function App() {
  return (
    <WagmiConfig config={config}>
      <MainRoutes />
      <UserDashboardRoutes />
      <CompanyDashboardRoutes />
      <AdminDashboardRoutes />
    </WagmiConfig>
  )
}



export default App;
