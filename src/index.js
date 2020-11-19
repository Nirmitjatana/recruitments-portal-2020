import React from 'react'
import ReactDOM from 'react-dom'
import './tailwind.generated.css'
import './assets/fonts/fonts.css'
import './index.css'
import reportWebVitals from './reportWebVitals'
import App from './App'
import 'firebase/app'
import { FirebaseAppProvider } from 'reactfire'

const firebaseConfig = {
  apiKey: 'AIzaSyBm9SHCk7PWnm8psD__ntAVpjNV9TVidY0',
  authDomain: 'dsc-recruitments.firebaseapp.com',
  databaseURL: 'https://dsc-recruitments.firebaseio.com',
  projectId: 'dsc-recruitments',
  storageBucket: 'dsc-recruitments.appspot.com',
  messagingSenderId: '45632890398',
  appId: '1:45632890398:web:bf6f230f1d9dec5e74700f',
  measurementId: 'G-5SVM40P9EF'
}

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseAppProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
