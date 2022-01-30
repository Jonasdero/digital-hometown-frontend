import { Button } from "@chakra-ui/react"
import { AuthContextProps } from "../contexts/AuthContext"
import withAuth from "../hocs/withAuth"
import { INITIAL_LOGGED_IN_USER } from "../types/User"

function LogInOut({ loggedInUser, setLoggedInUser }: AuthContextProps) {
  return (
    <>
      {loggedInUser === undefined ? (
        <Button
          onClick={() => {
            setLoggedInUser(INITIAL_LOGGED_IN_USER)
          }}
        >
          Login
        </Button>
      ) : (
        <Button
          onClick={() => {
            setLoggedInUser(undefined)
          }}
        >
          Logout
        </Button>
      )}
    </>
  )
}

export default withAuth(LogInOut)
