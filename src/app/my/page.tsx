import Navbar from "@/components/Navbar/Navbar"

function page() {
  return (
    <div className=" h-screen w-screen flex">
        <div className="bg-[#F6F5F4] w-96 h-screen border-2">
            <h1>nice</h1>
        </div>
        <div className="bg-asblack h-screen ">
           <Navbar></Navbar>
        </div>
    </div>
  )
}

export default page