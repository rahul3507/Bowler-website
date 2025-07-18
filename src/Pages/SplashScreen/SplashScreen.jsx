
import Slider from '../../components/ui/Slider'
import { Link } from 'react-router-dom'
import "../../../src/styles.scss";

const SplashScreen = () => {
  return (
    <div className="w-full mx-auto text-center">
        <div className='max-w-2xl mx-auto mb-8'>
          <h1 className="text-primary text-2xl md:text-5xl lg:text-6xl font-bold mb-6">
          The Digital Home for Every Bowler
        </h1>

        <p className="text-secondary text-balance text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-12">
          Here's a clear separation of Premium vs Free Features for the BowlersNetwork platform, categorized by major
          functionality. This layout ensures your Super Admin can manage feature visibility and monetization easily via
          the admin pane
        </p>
        </div>

        <div className="relative w-full overflow-hidden mb-12">
          <Slider/>
        </div>

        <Link
          to="/selectyourrole"
          className="inline-block bg-button-bg text-button-text font-medium py-3 md:py-4 px-8 mx-1 rounded-md text-sm md:text-base lg:text-lg w-full max-w-md mb-6 hover:bg-opacity-90 transition-all"
        >
          Get Started
        </Link>

        <p className="text-[#5d5d5d] text-sm md:text-base lg:text-lg">
          Already have an account?
          <Link to="/signin" className="text-primary font-medium ml-1 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
  )
}

export default SplashScreen