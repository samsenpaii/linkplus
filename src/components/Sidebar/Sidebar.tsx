import { auth } from "@/auth"
import Profile from "../Profile/Profile";

export default async function Sidebar(){

    const session = await auth();

    return (
        <>
            <div className="font-sans">
                <div className="flex flex-row justify-between w-full m-5">
                    {(session?.user?.name && session.user.image) &&
                    <Profile img={session.user.image} name={session?.user?.name}></Profile>
                    }
                </div>
            </div>
        </>
    )
}

