import React from 'react'
import { FaFilePdf } from "react-icons/fa6";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";



const DocumentTable = ({documents}) => {
  return (
    <div>
        <div className="ml-10 p-5 mt-16">
        <Table>
          <TableCaption>Your documents</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Status</TableHead>
              <TableHead>Document</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((document) => (
              <TableRow key={document.id}>
                <TableCell className="font-medium text-red-500">{document.status === 'not_vectorised' ? 'Not Vectorised' : 'Vectorised'}</TableCell>
                <div className='flex items-center text-base'>
                    <FaFilePdf size={30}/>
                    <TableCell>{document.file_name}</TableCell>
                </div>
                <TableCell>
                    {document.status === 'not_vectorised' ? (
                      <button className='bg-black text-white p-1.5 rounded-md'>Vectorise</button>
                    ): (<button className='bg-black text-white p-1.5 rounded-md' >Delete</button>)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default DocumentTable