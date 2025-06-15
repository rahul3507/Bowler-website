import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    handle: "",
    password: "",
    isAdmin: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    
    if (formData.isAdmin) {
      navigate("/admin-dashboard");
    } else {
      navigate("/dashboard");
    }
    // Handle form submission logic here with selectedRole
  }


  return (
    <div className="w-full max-w-md rounded-lg bg-transparent p-8 shadow-xl border">
      <h1 className="mb-6 text-center text-2xl font-bold text-primary-heading">Log In</h1>

      <form onSubmit={handleSubmit} className="space-y-4 text-base md:text-lg">
        <div>
          <label htmlFor="handle" className="mb-1 block text-primary-heading">
            Handle
          </label>
          <Input
            id="handle"
            name="handle"
            placeholder="username"
            value={formData.handle}
            onChange={handleChange}
            className="rounded-full  text-tertiary px-4 py-5"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-1 block text-primary-heading">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="rounded-full  text-tertiary px-4 py-5"
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            id="isAdmin"
            name="isAdmin"
            type="checkbox"
            checked={formData.isAdmin}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <label htmlFor="isAdmin" className="text-primary-heading">
            Admin?
          </label>
        </div>
       

        <Button
        
          type="submit"
          className="mt-4 w-full  bg-button-bg py-5 text-button-text hover:bg-button-bg/80 transition-colors"
        >
          Log in
        </Button>
      </form>

      <div className="mt-6 text-center md:text-left text-tertiary text-base">
        Don't have any account?{" "}
        <Link to="/signup" className="text-primary hover:underline">
          Sign Up
        </Link>
      </div>
    </div>
  )
}