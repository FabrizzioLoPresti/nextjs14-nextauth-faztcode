import Link from "next/link"
import AuthButton from "./auth-button-client"


type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="mx-auto max-w-7xl flex flex-row items-center justify-between py-6">
      <h1>NextAuth</h1>

      <div className="flex flex-row items-center gap-4">
        <Link href="/">Home</Link>

        <AuthButton />
      </div>
    </nav>
  )
}

export default Navbar