
import { Link, Outlet } from 'react-router-dom'



const HomePage = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      
      <Outlet/>
      
    </main>
  )
}

export default HomePage