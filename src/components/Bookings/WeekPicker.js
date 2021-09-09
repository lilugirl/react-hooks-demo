import { useRef } from "react";
import { FaChevronLeft,FaCalendarDay,FaChevronRight,FaCalendarCheck } from "react-icons/fa";
import { addDays,shortISO } from "../../utils/date-wrangler";
import { useBookingsParams } from "./bookingsHooks";

export default function WeekPicker(){
    const textboxRef=useRef();
    const {date,setBookingsDate:goToDate}=useBookingsParams();

    const dates={
        prev:shortISO(addDays(date,-7)),
        next:shortISO(addDays(date,7)),
        today:shortISO(new Date())
    }


    return (
       <div>
           <p className="date-picker">
               <button className="btn" onClick={()=>goToDate(dates.prev)}>
                   <FaChevronLeft/>
                   <span>Prev</span>
               </button>
               <button className="btn" onClick={()=>goToDate(dates.tody)}>
                   <FaCalendarDay />
                   <span>
                       Today
                   </span>
               </button>
               <span>
                   <input type="text" ref={textboxRef} placeholder="e.g. 2021-09-09" defaultValue="2020-06-24" />
                   <button className="go btn" onClick={goToDate(textboxRef.current)}>
                       <FaCalendarCheck />
                       <span>Go</span>
                    </button>
               </span>
               <button className="btn" onClick={()=>goToDate(dates.next)}>
                   <span>Next</span>
                   <FaChevronRight />
               </button>
           </p>
          
       </div>
    )

}