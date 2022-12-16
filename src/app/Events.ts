import { EventCategory } from "./EventCategory";

export class Events {
    eventId: number = 0;
    eventTitle: string = '';
    categoryId: number = 0;
    eventDescription: string = '';
    eventStartDate: string = '';
    eventStartTime: string = '';
    eventEndDate: string = '';
    eventEndTime: string = '';
    eventVenue: string = '';
    city: string = '';
    state: string = '';
    country: string = '';
    customerEmail: string = ''
    category: EventCategory = new EventCategory()
}