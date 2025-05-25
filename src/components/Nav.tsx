import { useState } from "react";
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
        <div className="w-full bg-black/80 px-4  pt-4 pb-0 md:py-4">
            {/* Top bar with logo and hamburger */}
            <div className="flex items-center justify-between md:hidden">
                <img className="w-8 h-6" src={ReadersR} />
                <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (
                        <XIcon className="w-6 h-6" />
                    ) : (
                        <MenuIcon className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Full Menu */}
            <NavigationMenu
                viewport={false}
                className={`w-full justify-center mt-4 md:mt-0 mx-auto
          transition-all duration-1000 ease-in-out
          overflow-hidden
          max-h-0 opacity-0
          ${menuOpen ? "max-h-[1000px] opacity-100 pb-8" : ""}
          md:max-h-full md:opacity-100 md:flex md:overflow-visible md:transition-none 
        `}
            >
                <NavigationMenuList
                    className={`
            flex flex-col items-center text-center space-y-2
            md:flex-row md:space-y-0 md:space-x-6 md:text-left
          `}
                >
                    {[
                        { label: "Books", links: ["/genres", "/bestsellers"] },
                        { label: "Gadgets & Accessories", links: ["/genres", "/bestsellers"] },
                        { label: "Stationery", links: ["/genres", "/bestsellers"] },
                        { label: "Toys", links: ["/genres", "/bestsellers"] },
                    ].map((item, idx) => (
                        <NavigationMenuItem key={idx} className="w-full md:w-auto">
                            <NavigationMenuTrigger className="bg-red-600 text-white w-full md:w-auto justify-center">
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
