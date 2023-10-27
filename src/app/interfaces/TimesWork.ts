import { DateTime } from "luxon"

export interface TimeWork {
    day:string
    from:DateTime[]
    to:DateTime[]
}