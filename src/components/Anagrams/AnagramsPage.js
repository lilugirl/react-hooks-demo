import React,{useState,useMemo} from "react"
import { getAnagrams,getDistinct } from "./anagrams"
import  "./styles.css"
const AnagramsPage=()=>{
    const [sourceText,setSourceText]=useState("ball")
    const [useDistinct,setUseDistinct]=useState(false)
    const [showAnagrams,setShowAnagrams]=useState(false)

  



    const anagrams=useMemo(()=>{
        console.log('useMemo anagrams')
        return getAnagrams(sourceText)
    },[sourceText])
    const distinct=useMemo(()=>{
        console.log('useMemo distinct')
        return getDistinct(anagrams)
    },[anagrams])

    return <div className='App2'>
       <h1>Anagrams</h1>
       <label htmlFor="txtPhrase">Enter some text to see its anagrams</label>
       <input type="text" value={sourceText} onChange={(e)=>setSourceText(e.target.value.slice(0,10))} />
       <div className="count">
          {useDistinct? (
              <p>
                  There are {distinct.length} distinct anagrams of "{sourceText}".
              </p>
          ):(
              <p>
                 There are {anagrams.length} anagrams of "{sourceText}".
              </p>
          )}
       </div>
       <p>
           <label>
               <input type="checkbox" checked={useDistinct} onChange={()=>setUseDistinct((s)=>!s)} />
               Distinct
           </label>
       </p>
       <p>
           <label>
               <input type="checkbox" checked={showAnagrams} onChange={()=>setShowAnagrams((s)=>!s)}  />
                Show
           </label>
       </p>
       {showAnagrams && (
           <p className="anagrams">
              {distinct.map((a)=>(
                  <span key={a}>{a}</span>
              ))}
           </p>
       )}
        </div>
}
export default AnagramsPage