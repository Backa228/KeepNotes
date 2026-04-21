import './App.css'
import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import DashboardPage from "./pages/DashboardPage"
import RestrictedRoute from './shared/components/RestrictedRoute'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { refreshUser } from "./features/auth/api/authApi"
import ProtectedRoute from "./shared/components/ProtectedRoute"

function App() {
  const dispatch = useDispatch()
   
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path="/login" element={
          <RestrictedRoute>
            <LoginPage />
          </RestrictedRoute>
          }/>
        <Route path="/register" element={
          <RestrictedRoute>
            <RegisterPage />
          </RestrictedRoute>
        } />
        <Route path="/" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App
