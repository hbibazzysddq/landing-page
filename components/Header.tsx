"use client";
import Nav from "./Nav";
// import Image from "next/image";



const Header = () => {
  return (
    <header className="py-4 xl:py-6 text-white bg-zinc-600 scroll-smooth">
        <div className="container mx-auto flex justify-between items-center px-6">
            <div className="text-2xl">
                {/* <Image
                    src="/logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                /> */}
                Logo
            </div>
            <div className="flex items-center gap-8 ">
                <Nav />
            </div>
        </div>
    </header>
  )
}

export default Header
