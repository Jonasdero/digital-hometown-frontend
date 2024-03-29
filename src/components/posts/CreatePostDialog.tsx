import * as React from "react"

import { FormControl as Box, FormHelperText, Stack, TextField } from "@mui/material"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import moment from "moment"
import { toast } from "react-toastify"

import { AuthContextI } from "src/auth/AuthContext"
import withAuth from "src/auth/withAuth"
import { POST_TYPES } from "src/global"
import PostService from "src/services/PostService"
import BasicSelect from "../general/input/BasicSelect"
import DatePicker from "../general/input/DatePicker"
import TagSelect from "../general/input/TagSelect"

interface CreatePostDialogI {
  open: boolean
  setOpen: (open: boolean) => void
}

function CreatePostDialog({ open, setOpen, currentUser }: CreatePostDialogI & AuthContextI) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

  const [postTitle, setPostTitle] = React.useState<string>("")
  const [postText, setPostText] = React.useState<string>("")
  const [postType, setPostType] = React.useState<string | undefined>(undefined)
  const [postTags, setPostTags] = React.useState<string[]>([])
  const [initialDate] = React.useState<Date>(new Date())
  const [initialFutureDate] = React.useState<Date>(new Date(initialDate.getTime() + 1000 * 60 * 60 * 24 * 365))

  const [eventLocation, setEventLocation] = React.useState<string>("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const eventDate = data.get("eventDate") as string
    const validityStart = (data.get("vadilityStart") as string) || initialDate
    const validityEnd = (data.get("vadilityEnd") as string) || initialFutureDate

    if (postType && postText && currentUser && postTitle) {
      setOpen(false)

      const newPost = {
        type: postType,
        text: postText,
        author: currentUser,
        title: postTitle,
        tags: postTags,
        created: PostService.getCreated(),
        validityStart: moment(validityStart, "DD.MM.YYYY").toDate().getTime(),
        validityEnd: moment(validityEnd, "DD.MM.YYYY").toDate().getTime(),
      } as Post

      if (postType === "Veranstaltung") {
        if (!(eventLocation && eventDate)) {
          toast.warn("Eine Veranstaltung muss aus ein Datum und einen Versanstaltungsort haben!")
          throw Error("Location or date is missing.")
        } else {
          newPost.eventLocation = eventLocation
          newPost.eventDate = moment(eventDate, "DD.MM.YYYY").toDate().getTime()
        }
      }
      toast.success("Dein Beitrag geht hinaus in deine Nachbarschaft!")
      PostService.create(newPost)
      setPostTitle("")
      setPostText("")
      setEventLocation("")
      setPostType(undefined)
      setPostTags([])
    } else {
      toast.warn("Ein Beitrag muss aus einem Title, einer Nachricht und einem Typ bestehen!")
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
      <Box fullWidth required component="form" onSubmit={handleSubmit}>
        <DialogTitle id="responsive-dialog-title">Erstelle einen Beitrag</DialogTitle>
        <DialogContent>
          <Stack spacing={2} style={{ width: 500 }}>
            <Stack direction="column" spacing={1}>
              <TextField
                required
                fullWidth
                type="text"
                autoFocus
                label="Gib deinem Beitrag einen Titel"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
              />
              <BasicSelect
                required
                name="postType"
                label="Beitragstyp auswählen"
                items={POST_TYPES.map((val) => {
                  return { value: val, label: val }
                })}
                initialValue={postType}
                onChange={setPostType}
              />
            </Stack>

            <Stack direction="row" spacing={3}>
              <DatePicker
                name="vadilityStart"
                initialValue={initialDate}
                placeholder="Gültigkeit ab"
                onlyPast={false}
              ></DatePicker>
              <DatePicker
                name="vadilityEnd"
                initialValue={initialFutureDate}
                placeholder="Gültigkeit bis"
                onlyPast={false}
              ></DatePicker>
            </Stack>

            <TextField
              required
              fullWidth
              value={postText}
              name="postText"
              variant="outlined"
              label="Schreibe deinen Beitrag"
              multiline
              size="small"
              minRows={8}
              maxRows={400}
              placeholder="Dein Beitrag"
              onChange={(e) => setPostText(e.target.value as string)}
            />

            {postType === "Veranstaltung" && (
              <>
                <DatePicker
                  onlyPast={false}
                  required={true}
                  name="eventDate"
                  initialValue={initialDate}
                  placeholder="Veranstaltungsdatum"
                  format="dd.MM.yyyy HH:mm"
                  views={["year", "month", "day", "hours", "minutes"]}
                  mask="__.__.____ __:__"
                />
                <TextField
                  required={true}
                  label="Veranstaltungsort"
                  fullWidth
                  value={eventLocation}
                  placeholder="OHM Professional School"
                  onChange={(e) => setEventLocation(e.target.value)}
                />
              </>
            )}

            <TagSelect
              label={"Beitragkategorien auswählen"}
              placeholder={"Sport / Werkzeug / ..."}
              onChange={setPostTags}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Abbruch</Button>
          <Button type="submit">Absenden</Button>
        </DialogActions>
        <FormHelperText id="my-helper-text">* Pflichtfelder</FormHelperText>
      </Box>
    </Dialog>
  )
}

export default withAuth(CreatePostDialog)
