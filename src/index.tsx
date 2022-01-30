import "./index.css"

import React from "react"
import ReactDOM from "react-dom"

import { ChakraProvider } from "@chakra-ui/react"

import App from "./components/App"
import customTheme from "./components/playground/chakra-ui/theme"
import reportWebVitals from "./reportWebVitals"
import { AuthProvider } from "./contexts/AuthContext"
import { INITIAL_LOGGED_IN_USER } from "./types/User"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
    <AuthProvider initialLoggedInUser={undefined}>
      <App />
    </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
