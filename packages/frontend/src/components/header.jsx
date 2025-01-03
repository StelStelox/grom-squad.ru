export function Header(){
  return(
    <header className="flex items-center justify-between py-3 bg-neutral-900 rounded-b-lg ring-1 ring-lime-400">
      <a href="/" className="flex items-center text-white">
        <img src="/logo.png" className="w-12" alt="Logo" />
        <span className="hidden sm:inline text-xl font-extralight">
          GROM squad
        </span>
      </a>
    </header>
  )
}