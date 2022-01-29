import "./App.css"

import React from "react"

import { HashRouter, Route, Routes } from "react-router-dom"

import { Box, Center, ChakraProvider, Heading, Image, Link, Stack, Text } from "@chakra-ui/react"

import { useBackendHealth } from "../hooks/useBackendHealth"
import logo from "../logo.svg"
import ChakraUiPlayground from "./playground/chakra-ui/ChakraUiPlayground"
import Login from "./playground/chakra-ui/Login"
import Header from "./playground/chakra-ui/Header"
import Footer from "./playground/chakra-ui/Footer"
import customTheme from "./playground/chakra-ui/theme"

function ReactStartPage() {
  return (
    <Center>
      <Stack textAlign={"center"}>
        <Image src={logo} alt="logo" maxHeight={"40vh"} />
        <Heading>Digital Hometown Frontend</Heading>
        <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </Link>
        <Link href="https://startpage.com">Jan</Link>
        <Link href="https://www.google.com">Jonas was here</Link>
        <Link href="https://github.com/bdnkl">Der hier auch</Link>
      </Stack>
    </Center>
  )
}

function BackendHealth() {
  const { status } = useBackendHealth("LOADING")

  return (
    <Center boxSize={"100%"}>
      <Text>Backend status is {status.status}</Text>
    </Center>
  )
}

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <HashRouter>
        <Stack minHeight="100vh" justify={"space-between"}>
          {/* HashRouter only needed because github pages put the root to github.io/<name> */}
          <Header />
          <Box my={2}>
            <Routes>
              <Route path="/" element={<ReactStartPage />} />
              <Route path="/health" element={<BackendHealth />} />
              <Route path="/chakra-ui" element={<ChakraUiPlayground />} />
              <Route path="/log-in" element={<Login />} />
            </Routes>
          </Box>
          <Footer />
        </Stack>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App
