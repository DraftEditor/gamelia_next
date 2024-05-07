'use client';
import "./topbar.css";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from 'react';

interface TopbarProp {
  setHeight: React.Dispatch<React.SetStateAction<number>>;
}

export default function Topbar({ setHeight }: TopbarProp){
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((el) => {
        setHeight(el.contentRect.height);
      });
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  });
  const path = usePathname();
  return(
    <div ref={ref} className="bar">{path}</div>
  );
}