import { Bell } from 'lucide-react'
import React, { useState } from 'react'
import { DashboardHeader } from '../components/DashboardHeader'

const Notifications = () => {
    const [notifications, setNotifications] = useState([
        {
            title: "We have got a new match",
            time: "Fri, 12:30pm",
            read: false
        },
        {
            title: "We have got a new match",
            time: "Fri, 12:30pm",
            read: true
        },
        {
            title: "We have got a new match",
            time: "Fri, 12:30pm",
            read: false
        },
        {
            title: "We have got a new match",
            time: "Fri, 12:30pm",
            read: true
        },
        {
            title: "We have got a new match",
            time: "Fri, 12:30pm",
            read: false
        },
        {
            title: "We have got a new match",
            time: "Fri, 12:30pm",
            read: false
        }
    ])

    const handleNotificationClick = (index) => {
        setNotifications(prevNotifications => 
            prevNotifications.map((notification, i) => 
                i === index ? { ...notification, read: true } : notification
            )
        )
    }

    return (
        <div className='w-full m-2 md:m-4'>
            <DashboardHeader />
            {notifications.map((notification, index) => (
                <div 
                    key={index}
                    className={`flex my-1 md:my-3 p-0 md:p-1.5 border rounded-xl cursor-pointer ${
                        notification.read ? 'bg-transparent' : 'bg-button-bg'
                    }`}
                    onClick={() => handleNotificationClick(index)}
                >
                    <div className='w-12 justify-center pt-3 items-center'>
                        <Bell className='m-auto' />
                    </div>
                    <div>
                        <h4 className='font-medium text-sm md:text-base text-black'>
                            {notification.title}
                        </h4>
                        <p className='text-xs md:text-sm text-black'>
                            {notification.time}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Notifications