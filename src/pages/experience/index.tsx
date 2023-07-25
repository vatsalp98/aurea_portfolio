import Footer from "~/components/footer";
import FullLogo from "~/components/full_logo";
import HeadMeta from "~/components/headMeta";
import NavBar from "~/components/headerSite";

export default function ExperiencePage() {
  return (
    <>
      <HeadMeta
        title="Aurea | About Me"
        description="About me and my hobbies."
      />
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gradStart to-gradEnd dark:from-gradDarkStart dark:to-gradDarkEnd">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <span className="mr-20 text-dark dark:text-white">
            <FullLogo strokeColor="#5F0A87" />
          </span>
        </div>
      </main>
      <Footer />
    </>
  );
}
