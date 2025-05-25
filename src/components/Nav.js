import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import ReadersR from "../assets/readersR.png";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, } from "@/components/ui/navigation-menu";
import { MenuIcon, XIcon } from "lucide-react";
export const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (_jsxs("div", { className: "w-full bg-black/80 px-4  pt-4 pb-0 md:py-4", children: [_jsxs("div", { className: "flex items-center justify-between md:hidden", children: [_jsx("img", { className: "w-8 h-6", src: ReadersR }), _jsx("button", { className: "text-white", onClick: () => setMenuOpen(!menuOpen), children: menuOpen ? (_jsx(XIcon, { className: "w-6 h-6" })) : (_jsx(MenuIcon, { className: "w-6 h-6" })) })] }), _jsx(NavigationMenu, { viewport: false, className: `w-full justify-center mt-4 md:mt-0 mx-auto
          transition-all duration-1000 ease-in-out
          overflow-hidden
          max-h-0 opacity-0
          ${menuOpen ? "max-h-[1000px] opacity-100 pb-8" : ""}
          md:max-h-full md:opacity-100 md:flex md:overflow-visible md:transition-none 
        `, children: _jsx(NavigationMenuList, { className: `
            flex flex-col items-center text-center space-y-2
            md:flex-row md:space-y-0 md:space-x-6 md:text-left
          `, children: [
                        { label: "Books", links: ["/genres", "/bestsellers"] },
                        { label: "Gadgets & Accessories", links: ["/genres", "/bestsellers"] },
                        { label: "Stationery", links: ["/genres", "/bestsellers"] },
                        { label: "Toys", links: ["/genres", "/bestsellers"] },
                    ].map((item, idx) => (_jsxs(NavigationMenuItem, { className: "w-full md:w-auto", children: [_jsx(NavigationMenuTrigger, { className: "bg-red-600 text-white w-full md:w-auto justify-center", children: item.label }), _jsx(NavigationMenuContent, { className: "bg-white p-4 rounded shadow w-full md:w-auto", children: _jsx("div", { className: "flex flex-col items-start space-y-2", children: item.links.map((href, i) => (_jsx(NavigationMenuLink, { href: href, className: "text-black hover:underline", children: href.replace("/", "").charAt(0).toUpperCase() + href.slice(2) }, i))) }) })] }, idx))) }) })] }));
};
