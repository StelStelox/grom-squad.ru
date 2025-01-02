export default function Page404() {

    return(
        <div className="h-full flex flex-col items-center justify-center">
            <h1 className="text-9xl text-center">404</h1>
            <h2 className="text-xl text-center" href="">Мы искали вдоль и поперёк, но ничего не нашли 🔎</h2>
            <a href="/" className="bg-lime-400 hover:bg-neutral-900 rounded-lg px-3 py-1 mt-6">На главную</a>
        </div>
    );
}
