"use client";

import "./globals.css";
import React from "react";
import Header from "./header";
import Footer from "./footer";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { Container } from "@nextui-org/react";

const queryClient = new QueryClient();

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <QueryClientProvider client={queryClient}>
          <NextUIProvider>
            <Header />
            <main>
              <Container fluid responsive>
                {children}
              </Container>
            </main>
            <Footer />
          </NextUIProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
