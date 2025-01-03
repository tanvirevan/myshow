import EventDetails from "@/components/DetailsPage/EventDetails";
import EventVenue from "@/components/DetailsPage/EventVenue";
import HeroSection from "@/components/DetailsPage/HeroSection";

export default function DetailsPage({params: id})
 {
   return (
      <>
        <HeroSection/>
        <section className="container">
          <div className="grid grid-cols-5 gap-12 my-12">
            <EventDetails/>
            <EventVenue/>
          </div>
        </section>
      </>
   );
 };
