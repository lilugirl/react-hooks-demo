import React ,{useState,useCallback} from 'react'
import { useQueryClient,useMutation } from 'react-query'
import { Link,useParams } from 'react-router-dom'
import {FaPlus} from 'react-icons/fa'
import useFetch from '../../utils/useFetch'
import {useQuery} from 'react-query'
import getData from '../../utils/api'
import BookablesList from './BookablesList'
import BookableDetail from './BookableDetails'
import PageSpinner from '../UI/Spinner'
import { getDefaultWatermarks } from 'istanbul-lib-report'


const BookablesView=()=>{
    const {data:bookables=[],status,error}=useQuery(
        "bookables",
        ()=>getData("http://localhost:3002/bookables")
    );
    const {id }=useParams();

   const bookable=bookables.find(b=>b.id===parseInt(id,10)) || bookables[0]
   console.log('bookables view bookable id',id,bookable)
   
   if(status==='error'){
       return <p>{error.message}</p>
   }

   if(status==='loading'){
       return <PageSpinner/>
   }
  
    return <main className="bookables-page" >
      <div>
      <BookablesList  bookable={bookable} bookables={bookables} getUrl={id=>`/bookables/${id}`}  />
       <p className="controls">
          <Link to="/bookables/new" replace={true} className="btn" >
              <FaPlus />
              <span>New</span>
        </Link>
       </p>
       
      </div>
      <BookableDetail bookable={bookable}  />
    </main>
}
export default BookablesView