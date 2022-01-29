import React from "react"

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

import { StarIcon } from "@chakra-ui/icons"
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  ButtonGroupProps,
  ChakraProvider,
  Container,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  HTMLChakraProps,
  IconButton,
  Image,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  PinInput,
  PinInputField,
  Spinner,
  Stack,
  Text,
  TextProps,
  useToast,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"

import customTheme from "./theme"

function AirbnbExample() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < property.rating ? "teal.500" : "gray.300"} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

function EditableText() {
  return (
    <Editable
      defaultValue="Das ist editierbar"
      onSubmit={(newText) => {
        console.log(newText)
      }}
    >
      <EditablePreview />
      <EditableInput />
    </Editable>
  )
}

function DifferentSpinners() {
  return (
    <Stack direction="row" spacing={4}>
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </Stack>
  )
}

function DifferentInputs() {
  const toast = useToast()
  return (
    <Stack spacing={3}>
      <Input variant="outline" placeholder="Outline" />
      <Input variant="flushed" placeholder="Flushed" />
      <Input variant="unstyled" placeholder="Unstyled" />
      <Input placeholder="number" type="number" />
      <NumberInput variant="flushed" placeholder="Number">
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <HStack>
        <PinInput
          mask
          type="alphanumeric"
          onComplete={(value) => {
            toast({
              title: "Pin komlett",
              description: `Du hast ${value} eingegeben!`,
              status: "info",
              duration: 4000,
              isClosable: true,
            })
          }}
        >
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </Stack>
  )
}

function ToastExample() {
  const toast = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  )
}

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" {...props}>
    <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
    <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
    <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
  </ButtonGroup>
)

function Logo(props: HTMLChakraProps<"svg">) {
  return (
    <Image
      width="30px"
      src="https://camo.githubusercontent.com/ca111d0962771266e006390606428280ade8694ffaff0b0f8e20c46f924da06f/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f6368616b72612d75692f6f7267616e697a6174696f6e2f302f6176617461722e7376673f6176617461724865696768743d313330"
    />
  )
}

export const Copyright = (props: TextProps) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} Digital Home. All rights reserved.
  </Text>
)

function Footer() {
  return (
    <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="5" px={{ base: "4", md: "8" }}>
      <Stack>
        <Stack direction="row" spacing="4" align="center" justify="space-between">
          <Logo />
          <SocialMediaLinks />
        </Stack>
        <Copyright alignSelf={{ base: "center", sm: "start" }} />
      </Stack>
    </Box>
  )
}

function ChakraUiPlayground() {
  return (
    <ChakraProvider theme={customTheme}>
      {/* <Header /> */}
      <Container>
        <Wrap>
          <WrapItem>
            <Box bg="tomato" w="100%" p={4} color="white" minWidth="300px">
              This is the Box
            </Box>
          </WrapItem>
          <WrapItem>
            <Button>Button</Button>
          </WrapItem>
          <WrapItem>
            <AirbnbExample />
          </WrapItem>
        </Wrap>
        <EditableText />
        <DifferentInputs />
        <DifferentSpinners />
        <ToastExample />
      </Container>
      <Footer />
    </ChakraProvider>
  )
}

export default ChakraUiPlayground
