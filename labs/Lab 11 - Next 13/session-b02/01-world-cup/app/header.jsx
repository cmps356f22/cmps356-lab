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
              alt="World Cup 2022 Logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Content>
          <Link href="/groups">Groups</Link>
          <Link href="/matches">Matches</Link>
          <Link href="/teams">Teams</Link>
        </Navbar.Content>
      </Navbar>
    </header>
  );
}
