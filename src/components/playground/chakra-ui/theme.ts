import { extendTheme } from "@chakra-ui/react"

const colors = {
  primary: {},
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const customTheme = extendTheme({ colors, config })

export default customTheme
