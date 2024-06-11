"use client";
import axios from "axios";
import React from "react";
import { useState } from "react";

const page = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", file);

    const api_call = axios
      .post("http://127.0.0.1:5000/upload_pdf", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        action=""
        onSubmit={handleUpload}
        encType="multipart/form-data"
      >
        <div>
          <h1 className="text-3xl mb-2">Upload Document</h1>
        </div>

        <div>
          <input
            type="text"
            id="doc_name"
            name="doc_name"
            placeholder="Document Display Name"
            className="border-2 border-lime-300 p-2 rounded-md mt-2 mb-2 outline-none w-full"
          />
        </div>

        <div>
          <input
            type="text"
            id="doc_desc"
            name="doc_desc"
            placeholder="Description of document"
            className="border-2 border-lime-300 p-2 rounded-md mt-2 mb-2 outline-none w-full"
          />
        </div>

        <div>
          <input
            type="file"
            name="document_name"
            id="document_name"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
            placeholder="Document name"
          />
        </div>

        <div>
          {/* set hover effect on button to be lime-300 */}
          <button
            className="bg-black text-white p-2 rounded-md mt-2 hover:bg-lime-300 hover:text-slate-800"
            type="submit"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
