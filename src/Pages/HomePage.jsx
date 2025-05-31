import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../components/ui/Slider'
import "../../src/styles.scss";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full mx-auto text-center">
        <h1 className="text-[#1e2d5e] text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          The Digital Home for Every Bowler
        </h1>

        <p className="text-[#5d5d5d] text-lg max-w-3xl mx-auto mb-12">
          Here's a clear separation of Premium vs Free Features for the BowlersNetwork platform, categorized by major
          functionality. This layout ensures your Super Admin can manage feature visibility and monetization easily via
          the admin pane
        </p>

        <div className="relative w-full overflow-hidden mb-12">
          <Slider/>
        </div>

        <Link
          to="/get-started"
          className="inline-block bg-[#8bc342] text-white font-medium py-4 px-8 rounded-md text-lg w-full max-w-md mb-6 hover:bg-opacity-90 transition-all"
        >
          Get Started
        </Link>

        <p className="text-[#5d5d5d]">
          Already have an account?
          <Link to="/signin" className="text-[#1e2d5e] font-medium ml-1 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  )
}

export default HomePage