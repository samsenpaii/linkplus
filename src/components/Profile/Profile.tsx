
import UserIcon from "../icons/userIcon";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { logout } from "../actions/logout";


interface Profileprops{
    img : string
    name : string
}

export default function Profile(props : Profileprops){
    return(
        <>  
            <div className="bg-[#F6F5F4]">
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex flex-row text-[#312b2b] items-end hover:cursor-pointer hover:bg-[#e7e0e0] p-1 rounded-sm"><UserIcon></UserIcon>  {props.name}</DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#F6F5F4] font-sans">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <form action={logout}>
                            <DropdownMenuItem asChild>
                                <button type="submit">Sign Out</button>
                            </DropdownMenuItem>
                            </form>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    )
}