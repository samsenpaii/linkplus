import Navbar from "@/components/Navbar/Navbar"

function page() {
  return (
    <div className="h-screen w-screen flex">
      {/* Sidebar */}
      <div className="bg-[#F6F5F4] w-96 h-screen border-2">
        <h1>nice</h1>
      </div> 

      {/* Main Content Area */}
      <div className="h-screen flex-1 flex flex-col">
        <Navbar />
      </div>
    </div>
  );
}

export default page;
