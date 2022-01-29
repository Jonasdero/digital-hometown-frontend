import React from "react"

import { CloseIcon } from "@chakra-ui/icons"
import { Box, BoxProps, Button, Flex, FlexProps, Link, MenuIcon, Stack, Text, TextProps } from "@chakra-ui/react"

const Header = (props: FlexProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavBarContainer {...props}>
      <Logo w="100px" color={["white", "white", "primary.500", "primary.500"]} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}

const MenuToggle = ({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  )
}

type MenuItemType = TextProps & { children: React.ReactNode; isLast?: boolean; to: string }

const MenuItem = ({ children, isLast, to = "/", ...rest }: MenuItemType) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  )
}

const MenuLinks = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Box display={{ base: isOpen ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/how">How It works </MenuItem>
        <MenuItem to="/faetures">Features </MenuItem>
        <MenuItem to="/pricing">Pricing </MenuItem>
        <MenuItem to="/signup" isLast>
          <Button
            size="sm"
            rounded="md"
            color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"],
            }}
          >
            Create Account
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  )
}

function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  )
}

type NavBarContainerInterface = FlexProps & { children: React.ReactNode | null }

const NavBarContainer = ({ children, ...props }: NavBarContainerInterface) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default Header
