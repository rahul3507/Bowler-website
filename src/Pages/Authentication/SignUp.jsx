import { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

export default function SignUp() {
  const location = useLocation();
  const selectedRole = location.state?.selectedRole;
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    handle: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    console.log("User Role:", selectedRole)
    // Handle form submission logic here with selectedRole
  }

  // Determine if we should hide Last Name field
  const shouldHideLastName = selectedRole === "bowling-center" || selectedRole === "manufacturer"
  
  // Determine First Name label and placeholder
  const getFirstNameConfig = () => {
    if (selectedRole === "bowling-center") {
      return { label: "Center Name", placeholder: "Center Name" }
    }
    if (selectedRole === "manufacturer") {
      return { label: "Manufacturer Name", placeholder: "Manufacturer Name" }
    }
    return { label: "First Name", placeholder: "First Name" }
  }

  const firstNameConfig = getFirstNameConfig()

  return (
    <div className="w-full max-w-md rounded-lg bg-transparent p-8 shadow-xl border">
      <h1 className="mb-6 text-center text-2xl font-bold text-primary-heading">Sign Up</h1>

      <form onSubmit={handleSubmit} className="space-y-4 text-base md:text-lg">
        <div>
          <label htmlFor="firstName" className="mb-1 block text-primary-heading">
            {firstNameConfig.label}
          </label>
          <Input
            id="firstName"
            name="firstName"
            placeholder={firstNameConfig.placeholder}
            value={formData.firstName}
            onChange={handleChange}
            className="rounded-full  text-tertiary py-5 px-4"
            required
          />
        </div>

        {!shouldHideLastName && (
          <div>
            <label htmlFor="lastName" className="mb-1 block text-primary-heading">
              Last Name
            </label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="rounded-full  text-tertiary px-4 py-5"

            />
          </div>
        )}

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
          <label htmlFor="email" className="mb-1 block text-primary-heading">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
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

        <Button
          type="submit"
          className="mt-4 w-full  bg-button-bg py-5 text-button-text hover:bg-button-bg/80 transition-colors"
        >
          Sign Up
        </Button>
      </form>

      <div className="mt-6 text-center md:text-left text-tertiary text-base">
        Already have an account?{" "}
        <Link to="/signin" className="text-primary hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  )
}