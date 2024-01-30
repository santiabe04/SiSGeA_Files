import Link from "next/link"

function NavBar() {
  return (
    <nav className="bg-blue-900 p-4 border-blue-950">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link legacyBehavior href="/">
              <a className="text-white text-xl font-bold">SiSGeA Files</a>
            </Link>
          </div>
          <div className="flex space-x-4 hover:border-b">
            <Link legacyBehavior href="/">
              <a className="text-white">Home</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar