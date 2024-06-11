"use client";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ChatbotUI = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { sender: "user", text: message }]);
      setMessage("");
      // Here, you can call your retrieval augmented generation backend
      // to get a response from the assistant and add it to the messages state

      const api_call = axios.post("http://127.0.0.1:5000/chat", {
        user_prompt: message,
      }).then((res) => {
        toast.success('Success!')
        //  
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "assistant",
            text: res.data.data
          },
        ]);
        console.log(res.data?.sources)
        console.log('done')
      }).catch((err) => {
        toast.error("An error occurred. Please check your internet and try again!");
      })
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen w-3/4 ml-44 ">
      <div
        className="flex-grow overflow-y-auto px-4 py-3 space-y-4 bg-white shadow-md rounded-lg mx-4 my-4 mb-16"
        ref={chatContainerRef}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              } px-4 py-2 rounded-lg max-w-[70%]`}
            >
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-48 right-40 bg-white shadow-md p-4 flex items-center">
        <input
          type="text"
          className="flex-grow bg-gray-100 border-none rounded-lg px-4 py-2 focus:outline-none"
          placeholder="Type your message..."
          value={message}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ml-2"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotUI;