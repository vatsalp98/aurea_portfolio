export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-primary bg-gradEnd text-lg font-medium dark:bg-gradDarkEnd sm:text-base">
      <div
        className={
          "flex items-center justify-between px-8 py-8 font-semibold text-light lg:flex-col lg:py-6"
        }
      >
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center text-light lg:py-2">
          Aurea Basurto Gutierrez
        </div>
      </div>
    </footer>
  );
}
