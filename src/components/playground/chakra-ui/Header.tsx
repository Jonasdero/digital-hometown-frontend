import { ReactNode } from "react"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons"
import { NavLink } from "react-router-dom"
import LogInOutButton from "../../LogInOutButton"

const navLinks = [
  { name: "Home", url: "/" },
  { name: "Backend Health", url: "/health" },
  { name: "Chakra Ui", url: "/chakra-ui" },
  { name: "Login", url: "/log-in" },
]

const NavLinkItem = ({ children, url }: { children: ReactNode; url: string }) => (
  <Link
    px={2}
    py={1}
    as={NavLink}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    to={url}
  >
    {children}
  </Link>
)

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box>Logo</Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <NavLinkItem key={link.name} url={link.url}>
                {link.name}
              </NavLinkItem>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4} leftIcon={<AddIcon />}>
            Action
          </Button>
          <Menu>
            <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
              <Avatar size={"sm"} src={"https://images.unsplash.com/photo-1511367461989-f85a21fda167"} />
            </MenuButton>
            <MenuList>
              <LogInOutButton />
              <MenuDivider />
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuDivider />
              <MenuItem>Link 3</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {navLinks.map((link) => (
              <NavLinkItem key={link.name} url={link.url}>
                {link.name}
              </NavLinkItem>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}

export default Header
