import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext.js"
export default function PrivateRoute() {
    const [state] = useContext(UserContext)
  return (
    state.user.status === "admin" ? <Outlet /> : <Navigate to="/transaction" />
  )
}
