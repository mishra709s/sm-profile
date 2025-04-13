import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Navbar from '../Navbar/Navbar'
import MobileNavbar from '../MobileNavbar/MobileNavbar'

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            SM<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop Navbar and Hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  )
}

export default Header
