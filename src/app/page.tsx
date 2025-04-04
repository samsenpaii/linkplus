import HeroSection from "@/components/HeroSection/page";
import FeatureCard from "@/components/InfoCard/page";
import BookmarkIcon from "../../util/BookmarkIcon";

export default  function Home() {

  return (
    <div className="bg-white h-full w-full flex flex-col">
      <HeroSection></HeroSection>
      <div className="text-black space-y-2 flex flex-col p-10">
        <h2 className="text-3xl ml-[44%] font-bold tracking-tighter md:text-4xl/tight">Key Features</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Everything you need to organize your online resources
        </p>
      </div>
      <div className="text-black grid grid-cols-2 gap-6 pl-44 m-10">
        <FeatureCard
          icon={<BookmarkIcon/>}
          title="Save Links Easily"
          description="Quickly add and categorize links with just a few clicks"
        />
        <FeatureCard
          icon={<BookmarkIcon/>}
          title="Save Links Easily"
          description="Quickly add and categorize links with just a few clicks"
        />
        <FeatureCard
          icon={<BookmarkIcon/>}
          title="Save Links Easily"
          description="Quickly add and categorize links with just a few clicks"
        />
        <FeatureCard
          icon={<BookmarkIcon/>}
          title="Save Links Easily"
          description="Quickly add and categorize links with just a few clicks"
        />
      </div>
    </div>
  );
}


{/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Hello
    </div> */}