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
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
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
                        {amateurplayer.map((player) => (
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
                                <span
                                
                                >
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
                            onClick={() => handlePageChange(pageNum as number)}
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