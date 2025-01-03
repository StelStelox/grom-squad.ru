import { FaBrandsDiscord, FaBrandsTelegram, FaBrandsVk } from 'solid-icons/fa';

export function Footer() {
    const links = [
        {
            icon: <FaBrandsDiscord class="w-10 h-10" />,
            link: "https://discord.gg/fjNCjk4qAn",
        },
        {
            icon: <FaBrandsTelegram class="w-10 h-10" />,
            link: "https://t.me/+TGtHFj-AhYUxMzRi",
        },
        {
            icon: <FaBrandsVk class="w-10 h-10" />,
            link: "https://vk.com/grom_260913",
        },
    ]

    return(
        <footer className="flex items-center bg-neutral-900 justify-center py-4 rounded-t-lg ring-1 ring-lime-400 space-x-4 mt-6">
            {links.map(({ link, icon }) => (
            <a
                className="text-white"
                href={link}
                target="_blank"
            >
                {icon}
            </a>
            ))}
        </footer> 
    )
}