import {useState} from 'react'
// import WeekPicker from "./WeekPicker";
import Bookings from './Bookings';
import BookablesList from '../Bookables/BookablesList';
let index2=0;
export default function BookingsPage () {
  const [bookable,setBookable]=useState(null)
  index2++;
  console.log('booking page 渲染',index2,bookable)
  return (
    <main className="bookings-page">
      <BookablesList bookable={bookable} setBookable={setBookable} />
      <Bookings bookable={bookable} />
    </main>
  );
}