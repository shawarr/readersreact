import { Search as SearchIcon} from "lucide-react";
import { ShoppingCart } from 'lucide-react';
import ReadersLogo from "../assets/readers-fully-booked.png";
import React, {useState} from "react";
export const Search : React.FC = () => {
const [searchValue, setSearchValue] = useState<string>("");
    return (
        <div className="flex justify-center my-4 mx-2">
            <div className="text-center">
                <img src={ReadersLogo} alt="logo" className="w-20 mx-auto mb-2" />

                <div className="flex items-center justify-center gap-4 mx-auto">
                    <div className="relative w-72">
                        <SearchIcon
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"
                        />
                        <input
                            value={searchValue}
                            onChange={(e)=> setSearchValue(e.target.value)}
                            type="text"
                            placeholder="Search Readers..."
                            className="w-full pl-10 py-2 rounded-2xl border-red-600 focus:outline-none focus:ring-1 shadow-md shadow-red-300 border-2 focus:shadow-md focus:border-black focus:shadow-gray-400"
                        />
                    </div>

                    <ShoppingCart
                        className="w-6 h-6 text-gray-700"
                    />
                </div>
            </div>
        </div>
    );
};

