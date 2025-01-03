
import EventList from "@/components/LandingPage/EventList";
import Header from "@/components/LandingPage/Header";
import Image from "next/image";

export default function Home() 
  {
    return (
      <section className="container">
        <Header />
        <EventList /> 
      </section>
    );
  }
