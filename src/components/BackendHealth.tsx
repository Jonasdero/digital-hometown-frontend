import React from "react"
import { useBackendHealth } from "../hooks/useBackendHealth"
import withAuth from "../hocs/withAuth"
import { AuthContextProps } from "../contexts/AuthContext"
import { Container } from "@chakra-ui/react"

function BackendHealthNoAuth({ loggedInUser }: AuthContextProps) {
  const { status } = useBackendHealth("LOADING")

  return (
    <Container>
      {loggedInUser !== undefined ? (
        <>
          <p>Backend status is {status.status}</p>
          <p>
            {loggedInUser.name.first} {loggedInUser.name.last} is logged in as {loggedInUser.role}
          </p>
        </>
      ) : (
        <div>Not authenticated</div>
      )}
    </Container>
  )
}

export default withAuth(BackendHealthNoAuth)
