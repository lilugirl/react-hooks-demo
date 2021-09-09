import React, { useReducer,useState ,useEffect} from "react";
import { getWeek,shortISO } from "../../utils/date-wrangler";
import { useBookingsParams,useBookings } from "./bookingsHooks";

import BookingDetails from "./BookingDetails";
import BookingsGrid from "./BookingsGrid";
import WeekPicker from "./WeekPicker";
import weekReducer from "./weekReducer";

const Bookings=({bookable})=>{
    const [booking,setBooking]=useState(null);
    const {date} =useBookingsParams();
    const week=getWeek(date)
    const weekStart=shortISO(week.start)

    const {bookings}=useBookings(bookable?.id,week.start,week.end)
    const selectedBooking=bookings?.[booking?.session]?.[booking.date];

    useEffect(() => {
      setBooking(null)
    },[bookable,weekStart])

    return <div className="bookings">
        <div>
            <WeekPicker date={new Date()} />
            <BookingsGrid week={week} bookable={bookable} booking={booking} setBooking={setBooking} />
            <BookingDetails booking={selectedBooking || booking} bookable={bookable} />

        </div>
    </div>
}

export default Bookings;