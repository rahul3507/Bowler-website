

import { useState } from "react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function SignUpForm() {
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
    // Handle form submission logic here
  }

  return (
    <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
      <h1 className="mb-6 text-center text-2xl font-bold text-[#000000]">Sign Up</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="mb-1 block text-[#000000]">
            First Name
          </label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="rounded-full border-[#e8e8e8] px-4 py-2"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="mb-1 block text-[#000000]">
            Last Name
          </label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="rounded-full border-[#e8e8e8] px-4 py-2"
          />
        </div>

        <div>
          <label htmlFor="handle" className="mb-1 block text-[#000000]">
            Handle
          </label>
          <Input
            id="handle"
            name="handle"
            placeholder="username"
            value={formData.handle}
            onChange={handleChange}
            className="rounded-full border-[#e8e8e8] px-4 py-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-[#000000]">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-full border-[#e8e8e8] px-4 py-2"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-1 block text-[#000000]">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="rounded-full border-[#e8e8e8] px-4 py-2"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full rounded-full bg-[#8bc342] py-3 text-white hover:bg-[#8bc342]/90 transition-colors"
        >
          Sign Up
        </button>
      </form>

      <div className="mt-6 text-center text-[#555555]">
        Already have an account?{" "}
        <Link href="/signin" className="text-[#1e2d5e] hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  )
}
