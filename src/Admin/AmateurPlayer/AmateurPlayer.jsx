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

const AmateurPlayer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Amateur player data array
  const amateurplayer = [
    {
      id: 1,
      playerName: "John Smith",
      email: "john.smith@example.com",
      fan: "Barcelona"
    },
    {
      id: 2,
      playerName: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      fan: "Real Madrid"
    },
    {
      id: 3,
      playerName: "Mike Davis",
      email: "mike.davis@example.com",
      fan: "Manchester United"
    },
    {
      id: 4,
      playerName: "Emily Wilson",
      email: "emily.wilson@example.com",
      fan: "Chelsea"
    },
    {
      id: 5,
      playerName: "David Brown",
      email: "david.brown@example.com",
      fan: "Liverpool"
    },
    {
      id: 6,
      playerName: "Lisa Anderson",
      email: "lisa.anderson@example.com",
      fan: "Arsenal"
    },
    {
      id: 7,
      playerName: "James Miller",
      email: "james.miller@example.com",
      fan: "Tottenham"
    },
    {
      id: 8,
      playerName: "Anna Taylor",
      email: "anna.taylor@example.com",
      fan: "Manchester City"
    },
    {
      id: 9,
      playerName: "Robert Garcia",
      email: "robert.garcia@example.com",
      fan: "PSG"
    },
    {
      id: 10,
      playerName: "Jennifer Martinez",
      email: "jennifer.martinez@example.com",
      fan: "Bayern Munich"
    }
  ];

  const itemsPerPage = 5;
  const filteredData = amateurplayer; // You can add filtering logic here if needed
  
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 10;

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
            Amateur Player
          </h1>
        </div>
        
        <div>
          <Card className="w-full rounded-xl overflow-hidden border-border p-0">
            <CardContent className="p-0">
              <Table className="border-collapse">
                <TableHeader className="border-b-2 border-primary text-xl py-4 md:text-2xl bg-card hover:bg-yellow-300 dark:bg-yellow-300">
                  <TableRow>
                    <TableHead className="font-normal text-secondary pl-8 py-4">
                      #SL
                    </TableHead>
                    <TableHead className="font-normal text-secondary pl-6 py-4">
                      User
                    </TableHead>
                    <TableHead className="font-normal text-center text-secondary py-4">
                      Email
                    </TableHead>
                    <TableHead className="font-normal text-center text-secondary py-4">
                      Player (Fan)
                    </TableHead>
                    <TableHead className="font-normal text-center text-secondary py-4">
                      Profile
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="bg-white">
                  {currentData.map((player) => (
                    <TableRow key={player.id}>
                      <TableCell className="px-6 py-4">
                        <span className="font-normal text-blackblack-700 text-xl">
                          {player.id}
                        </span>
                      </TableCell>
                      <TableCell className="px-6 py-4">
                        <span className="font-normal text-blackblack-700 text-xl">
                          {player.playerName}
                        </span>
                      </TableCell>
                      <TableCell className="px-6 py-4 text-center">
                        <div className="font-normal text-blackblack-700 text-xl">
                          {player.email}
                        </div>
                      </TableCell>
                      <TableCell className="px-6 py-4 text-center">
                        <span>
                          {player.fan}
                        </span>
                      </TableCell>
                      <TableCell className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <User2/>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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

export default AmateurPlayer