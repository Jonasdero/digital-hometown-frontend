import { Button, Card, CardActions, CardContent, CardHeader, Chip, Stack, Switch } from "@mui/material"
import * as React from "react"

interface PostProperties {
  post: Post
}
function Post({ post }: PostProperties) {
  return (
    <Card>
      <CardHeader
        subheader={"von " + post.author.displayName || post.author}
        title={"[" + post.type + "] " + post.title}
      />
      <CardContent>{post.text}</CardContent>
      <Stack direction="row" justifyContent="flex-start" gap={1} sx={{ px: 1 }}>
        {post.categories.map((category, val) => (
          <Chip key={val} label={category} />
        ))}
      </Stack>
      <CardActions>
        <Button size="small">Mehr</Button>
      </CardActions>
    </Card>
  )
}

export default Post