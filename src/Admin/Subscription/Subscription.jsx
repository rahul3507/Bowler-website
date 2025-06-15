import React from 'react'
import { DashboardHeader } from '../components/DashboardHeader'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  
  Check,
  Plus,
} from "lucide-react"

const Subscription = () => {
   const subscriptionFeatures = [
    "View Members Directory",
    "View Members Profile",
    "Send Private Messages",
    "Add Media To Your Profile",
    "Add Media To Your Profile",
  ]
  return (
    <div className='w-full m-2 md:m-4'>
          <DashboardHeader />


          {/* Content */}
        <main className="flex-1 p-6 bg-transparent">
          <div className="flex justify-end mb-6">
            <Button className="bg-button-bg hover:bg-button-bg/90 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add New Subscription
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
            {/* Basic Plan */}
            <Card className="border-gray-200">
              <CardHeader className="text-center pb-0 md:pb-4">
                <CardTitle className="text-xl md:text-3xl font-bold text-secondary">Basic</CardTitle>
                <div className="text-lg md:text-2xl font-bold text-secondary">
                  $99<span className="text-xs md:text-sm font-normal text-secondary">/monthly</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 md:space-y-4">
                {subscriptionFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-button-bg rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm md:text-lg text-secondary">{feature}</span>
                  </div>
                ))}
                <Button className="w-full bg-button-bg hover:bg-button-bg/90 text-white mt-6">Edit</Button>
              </CardContent>
            </Card>

            {/* Premium Plan 1 */}
            <Card className="border-gray-200">
              <CardHeader className="text-center pb-0 md:pb-4">
                <CardTitle className="text-xl md:text-3xl font-bold text-secondary">Premium</CardTitle>
                <div className="text-lg md:text-2xl font-bold text-secondary">
                  $125<span className="text-xs md:text-sm font-normal text-secondary">/yearly</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {subscriptionFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-button-bg rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm md:text-lg text-secondary">{feature}</span>
                  </div>
                ))}
                <Button className="w-full bg-button-bg hover:bg-button-bg/90 text-white mt-6">Edit</Button>
              </CardContent>
            </Card>

            {/* Premium Plan 2 */}
            <Card className="border-gray-200">
              <CardHeader className="text-center pb-0 md:pb-4">
                <CardTitle className="text-xl md:text-3xl font-bold text-secondary">Premium</CardTitle>
                <div className="text-lg md:text-2xl font-bold text-secondary">
                  $125<span className="text-xs md:text-sm font-normal text-secondary">/yearly</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {subscriptionFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-button-bg rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm md:text-lg text-secondary">{feature}</span>
                  </div>
                ))}
                <Button className="w-full bg-button-bg hover:bg-button-bg/90 text-white mt-6">Edit</Button>
              </CardContent>
            </Card>
          </div>
        </main>
        
    </div>
  )
}

export default Subscription