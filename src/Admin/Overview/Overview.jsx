import React from 'react'
import { DashboardHeader } from '../components/DashboardHeader'
import { Button } from '@/components/ui/button'
import { Plus, User2 } from 'lucide-react'

const Overview = () => {
  return (
    <div className='w-full m-2  md:m-4 '>
      <DashboardHeader />

      <div className="flex flex-col my-2 md:my-4 w-full space-y-6">
        {/* Header with Title and Add Button */}
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl md:text-3xl font-bold text-secondary font-oswald">
            OverView
          </h1>
          <Button
              className="bg-button-bg hover:bg-button-bg/90 text-white mr-0 md:mr-4"
            >
          Create account
        </Button>
        </div>
        

        
      </div>
    </div>
  )
}

export default Overview