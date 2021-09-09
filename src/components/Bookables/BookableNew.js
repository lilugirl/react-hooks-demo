import { useNavigate } from 'react-router-dom'
import { useQueryClient,useMutation } from 'react-query'
import useFormState from './useFormState'
import {createItem} from '../../utils/api'
export default function BookableNew(){
    const navigate=useNavigate();
    const formState=useFormState();
    const queryClient=useQueryClient();

    const {mutate:createBookable,status,error}=useMutation(item=>createItem('http://localhost:3002/bookables',item),{
        onSuccess:bookable=>{
            queryClient.setQueriesData("bookables",old=>[...(old || []),bookable]);
            navigate(`/bookables/${bookable.id}`)
        }
    })
    return <div>new</div>
}