import { signIn, signOut, auth } from "@/auth";

export default async function Profile() {
  const session = await auth();

  console.log("Session:", session);

  if (session?.user) {
    return (
      <div>
        <p><strong>Name:</strong> {session.user.name}</p>
        <p><strong>Email:</strong> {session.user.email}</p>
        <p><strong>Google ID:</strong> {session.user.id}</p>
        
        <form action={async () => {
          "use server";
          await signOut();
        }}>
          <button className="bg-sky-300">Sign Out</button>
        </form>
      </div>
    );
  } else {
    return ( 
      <form action={async () => {
        "use server";
        await signIn("google");
      }}>
        <button type="submit">Sign in with Google</button>
      </form>
    );
  }
}
