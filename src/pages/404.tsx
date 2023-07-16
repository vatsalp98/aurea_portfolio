import Link from "next/link";
import Image from "next/image";

export default function NotFoundPageError() {
  return (
    <>
      <div className="flex flex-col-reverse items-center justify-center">
        <div className="flex flex-col-reverse items-center justify-center gap-16 px-4 py-24 lg:flex-row lg:px-24 lg:py-24 md:gap-28 md:px-44 md:py-20">
          <div className="relative w-full pb-12 xl:w-1/2 xl:pt-24 lg:pb-0">
            <div className="relative">
              <div className="absolute">
                <div className="flex flex-col">
                  <h1 className="my-2 text-2xl font-bold text-gray-800">
                    Looks like you&apos;ve found the doorway to the great
                    nothing
                  </h1>
                  <p className="my-2 text-gray-800">
                    Sorry about that! Please visit our hompage to get where you
                    need to go.
                  </p>
                  <Link
                    href="/"
                    className="md my-2 self-center rounded border bg-indigo-600 px-8 py-4 text-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 lg:w-auto sm:w-full"
                  >
                    Take me there!
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/not_found.svg"
              alt="not found image"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </>
  );
}
