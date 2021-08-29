import React, { useReducer,useState } from "react";
import { getWeek } from "../../utils/date-wrangler";
import BookingDetails from "./BookingDetails";
import BookingsGrid from "./BookingsGrid";
import WeekPicker from "./WeekPicker";
import weekReducer from "./weekReducer";
const Bookings=({bookable})=>{
    const [week,dispatch]=useReducer(weekReducer, new Date(),getWeek)
    const [booking,setBooking]=useState(null)

    return <div className="bookings">
        <div>
            <WeekPicker date={new Date()} />
            <BookingsGrid week={week} bookable={bookable} booking={booking} setBooking={setBooking} />
            <BookingDetails booking={booking} bookable={bookable} />

        </div>
    </div>
}

export default Bookings;