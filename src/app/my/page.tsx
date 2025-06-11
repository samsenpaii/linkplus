import Content from "@/components/Content/Content";
import Navbar from "@/components/Navbar/Navbar"
import Sidebar from "@/components/Sidebar/Sidebar";

function page() {


  return (
    <div className="h-screen w-screen flex">
      {/* Sidebar */}
      <div className="bg-[#F6F5F4] w-60 h-screen border-2">
        <Sidebar />
      </div> 

      {/* Main Content Area */}
      <div className="h-screen flex-1 flex flex-col">
          <Navbar />
          <Content/>     
      </div>
    </div>
  );
}

export default page;
