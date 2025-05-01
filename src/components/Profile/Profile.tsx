import { signOut } from "@/auth";
import UserIcon from "../icons/userIcon";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";

interface Profileprops{
    img : string
    name : string
}

export default function Profile(props : Profileprops){
    return(
        <>  
            <div className="bg-[#F6F5F4]">
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex flex-row text-[#312b2b] items-end hover:cursor-pointer"><UserIcon></UserIcon>  {props.name}</DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#F6F5F4] font-sans">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>
                            <form action={ async ()  =>{
                                "use server"
                                await signOut();
                            }}>
                            <button type="submit">Sign Out</button>
                            </form>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    )
}