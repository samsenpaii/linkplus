import GetStarted from "../GetStarted/GetStarted";

export default async function HeroSection() {

  return (
    <div className="h-96 w-full md:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-blue-500 to-[#F7F7F7]">
      <div className="flex flex-col justify-center items-center">
        <div className="text-black text-7xl font-bold">
          Organize Your Digital Links
        </div>
        <div className="m-5 text-2xl text-black">
          Save and manage your favorite links in one place, effortlessly.
        </div>
        <GetStarted />
      </div>
    </div>
  );
}
