import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import { TokenProvider } from './context/recylox.jsx';
import { RecycleProvider } from './context/recycle.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

//   <React.StrictMode>
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
//   </React.StrictMode>

// )
  
  <TokenProvider>
    <RecycleProvider>
      <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </React.StrictMode>
    </RecycleProvider>
  </TokenProvider>
)

