"use client";

import Header from "./header";
import Footer from "./footer";

import { NextUIProvider, Container } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <QueryClientProvider client={queryClient}>
          <NextUIProvider>
            <Header />
            <Container>
              <main>{children}</main>
            </Container>
            <Footer />
          </NextUIProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
