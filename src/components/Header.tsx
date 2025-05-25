import React from "react";
import { User, Gift, Heart, Facebook, Instagram } from "lucide-react";

export const Header: React.FC = () => {
    return (
        <div className="bg-black/85 text-white p-1">
            <div className="flex gap-2 items-center justify-between">
                <div className="flex items-center">
                    <Facebook className="my-2 ml-2 mr-1 hover:text-red-600" />
                    <Instagram className="my-2 ml-1 mr-2 hover:text-red-600" />
                </div>
                <div className="flex items-center">
                    <div className="hover:text-red-600 flex items-center">
                        <Gift className="my-2 mr-1" />
                        <p className="mr-2">Gift Card</p>
                    </div>
                    <div className="hover:text-red-600 flex items-center">
                        <Heart className="my-2 ml-2 mr-1" />
                        <p className="mr-2">Wishlist (0)</p>
                    </div>
                    <User className="my-2 mx-2 hover:text-red-600" />
                </div>
            </div>
        </div>
    );
};
