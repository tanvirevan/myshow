import Image from "next/image";
import EventImg from "@/public/google-io-2023-1.png";
import ActionButtons from "../ActionButtons";

export default function EventCart({event})
 {
   return (
      <div className="overflow-hidden rounded-md bg-[#242526]">
        <Image 
          src={event?.imageUrl}
          alt={event?.name} 
          className="w-full"
          width={500}
          height={500}
        />

        <div className="p-3">
          <a href={`/details/${event?.id}`} className="font-bold text-lg">{event.name}</a>
          <p className="text-[#9C9C9C] text-sm mt-1">{event.location}</p>
          <div className="text-[#737373] text-sm mt-1">
            <span className="mr-1">{event?.interested_ids?.length} Interested</span>
            <span>|</span>
            <span className="ml-1">{event?.going_ids?.length} Going</span>
          </div>

          {/* Buttons */}
          <ActionButtons />
          
        </div>
      </div>
   );
 };
