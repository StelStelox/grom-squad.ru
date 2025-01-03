import { FaBrandsDiscord, FaBrandsTelegram, FaBrandsVk } from 'solid-icons/fa';

export function Footer() {
    return(
        <footer className="flex items-center bg-neutral-900 justify-center py-4 rounded-t-lg space-x-4 mt-6">
            <a href="https://discord.gg/fjNCjk4qAn" className="text-white" target="_blank">
                <FaBrandsDiscord class="w-10 h-10" />
            </a>
            <a href="" className="text-white" target="_blank">
                <FaBrandsTelegram class="w-10 h-10" />
            </a>
            <a href="https://vk.com/grom_260913" className="text-white" target="_blank">
                <FaBrandsVk class="w-10 h-10"/>
            </a>
        </footer> 
    )
}