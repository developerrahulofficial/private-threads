import React from 'react'
import { useClerk } from '@clerk/nextjs';
import { Icons } from '@/components/icons';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Shareorcreate() {

    const router = useRouter()
    const { theme, setTheme } = useTheme()
    const { signOut } = useClerk();

    const handleShareThread = () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl)
            .then(() => {
                toast.success("URL copied to clipboard!");
            })
            .catch((error) => {
                console.error('Failed to copy URL: ', error);
            });
    };

  
    const handleCreateThread = () => {
        router.push('/login'); // Redirect to the login page
    };

    return (
        <>
            <ToastContainer
                position="top-center"
            />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className='hover:bg-gray-200 rounded-full p-2'>
                        <Icons.upload className='h-[22px] w-[22px] text-secondary transform transition-all duration-150 ease-out hover:scale-100 active:scale-90 cursor-pointer hover:text-foreground active:text-foreground' />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className='bg-background shadow-xl dark:bg-[#181818] z-[999] rounded-2xl w-[185px] mt-1 p-0'>
                    <DropdownMenuItem
                        className='focus:bg-transparent px-4 tracking-normal select-none font-semibold py-3 cursor-pointer text-[15px]  active:bg-primary-foreground  rounded-none'
                        onClick={handleShareThread}
                    >
                        Share this Thread
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className=' h-[1.2px] my-0' />
                    <DropdownMenuItem
                         onClick={handleCreateThread}
                        className='focus:bg-transparent px-4 tracking-normal select-none font-semibold py-3 cursor-pointer text-[15px] active:bg-primary-foreground rounded-none'
                    >
                        Create your thread
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className='h-[1.2px] my-0' />
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
