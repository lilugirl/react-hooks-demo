import { useEffect,useState,useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import Spinner from "../UI/Spinner";
import useFetch from '../../utils/useFetch'

export default function BookablesList({bookable,setBookable}) {
 
const {data:bookables=[],status,error}=useFetch("http://localhost:3002/bookables")

  const group=bookable?.group;

  const bookablesInGroup=bookables.filter(b=>b.group===group)
  const groups = [...new Set(bookables.map((b) => b.group))];

 const timerRef=useRef(null);
 const nextButtonRef=useRef();

 useEffect(()=>{
   setBookable(bookables[0])
 },[bookables,setBookable])

 

  // useEffect(()=>{
  //   timerRef.current=setInterval(()=>{
  //     console.log('timer run')
  //   //  nextBookable()
    
  //   },10000);

  //   return ()=>{
  //     console.log('清理 timer')
  //     clearInterval(timerRef.current)
  //   }

  // },[])

  function changeBookable(selectedBookable) {
    setBookable(selectedBookable);
    nextButtonRef.current.focus();
  }

  function nextBookable() {
    const i=bookablesInGroup.indexOf(bookable);
    const nextIndex=(i+1) % bookablesInGroup.length;
    const nextBookable=bookablesInGroup[nextIndex];
    setBookable(nextBookable);
  }

  function changeGroup(event) {
    const bookablesInSelectedGroup=bookables.filter(b=>b.group===event.target.value);
    setBookable(bookablesInSelectedGroup[0]);
  }

  
  if(status==="error"){
    return <p>{error.message}</p>
  }

  if(status==='loading'){
    return <p><Spinner /> Loading bookables...</p>
  }
  return (
    <div>
    <select value={group} onChange={changeGroup}>
      {groups.map((g) => (
        <option value={g} key={g}>
          {g}
        </option>
      ))}
    </select>
    <ul className="bookables items-list-nav">
      {bookablesInGroup.map((b) => (
        <li
          key={b.id}
          className={b.id === bookable.id ? "selected" : null}
         
        >
          <button className="btn"  onClick={() => {
            changeBookable(b);
          }}>{b.title}</button>
        </li>
      ))}
    </ul>
    <p>
      <button className="btn" autoFocus onClick={nextBookable} ref={nextButtonRef} autoFocus>
        <FaArrowRight />
        <span>Next</span>
      </button>
    </p>
  </div>
  );
}
