import { useState,useMemo ,useEffect} from "react"
const nameList=['apple','peer','banana','lemon']
const ProductPage=()=>{

    const [price,setPrice]=useState(0);
    const [name,setName]=useState('apple');

    function getProductName(){
        console.log('getProductName触发');
        return name;
    }

    useEffect(()=>{
        console.log('name effect 触发')
        getProductName()
     },[name])

    useEffect(()=>{
       console.log('price effect触发')
    },[price])


   const memo_getProcutName=useMemo(()=>{
       console.log('name memo触发');
       return ()=>name;
   },[name])
   

    return <>
    <p>{name}</p>
    {/* <p>{price}</p> */}
    <p>{getProductName()}</p>
    <p>{memo_getProcutName()}</p>
    <button onClick={()=>setPrice(price+1)}>价钱+1</button>
    <button onClick={()=>setName(nameList[Math.random()*nameList.length<<0])}>修改名字</button>
    </>
}
export default ProductPage