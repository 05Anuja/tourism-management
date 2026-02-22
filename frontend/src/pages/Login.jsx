import React from "react"
import axios from 'axios'
import { useState, useContext } from "react"
import { AttractionContext } from "../context/AttractionContext"
import { toast } from "react-toastify"
import { AuthContext } from "../context/AuthContext"

const Login = () => {
  const [isSignup, setIsSignup] = useState(false)
  const registerAPI = `${import.meta.env.VITE_API_BASE_URL}/api/auth/register`
  const loginAPI = `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`
  const {navigate} = useContext(AttractionContext);
  const {login} = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (isSignup) {
        // Register
        const res = await axios.post(registerAPI, formData);
        // localStorage.setItem("token", res.data.token)
        login(res.data.token, res.data.user)
        toast.success("User Sign-In successfully!")
        // window.location.reload();
      } else {
        // Login
        const res = await axios.post(loginAPI, {
          email: formData.email,
          password: formData.password
        });
        // localStorage.setItem("token", res.data.token)
        login(res.data.token, res.data.user)
        toast.success("User Login Successfully!")
      }
      
      navigate('/') //this will navigate to home page
      // window.location.reload();
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong")
    }

    // if (isSignup) {
    //   console.log("Signup data:", formData)
    // } else {
    //   console.log("Login data:", {
    //     email: formData.email,
    //     password: formData.password
    //   })
    // }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl p-8">
        
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {isSignup ? "Create an Account" : "Login"}
        </h2>

        <p className="text-center text-gray-500 mt-1">
          {isSignup
            ? ""
            : "Welcome back! Please login"}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          {isSignup && (
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          {isSignup ? "Already have an account?" : "Don’t have an account?"}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-600 ml-1 outline-none cursor-pointer font-medium hover:underline"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login
