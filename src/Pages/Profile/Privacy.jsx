import React from 'react'

const Privacy = () => {
  return (
    <div className="flex-1 px-0  md:px-6 pb-6">
        <div className="w-full border border-gray-200 rounded-lg p-2 md:p-6 bg-transparent ">
            <h2 className="text-lg md:text-2xl font-semibold text-primary mb-0 md:mb-1 text-center md:text-start">Privacy Settings</h2>
            <p className="text-secondary text-sm md:text-lg mb-4 md:mb-8 text-center md:text-start">Control what information is visible to others.</p>
            

            <div className='flex justify-between'>
                <div>
                    <h2>Profile Visibility</h2>
                    <p>Control who can see your profile</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Privacy
