import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PrimaryButton from '../ui/primaryButton';

const navItems = [
    {
        item: "Home",
        href: "/home",
    },
    {
        item: "About",
        href: "/about",
    },
    {
        item: "Projects",
        href: "/projects",
    },
    {
        item: "Testimonials",
        href: "/testimonials",
    },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <header className="flex justify-between items-center md:container absolute top-0 left-0 right-0 h-20 px-4">
                {/* Logo */}
                <Link href="/">
                    <Image src="/images/logo.svg" width={140} height={140} alt="logo" />
                </Link>
                
                <button
                    className="block md:hidden text-white"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Image
                        src="images/menu_icon.svg"
                        width={30}
                        height={30}
                        alt='not found'
                    />
                </button>
                
                <nav
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } absolute top-0 left-0 right-0 bg-white md:bg-transparent md:static md:block transition-all duration-300 h-screen md:h-auto`}
                >
                    <button 
                    className='w-full p-5 inline-flex justify-end md:hidden'
                    onClick={() => setIsMenuOpen(false)}
                    >
                        <Image 
                        src="images/cross_icon.svg"
                        width={20}
                        height={20}
                        alt='not found'
                        />
                    </button>
                    <ul className="flex flex-col md:flex-row items-center gap-y-4 md:gap-x-8 p-4 md:p-0">
                        {navItems.map((items, index) => (
                            <li key={index} className="md:text-white text-black hover:text-gray-300 transition-all duration-300">
                                <Link href={items.href}>{items.item}</Link>
                            </li>
                        ))}
                    </ul>
                    
                </nav>
               
                <div className="hidden md:block">
                    <PrimaryButton variant="tertary">Sign up</PrimaryButton>
                </div>
            </header>
        </div>
    );
};

export default Header;
