import React, { useState } from 'react'
import { DashboardHeader } from '../components/DashboardHeader'
import { Button } from '@/components/ui/button'
import { Plus, User2 } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card";

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

const BowlingCenter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Amateur player data array
  const BowlingCenter = [
    {
      id: 1,
      playerName: "John Smith",
      email: "john.smith@example.com",
      promotion:20,
      follower: 20
    },
    {
      id: 2,
      playerName: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      promotion:20,
      follower: 30
    },
    {
      id: 3,
      playerName: "Mike Davis",
      email: "mike.davis@example.com",
      promotion:20,
      follower: 23
    },
    {
      id: 4,
      playerName: "Emily Wilson",
      email: "emily.wilson@example.com",
      promotion:20,
      follower: 12
    },
    {
      id: 5,
      playerName: "David Brown",
      email: "david.brown@example.com",
      promotion:20,
      follower: 22
    },
    {
      id: 6,
      playerName: "Lisa Anderson",
      email: "lisa.anderson@example.com",
      promotion:20,
      follower: 33
    },
    {
      id: 7,
      playerName: "James Miller",
      email: "james.miller@example.com",
      promotion:20,
      follower: 44
    },
    {
      id: 8,
      playerName: "Anna Taylor",
      email: "anna.taylor@example.com",
      promotion:20,
      follower: 40
    },
    {
      id: 9,
      playerName: "Robert Garcia",
      email: "robert.garcia@example.com",
      promotion:20,
      follower: 88
    },
    {
      id: 10,
      playerName: "Jennifer Martinez",
      email: "jennifer.martinez@example.com",
      promotion:20,
      follower: 88
    },
     {
      id: 11,
      playerName: "John Smith",
      email: "john.smith@example.com",
      promotion:20,
      follower: 66
    },
    {
      id: 12,
      playerName: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      promotion:20,
      follower: 77
    },
    {
      id: 13,
      playerName: "Mike Davis",
      email: "mike.davis@example.com",
      promotion:20,
      follower: 66
    },
    {
      id: 14,
      playerName: "Emily Wilson",
      email: "emily.wilson@example.com",
      promotion:20,
      follower: 55
    },
    {
      id: 15,
      playerName: "David Brown",
      email: "david.brown@example.com",
      promotion:20,
      follower: 77
    },
    {
      id: 16,
      playerName: "Lisa Anderson",
      email: "lisa.anderson@example.com",
      promotion:20,
      follower: 44
    },
    {
      id: 17,
      playerName: "James Miller",
      email: "james.miller@example.com",
      promotion:20,
      follower: 77
    },
    {
      id: 18,
      playerName: "Anna Taylor",
      email: "anna.taylor@example.com",
      promotion:20,
      follower: 55
    },
    {
      id: 19,
      playerName: "Robert Garcia",
      email: "robert.garcia@example.com",
      promotion:20,
      follower: 444
    },
    {
      id: 20,
      playerName: "Jennifer Martinez",
      email: "jennifer.martinez@example.com",
      promotion:20,
      follower: 333
    }
  ];

  const itemsPerPage = 10;
  const filteredData = BowlingCenter; // You can add filtering logic here if needed
  
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
    <div className='w-full m-2 md:m-4'>
      <DashboardHeader />
    
      <div className="flex flex-col my-2 md:my-4 w-full space-y-2 md:space-y-6">
        {/* Header with Title and Add Button */}
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl md:text-3xl font-bold text-secondary font-oswald">
            Bowling Center
          </h1>
        </div>
        
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
                        Promotion
                      </TableHead>
                      <TableHead className="font-normal text-center text-sm md:text-lg text-secondary py-4 min-w-[150px]">
                        Follower
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
                            {player.promotion}
                          </div>
                        </TableCell>
                        <TableCell className="px-6 py-4 text-center text-sm md:text-lg min-w-[150px]">
                          <span>
                            {player.follower}
                          </span>
                        </TableCell>
                        <TableCell className="px-6 py-4 text-center min-w-[100px]">
                          <div className="flex items-center justify-center gap-2">
                            <User2 />
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

export default BowlingCenter