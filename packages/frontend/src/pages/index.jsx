export default function Index() {
    return (
        <div className="h-full flex flex-col items-center justify-center font-extralight">
            <img src="/logo.png" className="w-96 h-96 pointer-events-none" alt="Logo" />
            <h1 className="text-5xl bg-neutral-900 text-lime-400 p-2 text-center rounded">
                Welcome to the GROM clan website
            </h1>
            <a 
                href="https://discord.gg/fjNCjk4qAn" 
                target="_blank" 
                className="text-2xl bg-lime-400 hover:bg-neutral-900 rounded-lg px-6 py-2 mt-6"
            >
                Вступить
            </a>
            <a 
                href="/info" 
                className="bg-lime-400 hover:bg-neutral-900 rounded-lg px-4 py-2 mt-6"
            >
                Информация
            </a>
        </div>
    );
}
