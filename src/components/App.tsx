import "./App.css"

import React from "react"

import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom"

import { Link } from "@chakra-ui/react"

import { useBackendHealth } from "../hooks/useBackendHealth"
import logo from "../logo.svg"
import ChakraUiPlayground from "./playground/chakra-ui/ChakraUiPlayground"
import Login from "./playground/chakra-ui/Login"

function ReactStartPage() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Digital Hometown Frontend
        {/* <br /> */}
        {/* {new Date().toLocaleString()} */}
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <a href="https://startpage.com">Jan</a>
      <a href="https://www.google.com">Jonas was here</a>
      <a href="https://github.com/bdnkl">Der hier auch</a>
    </header>
  )
}

function BackendHealth() {
  const { status } = useBackendHealth("LOADING")

  return <div className="App-body">Backend status is {status.status}</div>
}

function App() {
  return (
    <div className="App">
      {/* HashRouter only needed because github pages put the root to github.io/<name> */}
      <HashRouter>
        {/* <Header /> */}
        <div className="Navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/health">Backend Health</Link>
            </li>
            <li>
              <Link to="/chakra-ui">Chakra Ui</Link>
            </li>
            <li>
              <Link to="/log-in">Login</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<ReactStartPage />} />
          <Route path="/health" element={<BackendHealth />} />
          <Route path="/chakra-ui" element={<ChakraUiPlayground />} />
          <Route path="/log-in" element={<Login />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
