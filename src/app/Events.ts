import { EventCategory } from "./EventCategory";

export class Events {
    event_id: number = 0;
    event_title: string = '';
    category_id: number = 0;
    event_description: string = '';
    event_start_date: string = '';
    event_start_time: string = '';
    event_end_date: string = '';
    event_end_time: string = '';
    event_venue: string = '';
    city: string = '';
    state: string = '';
    country: string = '';
    customerEmail: string = ''
    category: EventCategory = new EventCategory()
}