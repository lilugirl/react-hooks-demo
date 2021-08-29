import React ,{useState,useCallback} from 'react'
import BookablesList from './BookablesList'
import BookableDetail from './BookableDetails'

const BookablesView=()=>{
    const [bookable,setBookable]=useState();

    const updateBookable=useCallback((selected)=>{
        if(selected){
            selected.lastShown=Date.now();
            setBookable(selected);
        }
    },[])
    return <>
      <BookablesList  bookable={bookable} setBookable={updateBookable} />
      <BookableDetail bookable={bookable}  />
    </>
}
export default BookablesView