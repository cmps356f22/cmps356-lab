import { Image, Navbar } from "@nextui-org/react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Navbar>
        <Navbar.Brand>
          <Link href="/">
            <Image
              width={40}
              src="https://upload.wikimedia.org/wikipedia/en/e/e3/2022_FIFA_World_Cup.svg"
              alt="World Cup Logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Content>
          {/* <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link> */}
        </Navbar.Content>
      </Navbar>
    </header>
  );
}
