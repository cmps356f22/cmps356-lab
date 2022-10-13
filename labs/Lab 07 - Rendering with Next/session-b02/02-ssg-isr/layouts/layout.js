import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav
          style={{
            display: "flex",
            gap: "5px",
          }}
        >
          <Link href="/csr">
            <a>CSR</a>
          </Link>
          <Link href="/ssr">
            <a>SSR</a>
          </Link>
          <Link href="/ssg">
            <a>SSG</a>
          </Link>
          <Link href="/isr">
            <a>ISR</a>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
