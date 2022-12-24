import { Input, Navbar, Text } from "@nextui-org/react";
import Link from "next/link";

export const SearchIcon = ({
  size,
  fill,
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
};

export default function Header() {
  return (
    <header>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Link href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/e3/2022_FIFA_World_Cup.svg"
              width="40"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="/groups">Groups</Navbar.Link>
          <Navbar.Link href="/teams">Teams</Navbar.Link>
          <Navbar.Link href="/matches">Matches</Navbar.Link>
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </header>
  );
}
