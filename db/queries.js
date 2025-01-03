import { eventModel } from "@/models/event-models"
import {replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";
// replaceMongoIdInObject

async function getAllEvents() 
    {
        const allEvents = await eventModel.find().lean();
        return replaceMongoIdInArray(allEvents);
    }

async function getEventById(eventId)
    {
        const event = await eventModel.findById(eventId).lean();
        return replaceMongoIdInObject(event);
    }


// async function getAllEvents() {
//     const allEvents = await eventModel.find().lean();
//     return replaceMongoIdInArray(allEvents);
// }

// async function getEventById(eventId) {
//     const event = await eventModel.findById(eventId).lean();
//     return replaceMongoIdInObject(event);
// }

export {
    getAllEvents,
    getEventById
}