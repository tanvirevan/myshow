import EventDetails from "@/components/DetailsPage/EventDetails";
import EventVenue from "@/components/DetailsPage/EventVenue";
import HeroSection from "@/components/DetailsPage/HeroSection";
import { getEventById } from "@/db/queries";

export default async function DetailsPage({params: {id}})
 {
   const eventInfo = await getEventById(id);
   return (
      <>
        <HeroSection eventInfo = {eventInfo}/>
        <section className="container">
          <div className="grid grid-cols-5 gap-12 my-12">
            <EventDetails 
              details = {eventInfo?.details}
              swags = {eventInfo?.swags}
            />
            <EventVenue location = {eventInfo?.location}/>
          </div>
        </section>
      </>
   );
 };
