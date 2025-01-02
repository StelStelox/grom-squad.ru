export function Header(){
  return(
    <header className="flex items-center justify-between py-3 bg-neutral-900 rounded-b-lg">
      <a href="/" className="flex items-center">
        <img src="/logo.png" className="w-12" alt="Logo" />
        <span className="hidden sm:inline text-xl font-extralight">
          GROM squad
        </span>
      </a>
    </header>
  )
}