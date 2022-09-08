import Link from "next/link"

function Home() {
  return (
    <div>Home
      <Link href="/blogs">
      blogs
      </Link>
    </div>
  )
}

export default Home