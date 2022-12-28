/* eslint-disable @next/next/no-head-element */
import './globals.css'
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
      Layout here
      {children}
      </body>
    </html>
  );
}
