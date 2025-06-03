import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import {  Trophy, Calendar, Search, TrendingUp, Target } from "lucide-react"
 import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, Tooltip, Legend, CartesianGrid } from "recharts"

const performanceData = [
  { month: "Jan", score: 175, average: 210 },
  { month: "Feb", score: 180, average: 215 },
  { month: "Mar", score: 244, average: 190 },
  { month: "Apr", score: 190, average: 185 },
  { month: "May", score: 220, average: 200 },
  { month: "Jun", score: 200, average: 240 },
]

const gameScores = [
  { game: "Jan", score: 210 },
  { game: "Feb", score: 198 },
  { game: "Mar", score: 215 },
  { game: "Apr", score: 187 },
  { game: "May", score: 195 },
]

const AchievementsData =[
  {
    title: "Total Achievements",
    icon: <Trophy className="w-5 md:w-6 md:h-6  h-5 text-lime-400" />,
    value: "24/100",
    description: "24% of all achievements unlocked",
  },
  
  {
    title: "Achievement Points",
    icon: <TrendingUp className="w-5 md:w-6 md:h-6  h-5 text-custom-red" />,
    value: "1,205",
    description: "+12 from last month",
  },
  {
    title: "Ranking",
    icon: <Target className="w-5 md:w-6 md:h-6  h-5 text-custom-red" />,
    value: "Top 15%",
    description: "Among all bowlers in your area",
  },
  {
    title: "Recent Unlocks",
    icon: <Calendar className="w-5 md:w-6 md:h-6  h-5 text-custom-red" />,
    value: "3",
    description: "Upcoming tournaments this month",
  },
]

const recentActivities = [
  {
    type: "achievement",
    title: "Earned Achievement: 200+ Game",
    time: "3 days ago",
    icon: <Trophy className="w-5 md:w-7 md:h-7  h-5 text-lime-400" />,
  },
  {
    type: "achievement",
    title: "Earned Achievement: 200+ Game",
    time: "3 days ago",
    icon: <Trophy className="w-5 md:w-7 md:h-7  h-5 text-lime-400" />,
  },
  {
    type: "game",
    title: "Logged Game: 187",
    time: "3 days ago",
    icon: <Trophy className="w-5 md:w-7 md:h-7  h-5 text-lime-400" />,
  },
  {
    type: "video",
    title: "Watched: Mastering the hook shot",
    time: "4 days ago",
    icon: <Trophy className="w-5 md:w-7 md:h-7  h-5 text-lime-400" />,
  },
  {
    type: "tournament",
    title: "Registered for City Tournament",
    time: "1 week ago",
    icon: <Trophy className="w-5 md:w-7 md:h-7  h-5 text-lime-400" />,
  },
]

const OverviewActivities =[
  {
    title: "Average",
    score: 187,
  },
  {
    title: "High Game",
    score: 210,
  },
  {
    title: "Strike %",
    score: "42%",
  },
  {
    title: "Spare %",
    score: "68%",
  },
]
const Analytics = () => {
  return (
    <div className="flex-1 h-screen overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-[#e8e9e6] p-6">
          <div className="flex flex-col md:flex-row  justify-center md:justify-between  items-center md:items-start ">
            <div className='text-center md:text-left mb-4 md:mb-0'>
              <h1 className="text-xl md:text-2xl font-bold text-primary-heading mb-2">Analytics</h1>
              <p className="text-secondary text-sm md:text-base">
                Track your bowling performance, content engagement, and platform activity.
              </p>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary w-4 h-4" />
              <Input placeholder="Overview" className="pl-9 w-64 rounded-4xl bg-transparent border-gray-200" />
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            { AchievementsData.map((achievement, index) => (
              <Card key={index} className="border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-lg transition-shadow duration-200">
                <CardContent className="px-6 py-0">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-base md:text-lg font-semibold text-primary">{achievement.title}</p>
                    <div className=" bg-transparent rounded-lg">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xl md:text-2xl mb-2 font-semibold md:font-bold text-primary-heading">{achievement.value}</p>
                    <p className="text-xs md:text-base text-secondary">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
           
            
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3  gap-6">
            {/* Performance Overview */}
            <Card className="lg:col-span-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-primary-heading text-xl md:text-2xl">Performance Overview</CardTitle>
                <p className="text-xs md:text-sm text-secondary">Your bowling performance over the last 6 months</p>
              </CardHeader>
              <CardContent>
                <div className="h-60 md:h-80 lg:h-96 xl:h-[470px] ">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="month"
                        axisLine={true}
                        tickLine={true}
                        tick={{ fill: "#9a9ca2", fontSize: 12 }}
                      />
                      <YAxis
                        axisLine={true}
                        tickLine={true}
                        tick={{ fill: "#9a9ca2", fontSize: 12 }}
                        domain={[150, 250]}
                      />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="score"
                        stroke="#141b34"
                        strokeWidth={2}
                        dot={{ fill: "#141b34", strokeWidth: 2, r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="average"
                        stroke="#ee2e55"
                        strokeWidth={2}
                        dot={{ fill: "#ee2e55", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-gray-200 h-full">
              <CardHeader>
                <CardTitle className="text-primary-heading text-xl md:text-2xl font-semibold md:font-bold ">Recent Activity</CardTitle>
                <p className="text-xs md:text-sm text-secondary">Your latest actions across the platform</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 overflow-y-auto h-70 md:h-96 lg:h-96 xl:h-[470px] ">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start p-2 md:p-4 border rounded-lg border-gray-200 justify-baseline space-x-3 cursor-pointer hover:shadow-md transition-shadow duration-200">
                      <div className="w-9 md:w-12 md:h-12 h-9  bg-lime-50 rounded-full flex items-center justify-center flex-shrink-0">
                        {activity.icon}
                      </div>
                      <div className="flex-1 justify-center min-w-0">
                        <p className="text-sm md:text-base font-medium text-primary truncate">{activity.title}</p>
                        <div className="flex items-center space-x-1 ">
                          <div className="w-3 h-3 bg-lime-500 rounded-full"></div>
                          <p className="text-xs md:text-base text-secondary">{activity.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Game Scores Chart */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-secondary text-sm md:text-base">Your game scores over your last 10 games</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full md:w-2/3 lg:w-1/2 xl:w-5/12">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={gameScores}>
                    <XAxis dataKey="game" axisLine={false} tickLine={false} tick={{ fill: "#9a9ca2", fontSize: 12 }} />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9a9ca2", fontSize: 12 }}
                      domain={[150, 250]}
                    />
                    <Bar dataKey="score"  fill="#1e2d5e" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {
              OverviewActivities.map((activity, index) => (
                <Card key={index} className="border-gray-200 cursor-pointer hover:shadow-lg transition-shadow duration-200">
                  <CardContent className=" text-center">
                    <p className="text-sm md:text-base text-secondary mb-2">{activity.title}</p>
                    <p className="text-xl md:text-3xl  font-semibold md:font-bold text-primary">{activity.score}</p>
                  </CardContent>
                </Card>
              ))
            }
            
          </div>
        </div>
      </div>
  )
}

export default Analytics