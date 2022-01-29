import React from "react"

import { StarIcon } from "@chakra-ui/icons"
import {
  Badge,
  Box,
  Button,
  Center,
  ChakraProvider,
  Container,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  PinInput,
  PinInputField,
  SimpleGrid,
  Spinner,
  Stack,
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
    <Box maxW={"md"} borderWidth="1px" borderRadius="lg">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" letterSpacing="wider">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wider"
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
        <NumberInputField type="number" />
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

function ChakraUiPlayground() {
  return (
    <Box p={3}>
      Responsive Grid
      <SimpleGrid minChildWidth="20em" spacing={3}>
        <Box>
          <Box bg="tomato" w="100%" p={4} color="white">
            This is the Box
          </Box>
          <Button>Button</Button>
        </Box>

        <Box>
          <AirbnbExample />
        </Box>

        <Box>
          <EditableText />
          <DifferentInputs />
          <DifferentSpinners />
          <ToastExample />
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default ChakraUiPlayground
