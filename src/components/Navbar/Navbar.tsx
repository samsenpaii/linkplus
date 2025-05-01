import BookmarkIcon from "../icons/bookmarkIcon";
import ClockIcon from "../icons/clockIcon";
import DownArrowIcon from "../icons/downarrowIcon";
import PlusIcon from "../icons/plusIcon";
import SearchIcon from "../icons/searchIcon";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-col font-sans border-b-[1px] p-2">
        {/* Top Navbar */}
        <div className="m-2 flex flex-row items-center justify-between">
          <div className="bg-[#F6F5F4] p-1 w-72 flex items-center rounded-sm">
            <div className="flex items-center justify-center p-2">
              <SearchIcon style="text-[#4f4c4c]" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className=" text-[#636161] bg-[#F6F5F4] outline-none flex-1"
            />
          </div>

          <div className="bg-blue-600 rounded-sm p-1 flex items-center justify-center text-[#F6F5F4] hover:cursor-pointer hover:bg-blue-400">
            <PlusIcon />
            <div className="pr-2 pl-2">Add link</div>
          </div>
        </div>

        {/* Bookmark Section */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center space-x-2">
            <BookmarkIcon style="text-[#4f4c4c]"/>
            <div className="text-2xl text-[#4f4c4c]">All BookMarks</div>
          </div>
          <div className="flex flex-row justify-center items-center hover:bg-[#f2efef] rounded-sm p-1 cursor-pointer">
            <ClockIcon style="text-[#4f4c4c]"/>
            <div className="text-[#4f4c4c] pl-2">
              Sort by Time
            </div>
            <DownArrowIcon style="text-[#4f4c4c]"></DownArrowIcon>
          </div>
        </div>
      </div>

    </>
  );
}
