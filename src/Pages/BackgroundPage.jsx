
import { Link, Outlet } from 'react-router-dom'



const BackgroundPage = () => {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col items-center justify-center ">
      
      <Outlet/>
      
    </main>
  )
}

export default BackgroundPage