import { motion } from "framer-motion";
import { AiOutlineLoading } from "react-icons/ai";
import Footer from "~/components/footer";
import FullLogo from "~/components/full_logo";
import HeadMeta from "~/components/headMeta";
import NavBar from "~/components/headerSite";
import type { Education } from "~/components/types";
import { api } from "~/utils/api";

export default function AboutPage() {
  const { data, isLoading } = api.example.getEducations.useQuery();

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

          {isLoading && (
            <motion.div
              whileInView={{
                rotate: 360,
                transition: { duration: 1, repeat: Infinity },
              }}
            >
              <AiOutlineLoading className="text-5xl text-white" />
            </motion.div>
          )}
          {data &&
            data.documents.map((education) => {
              const item = education as Education;
              return (
                <div
                  key={item.$id}
                  className="w-[900px] rounded-xl shadow-primary"
                >
                  <div className="flex rounded-xl border-primary bg-white px-8 py-16">
                    <div className="ml-5 flex flex-col">
                      <span className="mb-2 text-3xl font-bold">
                        {item.degree_name}
                      </span>
                      <div className="my-1 flex text-black/80">
                        <span className="mr-2 font-semibold">
                          {item.duration}
                        </span>
                        |
                        <span className="ml-2 font-semibold">
                          {item.school_name}
                        </span>
                      </div>
                      <span className="text-lg">{item.description}</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </main>
      <Footer />
    </>
  );
}
