import React, { useState } from "react";
import ReadersR from "../assets/readersR.png";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { MenuIcon, XIcon } from "lucide-react";

export const Nav: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full bg-black/90 px-4 py-4">
            {/* Top bar with logo and hamburger */}
            <div className="flex items-center justify-between md:hidden">
                <img className="w-8 h-6" src={ReadersR} />
                <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                </button>
            </div>

            {/* Full Menu */}
            <NavigationMenu viewport={false}>
                <NavigationMenuList
                    className={`
                        flex-col items-start space-y-2 mt-4 md:mt-0 md:flex md:flex-row md:items-center md:justify-start md:space-y-0 md:space-x-4
                        ${menuOpen ? "flex" : "hidden"} 
                        md:flex
                    `}
                >
                    {[
                        { label: "Books", links: ["/genres", "/bestsellers"] },
                        { label: "Gadgets & Accessories", links: ["/genres", "/bestsellers"] },
                        { label: "Stationery", links: ["/genres", "/bestsellers"] },
                        { label: "Toys", links: ["/genres", "/bestsellers"] },
                    ].map((item, idx) => (
                        <NavigationMenuItem key={idx} className="w-full md:w-full ">
                            <NavigationMenuTrigger
                                className="bg-red-600 text-white w-full md:w-auto  justify-center flex align-middle"
                            >
                                {item.label}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-white p-4 rounded shadow w-full md:w-auto">
                                <div className="flex flex-col items-start space-y-2">
                                    {item.links.map((href, i) => (
                                        <NavigationMenuLink
                                            key={i}
                                            href={href}
                                            className="text-black hover:underline"
                                        >
                                            {href.replace("/", "").charAt(0).toUpperCase() + href.slice(2)}
                                        </NavigationMenuLink>
                                    ))}
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};
