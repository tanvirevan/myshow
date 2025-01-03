import Image from "next/image";
import EventImg from "@/public/google-io-2023-1.png";
import ActionButtons from "../ActionButtons";

export default function EventCart()
 {
   return (
      <div className="overflow-hidden rounded-md bg-[#242526]">
        <Image 
          src={EventImg}
          alt="Event 1" 
          className="w-full" 
        />

        <div className="p-3">
          <a href="/details/1" className="font-bold text-lg">Google I/O Extended</a>
          <p className="text-[#9C9C9C] text-sm mt-1">Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh</p>
          <div className="text-[#737373] text-sm mt-1">
            <span className="mr-1">1k Interested</span>
            <span>|</span>
            <span className="ml-1">40K Going</span>
          </div>

          {/* Buttons */}
          <ActionButtons />
          
        </div>
      </div>
   );
 };
