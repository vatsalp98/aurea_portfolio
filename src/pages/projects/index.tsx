import Footer from "~/components/footer";
import HeadMeta from "~/components/headMeta";
import NavBar from "~/components/headerSite";
import { api } from "~/utils/api";
import { AiOutlineLoading } from "react-icons/ai";
import { motion } from "framer-motion";
import type { Project } from "~/components/types";
import Image from "next/image";

export default function ProjectsPage() {
  const { data, isLoading } = api.example.getProjects.useQuery();

  return (
    <>
      <HeadMeta
        title="Aurea | Projects"
        description="Quick glance into my projects"
      />
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gradStart to-gradEnd dark:from-gradDarkStart dark:to-gradDarkEnd">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-[hsl(280,100%,70%)]">Projects</span>
          </h1>
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
            data.documents.map((project) => {
              const item = project as Project;
              return (
                <div key={item.$id} className="w-[900px] shadow-primary">
                  <div className="flex rounded-lg border-primary bg-light px-8 py-16">
                    <div className="rounded-lg border p-2 shadow-lg">
                      <Image
                        alt={"Project Image"}
                        src={item.img ?? "/projects.svg"}
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="ml-5 flex flex-col">
                      <span className="mb-2 text-3xl font-bold">
                        {item.title}
                      </span>
                      <span className="text-lg">{item.description}</span>
                      <div className="mt-3">
                        {item.tags?.map((tag: string) => (
                          <span
                            key={tag}
                            className="mr-2 rounded-xl border border-primary bg-blue-200 px-2 py-1 font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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
