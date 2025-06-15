import React, { useState } from 'react'
import { DashboardHeader } from '../components/DashboardHeader'
import { Button } from '@/components/ui/button'
import { Plus, ShieldAlert, User2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';


const Overview = () => {
  const [currentPage, setCurrentPage] = useState(1);
    
    // Amateur player data array
    const Transaction = [
      {
        id: 1,
        playerName: "John Smith",
        email: "john.smith@example.com",
        address: "london"
      },
      {
        id: 2,
        playerName: "Sarah Johnson",
        email: "sarah.johnson@example.com",
        address: "london"
      },
      {
        id: 3,
        playerName: "Mike Davis",
        email: "mike.davis@example.com",
        address: "london"
      },
      {
        id: 4,
        playerName: "Emily Wilson",
        email: "emily.wilson@example.com",
        address: "london"
      },
      {
        id: 5,
        playerName: "David Brown",
        email: "david.brown@example.com",
        address: "london"
      },
      {
        id: 6,
        playerName: "Lisa Anderson",
        email: "lisa.anderson@example.com",
        address: "london"
      },
      {
        id: 7,
        playerName: "James Miller",
        email: "james.miller@example.com",
        address: "london"
      },
      {
        id: 8,
        playerName: "Anna Taylor",
        email: "anna.taylor@example.com",
        address: "london"
      },
      {
        id: 9,
        playerName: "Robert Garcia",
        email: "robert.garcia@example.com",
        address: "london"
      },
      {
        id: 10,
        playerName: "Jennifer Martinez",
        email: "jennifer.martinez@example.com",
        address: "london"
      },
       {
        id: 11,
        playerName: "John Smith",
        email: "john.smith@example.com",
        address: "london"
      },
      {
        id: 12,
        playerName: "Sarah Johnson",
        email: "sarah.johnson@example.com",
        address: "london"
      },
      {
        id: 13,
        playerName: "Mike Davis",
        email: "mike.davis@example.com",
        address: "london"
      },
      {
        id: 14,
        playerName: "Emily Wilson",
        email: "emily.wilson@example.com",
        address: "london"
      },
      {
        id: 15,
        playerName: "David Brown",
        email: "david.brown@example.com",
        address: "london"
      },
      {
        id: 16,
        playerName: "Lisa Anderson",
        email: "lisa.anderson@example.com",
        address: "london"
      },
      {
        id: 17,
        playerName: "James Miller",
        email: "james.miller@example.com",
        address: "london"
      },
      {
        id: 18,
        playerName: "Anna Taylor",
        email: "anna.taylor@example.com",
        address: "london"
      },
      {
        id: 19,
        playerName: "Robert Garcia",
        email: "robert.garcia@example.com",
        address: "london"
      },
      {
        id: 20,
        playerName: "Jennifer Martinez",
        email: "jennifer.martinez@example.com",
        address: "london"
      }
    ];

    const earning = [
  { month: "Jan", earn: 2100 },
  { month: "Feb", earn: 1980 },
  { month: "Mar", earn: 2150 },
  { month: "Apr", earn: 1870 },
  { month: "May", earn: 1950 },
  { month: "Jun", earn: 9100 },
  { month: "Jul", earn: 1980 },
  { month: "Aug", earn: 2150 },
  { month: "Sep", earn: 6870 },
  { month: "Oct", earn: 1950 },
  { month: "Nov", earn: 1870 },
  { month: "Dec", earn: 7950 },
]
const TotalStatus =[
  {
    title: "Total User",
    
    value: "1230",
    
  },
  
  {
    title: "Total Earnings",
    
    value: "$1230",
    
  },
  {
    title: "Total Subscription",
    
    value: "1230",
    
  },
  
]
  
    const itemsPerPage = 5;
    const filteredData = Transaction; // You can add filtering logic here if needed
    
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);
    
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    const generatePageNumbers = () => {
      const pageNumbers = [];
      const maxVisiblePages = 5;
  
      if (totalPages <= maxVisiblePages) {
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        if (currentPage <= 3) {
          for (let i = 1; i <= 4; i++) {
            pageNumbers.push(i);
          }
          pageNumbers.push("...");
          pageNumbers.push(totalPages);
        } else if (currentPage >= totalPages - 2) {
          pageNumbers.push(1);
          pageNumbers.push("...");
          for (let i = totalPages - 3; i <= totalPages; i++) {
            pageNumbers.push(i);
          }
        } else {
          pageNumbers.push(1);
          pageNumbers.push("...");
          for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pageNumbers.push(i);
          }
          pageNumbers.push("...");
          pageNumbers.push(totalPages);
        }
      }
  
      return pageNumbers;
    };
  
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

        <div className="grid grid-cols-1 md:grid-cols-3  gap-2 md:gap-6">
                    { TotalStatus.map((achievement, index) => (
                      <Card key={index} className="border-gray-200  dark:border-gray-500 bg-transparent  cursor-pointer hover:shadow-lg transition-shadow duration-200">
                        <CardContent className="px-6 py-0 m-auto">
                          <div className="flex items-center justify-between mb-4">
                            <p className="text-lg md:text-xl font-semibold text-secondary dark:text-gray-200">{achievement.title}</p>
                            
                          </div>
                          <div className="space-y-1">
                            <p className="text-xl md:text-3xl mb-2 font-semibold md:font-bold text-primary-heading dark:text-white">{achievement.value}</p>
                            
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                   
                    
          </div>

        <Card className="border-gray-200 dark:border-gray-500 bg-transparent cursor-pointer hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle >
                <div className='w-full flex justify-between'>
                  <div className='text-xl md:text-3xl text-secondary font-semibold'>Eargings</div>
                  <div>
                    <Select>
                      <SelectTrigger className="w-40 border-none cursor-pointer">
                        <SelectValue placeholder="Select month" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          
                          <SelectItem value="jan" className="cursor-pointer">2024 Jan</SelectItem>
                          <SelectItem value="feb " className="cursor-pointer">2024 Feb</SelectItem>
                          <SelectItem value="mar" className="cursor-pointer">2024 Mar</SelectItem>
                          <SelectItem value="apr " className="cursor-pointer">2024 Apr</SelectItem>
                          <SelectItem value="may" className="cursor-pointer">2024 May</SelectItem>
                          <SelectItem value="jun" className="cursor-pointer">2024 Jun</SelectItem>
                          <SelectItem value="jul" className="cursor-pointer">2024 Jul</SelectItem>
                          <SelectItem value="aug" className="cursor-pointer">2024 Aug</SelectItem>
                          <SelectItem value="sep" className="cursor-pointer">2024 Sep</SelectItem>
                          <SelectItem value="oct" className="cursor-pointer">2024 Oct</SelectItem>
                          <SelectItem value="nov" className="cursor-pointer">2024 Nov</SelectItem>
                          <SelectItem value="dec" className="cursor-pointer">2024 Dec</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full ">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={earning}>
                    <XAxis 
                      dataKey="month" 
                      axisLine={true} 
                      tickLine={false} 
                      tick={{ fontSize: 12 }}
                      className="fill-gray-600 dark:fill-gray-500"
                    />
                    <YAxis
                      axisLine={true}
                      tickLine={true}
                      tick={{ fontSize: 12 }}
                      domain={[0, 10000]}
                      className="fill-gray-600 dark:fill-gray-500"
                    />
                    <Tooltip />
                    <Legend className='bg-transparent'/>
                    <Bar 
                      dataKey="earn" 
                      radius={[4, 4, 0, 0]} 
                      barSize={30}
                      className="fill-button-bg dark:fill-gray-300"
                    />
                    
                                          
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

         <div className='overflow-x-auto'>
          <Card className="w-full rounded-xl  border-border p-0">
            <CardContent className="p-0">
              <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                <Table className="min-w-full overflow-x-auto border-collapse">
                  <TableHeader className="border-b-2 border-primary text-xl py-4 md:text-2xl bg-button-bg hover:bg-button-bg/90">
                    <TableRow>
                      <TableHead className="font-normal text-sm md:text-lg text-secondary pl-8 py-4 min-w-[80px]">
                        #SL
                      </TableHead>
                      <TableHead className="font-normal text-sm md:text-lg text-secondary pl-6 py-4 min-w-[150px]">
                        Center name
                      </TableHead>
                      <TableHead className="font-normal text-center text-secondary text-sm md:text-lg py-4 min-w-[200px]">
                        Email
                      </TableHead>
                      <TableHead className="font-normal text-center text-sm md:text-lg text-secondary py-4 min-w-[150px]">
                        Address
                      </TableHead>
                      
                      <TableHead className="font-normal text-center text-sm md:text-lg text-secondary py-4 min-w-[100px]">
                        Profile
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white">
                    {currentData.map((player) => (
                      <TableRow key={player.id}>
                        <TableCell className="px-6 py-4 min-w-[80px]">
                          <span className="font-normal text-sm md:text-lg text-secondary">
                            {player.id}
                          </span>
                        </TableCell>
                        <TableCell className="px-6 py-4 min-w-[150px]">
                          <span className="font-normal text-sm md:text-lg text-secondary">
                            {player.playerName}
                          </span>
                        </TableCell>
                        <TableCell className="px-6 py-4 text-center min-w-[200px]">
                          <div className="font-normal text-secondary text-sm md:text-lg">
                            {player.email}
                          </div>
                        </TableCell>
                        <TableCell className="px-6 py-4 text-center min-w-[200px]">
                          <div className="font-normal text-secondary text-sm md:text-lg">
                            {player.address}
                          </div>
                        </TableCell>
                        
                        <TableCell className="px-6 py-4 text-center min-w-[100px]">
                          <div className="flex items-center justify-center gap-2">
                            <ShieldAlert />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center w-full mt-5">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>

                  {generatePageNumbers().map((pageNum, index) => (
                    <PaginationItem key={index}>
                      {pageNum === "..." ? (
                        <span className="px-3 py-2">...</span>
                      ) : (
                        <PaginationLink
                          onClick={() => handlePageChange(pageNum)}
                          isActive={currentPage === pageNum}
                          className="cursor-pointer"
                        >
                          {pageNum}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        handlePageChange(Math.min(totalPages, currentPage + 1))
                      }
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>

        
      </div>
    </div>
  )
}

export default Overview