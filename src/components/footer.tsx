export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark bg-light text-lg font-medium dark:border-light dark:bg-dark sm:text-base">
      <div
        className={
          "flex items-center justify-between px-8 py-8 text-dark dark:text-light lg:flex-col lg:py-6"
        }
      >
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">Aurea Basurto Gutierrez</div>
      </div>
    </footer>
  );
}
