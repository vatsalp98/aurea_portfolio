import Footer from "~/components/footer";
import FullLogo from "~/components/full_logo";
import HeadMeta from "~/components/headMeta";
import NavBar from "~/components/headerSite";
import { Specialists } from "~/components/typing/specialists";

export default function Home() {
  const specialists = [
    "an Engineer",
    "an Artist",
    "a Base Player",
    "a Gamer",
    "a Tatoo artist",
    "an Animal Lover",
  ];

  return (
    <>
      <HeadMeta
        title="Aurea | Home"
        description="Aurea Gutierrez, curious and creative to the core. Hopefully you like my projects."
      />
      <NavBar />
      <div className="z-0 inline-block bg-white px-32 py-8 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8">
        <main className="flex min-h-screen flex-col items-center justify-center md:pt-16 sm:pt-8">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <div className="flex w-full items-center justify-between lg:flex-col">
              <div className="w-1/2 pr-10 md:w-full">
                <FullLogo strokeColor="#5F0A87" />
              </div>
              <div className="flex w-1/2 flex-col items-center self-center pl-10 lg:w-full lg:text-center">
                <div
                  className={
                    "mx-2 my-2 !text-left !text-6xl text-dark dark:text-light xl:!text-5xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl"
                  }
                >
                  Engineering the future, one ingenious design at a time.
                </div>
                <Specialists
                  specialists={specialists}
                  className={
                    "mx-auto w-full !text-left !text-4xl font-bold text-dark dark:text-light lg:!text-center"
                  }
                />
                <p className="pl-2 text-lg text-dark dark:text-light md:text-sm xs:text-xs">
                  I’m focused on building responsive web and mobile applications
                  while focusing on serverless back-end technologies. I am
                  currently developing an application to help developing
                  countries improve their health services.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
