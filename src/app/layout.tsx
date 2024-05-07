"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/sidebar"
import Topbar from "@/components/topbar/topbar"
//import Content from "./[content]"
const inter = Inter({ subsets: ["latin"] });
import { useState, useEffect } from 'react';
import Content from "./app/channels/[id]/page";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [height, setHeight] = useState(0);
  return (
    <html>
      <body>
          <div className="page">
              <Topbar setHeight={setHeight} />
              <main className="main_content">
                <Sidebar Height={height}/>
                <Content Height={height}/>
              </main>
          </div>
        </body>
    </html>
  );
}

function getTextChannelMessage(){
  
}

function getChannelUser(){

}
