import Topbar from "@/components/Topbar/Topbar";
import FeatureCard from "@/components/InfoCard/page";
import GetStarted from "@/components/GetStarted/GetStarted";
import { Avataricons } from "@/components/AvatarIcons/AvatarIcons";
export default async function Profile() {
  return(
    <>
      <div className="bg-white">
        <Topbar></Topbar>
        <div className="mt-30 text-black flex items-center justify-center font-sans flex-col">
          <h1 className="text-3xl font-bold p-2 text-center">
            Master <span className="bg-gradient-to-r from-green-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Your Links with LinkPlus:
            </span>Organize, Share,
            <span className="block"> and Analyze with AI</span>
          </h1>

          <p className="p-2">The ultimate AI-powered tool to manage, share, and analyze your links effortlessly.</p>
          
          <div className="mt-4 mb-4">
            <Avataricons></Avataricons>
            <p className="font-sans flex items-center justify-center">Happy users</p>
          </div>
          
          <div className=" mb-13">
            <GetStarted />
          </div>
          
        </div>
        <div className="text-black flex items-center justify-center font-sans flex-col">
          <h1 className="text-3xl font-bold p-2 text-center">
           Frequently Asked Questions
          </h1>

          <p className="p-2">Got questions? We've got answers. If you can't find what you're looking for, feel free to contact our support team.</p>
        </div>
          <div className="text-black md:grid md:grid-cols-2 md:gap-10 ml-10 mr-10 m-5">
            <FeatureCard
              title="Save Links Easily"
              description="Quickly add and categorize links with just a few clicks."
            />
            <FeatureCard
              title="Understand Your Links with AI"
              description="LinkPlus’s intelligent engine scans each link to provide a clear, concise summary of its content and purpos."
            />
            <FeatureCard
              title="Instant QR Codes for Easy Access "
              description="Generate QR codes for any link with a single click."
            />
            <FeatureCard
              title="Seamless Google Login"
              description="LinkPlus integrates with your Google account for a hassle-free login experience."
            />
          </div>
      </div>
    </>
  )
}
