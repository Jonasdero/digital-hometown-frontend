import * as React from "react"

import { DataGrid } from "@mui/x-data-grid"
import moment from "moment"
import { useEffect } from "react"
import { useNavigate } from "react-router"

import { AuthContextI } from "src/auth/AuthContext"
import userService from "src/services/UserService"

import withAuth from "../../auth/withAuth"

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "displayName", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "dateOfBirth",
    headerName: "Geburtstag",
    width: 200,
    valueGetter: (params: { row: User }) => moment(params.row.dateOfBirth || 0).format("DD.MM.YYYY"),
  },
  {
    field: "age",
    headerName: "Alter",
    type: "number",
    // valueGetter: (params: { row: User }) => userService.getAge(params.row.dateOfBirth),
  },
]

function UserTable({ currentUser }: AuthContextI) {
  const navigate = useNavigate()
  const [profiles, setProfiles] = React.useState<User[]>([])

  useEffect(() => {
    const getProfiles = async () => {
      const profilesData = await userService.getAll()
      if (profilesData) {
        const data = profilesData.filter((profile) => !currentUser?.blocked?.includes(profile.id))
        setProfiles(data)
      }
    }
    if (!profiles.length) getProfiles()
  }, [currentUser?.blocked, profiles])

  return profiles ? (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={profiles}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onCellClick={(params) => {
          navigate(`/profile/${params.id}`)
        }}
      />
    </div>
  ) : (
    <p>Lädt...</p>
  )
}

export default withAuth(UserTable)
