"use client"; // Ensure it's a Client Component

import { signOut } from "next-auth/react"; // ✅ Import from next-auth/react
import UserIcon from "../icons/userIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface ProfileProps {
  img: string;
  name: string;
}

export default function Profile(props: ProfileProps) {
  return (
    <div className="bg-[#F6F5F4]">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex flex-row text-[#312b2b] items-end hover:cursor-pointer hover:bg-[#e7e0e0] p-1 rounded-sm">
          <UserIcon />
          {props.name}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#F6F5F4] font-sans">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => signOut()} // ✅ Directly call here
            className="cursor-pointer"
          >
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
