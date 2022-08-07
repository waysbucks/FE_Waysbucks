import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
export default function PrivateRoute() {
    const [state] = useContext(UserContext)
    console.log(state)
  return (
    state.user.status === "admin" ? <Outlet /> : <Navigate to="/" />
  )
}
