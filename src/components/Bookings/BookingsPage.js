import { shortISO } from '../../utils/date-wrangler';
import useFetch from '../../utils/useFetch';
import {useBookingsParams} from './bookingsHooks'

import BookablesList from '../Bookables/BookablesList';
import Bookings from './Bookings';
import PageSpinner from '../UI/Spinner';

export default function BookingsPage () {
  const {data:bookables=[],status,error}=useFetch("http://localhost:3002/bookables")
  const {date,bookableId}=useBookingsParams();
  const bookable=bookables.find(b=>b.id===bookableId) || bookables[0];
  function getUrl(id){
    const root=`/bookings?bookableId=${id}`;
    return date? `${root}&date=${shortISO(date)}`:root;
  }

  if(status==='error'){
    return <p>{error.message}</p>
  }

  if(status==='loading'){
    return <PageSpinner />
  }


  
  return (
    <main className="bookings-page">
      <BookablesList bookable={bookable} bookables={bookables} getUrl={getUrl} />
      <Bookings bookable={bookable} />
    </main>
  );
}