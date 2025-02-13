import { getAllEvents } from "@/db/queries";
import EventCart from "./EventCart";
import { Suspense } from "react";
import connectDB from "@/services/mongo";

export default async function EventList() {
  try {
    await connectDB(); // Ensure DB connection before querying
    const allEvents = await getAllEvents();
    
    if (!allEvents?.length) {
      return <p className="text-center text-gray-500">No events available</p>;
    }

    return (
      <Suspense fallback={<LoadingGrid />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {allEvents.map((event) => (
            <EventCart key={event.id} event={event} />
          ))}
        </div>
      </Suspense>
    );
  } catch (error) {
    console.error('EventList Error:', error);
    return <p className="text-red-500">Error loading events. Please try again later.</p>;
  }
}

const LoadingGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="animate-pulse bg-gray-200 h-64 rounded-lg" />
    ))} 
  </div>
);
