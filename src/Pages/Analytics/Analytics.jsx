import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import {  Trophy, Calendar, Search, TrendingUp, Target } from "lucide-react"
// import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from "recharts"

const performanceData = [
  { month: "Jan", score: 175, average: 210 },
  { month: "Feb", score: 180, average: 215 },
  { month: "Mar", score: 185, average: 220 },
  { month: "Apr", score: 190, average: 225 },
  { month: "May", score: 195, average: 230 },
  { month: "Jun", score: 200, average: 240 },
]

const gameScores = [
  { game: "Jan", score: 210 },
  { game: "Feb", score: 198 },
  { game: "Mar", score: 215 },
  { game: "Apr", score: 187 },
  { game: "May", score: 195 },
]

const recentActivities = [
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
const Analytics = () => {
  return (
    <div className="flex-1 overflow-auto">
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
            <Card className="border-gray-200 dark:border-gray-700">
              <CardContent className="px-6 py-0">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-base md:text-lg font-semibold text-primary">Total Achievements</p>
                  <div className=" bg-transparent rounded-lg">
                    <Trophy className="w-5 md:w-6 md:h-6  h-5 text-lime-400" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xl md:text-2xl mb-2 font-semibold md:font-bold text-primary-heading">24/100</p>
                  <p className="text-xs md:text-base text-secondary">24% of all achievements unlocked</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700">
              <CardContent className="px-6 py-0">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-base md:text-lg font-semibold text-primary">Achievement Points</p>
                  <div className=" bg-transparent rounded-lg">
                    <TrendingUp className="w-5 md:w-6 md:h-6  h-5 text-custom-red" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xl md:text-2xl mb-2 font-semibold md:font-bold text-primary-heading">1,205</p>
                  <p className="text-xs md:text-base text-secondary">+12 from last month</p>
                </div>
              </CardContent>
            </Card>


            <Card className="border-gray-200 dark:border-gray-700">
              <CardContent className="px-6 py-0">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-base md:text-lg font-semibold text-primary">Ranking</p>
                  <div className=" bg-transparent rounded-lg">
                    <Target className="w-5 md:w-6 md:h-6  h-5 text-custom-red" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xl md:text-2xl mb-2 font-semibold md:font-bold text-primary-heading">Top 15%</p>
                  <p className="text-xs md:text-base text-secondary">Among all bowlers in your area</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 dark:border-gray-700">
              <CardContent className="px-6 py-0">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-base md:text-lg font-semibold text-primary">Recent Unlocks</p>
                  <div className=" bg-transparent rounded-lg">
                    <Calendar className="w-5 md:w-6 md:h-6  h-5 text-custom-red" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xl md:text-2xl mb-2 font-semibold md:font-bold text-primary-heading">3</p>
                  <p className="text-xs md:text-base text-secondary">Upcoming tournaments this month</p>
                </div>
              </CardContent>
            </Card>
            
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Performance Overview */}
            <Card className="lg:col-span-2 border-gray-200">
              {/* <CardHeader>
                <CardTitle className="text-[#141b34]">Performance Overview</CardTitle>
                <p className="text-sm text-[#707669]">Your bowling performance over the last 6 months</p>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#9a9ca2", fontSize: 12 }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#9a9ca2", fontSize: 12 }}
                        domain={[150, 250]}
                      />
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
              </CardContent> */}
            </Card>

            {/* Recent Activity */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-primary-heading text-xl md:text-2xl font-semibold md:font-bold ">Recent Activity</CardTitle>
                <p className="text-xs md:text-sm text-secondary">Your latest actions across the platform</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start p-4 border rounded-lg border-gray-200 justify-baseline space-x-3">
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
          <Card className="border-[#e8e9e6]">
            {/* <CardHeader>
              <CardTitle className="text-[#141b34]">Your game scores over your last 10 games</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={gameScores}>
                    <XAxis dataKey="game" axisLine={false} tickLine={false} tick={{ fill: "#9a9ca2", fontSize: 12 }} />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9a9ca2", fontSize: 12 }}
                      domain={[150, 250]}
                    />
                    <Bar dataKey="score" fill="#1e2d5e" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent> */}
          </Card>

          {/* Bottom Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-[#e8e9e6]">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-[#707669] mb-2">Average</p>
                <p className="text-3xl font-bold text-[#141b34]">187</p>
              </CardContent>
            </Card>
            <Card className="border-[#e8e9e6]">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-[#707669] mb-2">High Game</p>
                <p className="text-3xl font-bold text-[#141b34]">210</p>
              </CardContent>
            </Card>
            <Card className="border-[#e8e9e6]">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-[#707669] mb-2">Strike %</p>
                <p className="text-3xl font-bold text-[#141b34]">42%</p>
              </CardContent>
            </Card>
            <Card className="border-[#e8e9e6]">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-[#707669] mb-2">Spare %</p>
                <p className="text-3xl font-bold text-[#141b34]">68%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  )
}

export default Analytics