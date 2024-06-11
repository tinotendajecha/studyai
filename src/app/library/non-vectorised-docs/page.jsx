'use client'
import React from 'react'
import DocumentLayout from '@/app/components/DocumentLayout'
import DocumentTable from '@/app/components/DocumentTable';
import { useState } from "react";
import axios from "axios";
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const page = () => {

  const [documents, setDocuments] = useState([])

  useEffect(() => {
    // Make api call
    console.log('use effect')
    const api_call = axios.get(`http://127.0.0.1:5000/get_docs_by_status?status=vectorised`).then((res) => {
      setDocuments(res.data)
    }).catch((err) => {
      toast.error('Error occured!')
      console.log(err)
    })
  },[])

  return (
    <div className="flex items-center mt-10 gap-12">
      <div className="ml-10">
        <DocumentLayout />
      </div>
      <div>
        <DocumentTable documents={documents} />
      </div>
    </div>
  )
}

export default page