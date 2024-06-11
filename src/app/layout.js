import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chat with Docs",
  description: "RAG chatbot for chatting with documents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavigationBar />
        {children}</body>
    </html>
  );
}
