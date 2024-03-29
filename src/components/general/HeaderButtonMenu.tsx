import { Chat, Edit, List, Star, FindInPage } from "@mui/icons-material"
import { Button } from "@mui/material"
import Tooltip from "@mui/material/Tooltip"
import * as React from "react"
import { useNavigate } from "react-router-dom"

import { AuthContextI } from "../../auth/AuthContext"
import withAuth from "../../auth/withAuth"
import CreatePostDialog from "../posts/CreatePostDialog"

function HeaderButtonMenu({ currentUser }: AuthContextI) {
  const [postDialogOpen, setPostDialogOpen] = React.useState(false)
  const navigate = useNavigate()

  return (
    <>
      <Tooltip title="Merkzettel">
        <Button variant="text" onClick={() => navigate("/merkzettel")} color="inherit" startIcon={<Star />}>
          Merkzettel
        </Button>
      </Tooltip>
      <Tooltip title="Alle Beiträge">
        <Button variant="text" onClick={() => navigate("/posts")} color="inherit" startIcon={<List />}>
          Alle Beiträge
        </Button>
      </Tooltip>
      <Tooltip title="Beitrag erstellen">
        <Button variant="text" onClick={() => setPostDialogOpen(true)} color="inherit" startIcon={<Edit />}>
          Beiträge erstellen
        </Button>
      </Tooltip>
      <Tooltip title="Chat">
        <Button variant="text" onClick={() => navigate("/chat/first")} color="inherit" startIcon={<Chat />}>
          Chat
        </Button>
      </Tooltip>
      <Tooltip title="Marktplatz">
        <Button variant="text" onClick={() => navigate("/marketplace")} color="inherit" startIcon={<FindInPage />}>
          Marktplatz
        </Button>
      </Tooltip>

      <CreatePostDialog open={postDialogOpen} setOpen={setPostDialogOpen} />
    </>
  )
}

export default withAuth(HeaderButtonMenu)
