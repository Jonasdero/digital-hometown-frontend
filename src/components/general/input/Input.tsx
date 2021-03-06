import { TextField } from "@mui/material"
import React, { useEffect } from "react"

export interface InputProps {
  name: string
  placeholder: string
  initialValue: string | number | undefined
}
function Input(props: InputProps) {
  const [value, setValue] = React.useState<string | number | undefined>(props.initialValue)

  useEffect(() => {
    setValue(props.initialValue)
  }, [props.initialValue])

  function handleChange(event: any) {
    event.preventDefault()
    setValue(event.target.value)
  }
  return (
    <TextField
      required
      fullWidth
      id={props.name}
      type={typeof props.initialValue === "number" ? "number" : "text"}
      label={props.placeholder}
      name={props.name}
      // autoFocus
      onChange={handleChange}
      value={value != null ? value : ""}
      sx={{ mt: 2, mb: 2 }}
    />
  )
}

export default Input
