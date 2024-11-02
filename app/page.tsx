
const page = () => {
  return (
    <div id="header" className="container mx-auto ">
    <header className="h-screen flex items-center justify-center bg-gray-400">
      <h1 className="text-white">Page</h1>
    </header>
    
    <main id="main" className="h-screen flex items-center justify-center bg-gray-500">
      <h1 className="text-white">Main</h1>
    </main>

    <footer id="footer" className="h-screen flex items-center justify-center bg-gray-700">
      <h1 className="text-white">Footer</h1>
    </footer>
    
    </div>
      
  )
}

export default page
