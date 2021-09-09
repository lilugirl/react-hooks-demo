import { useParams } from "react-router-dom";
import { useQueryClient,useQuery } from "react-query";
// import useFormState from './useFormState'
import getData from "../../utils/api";
export default function BookableEdit(){
    const {id}=useParams();
    const queryClient=useQueryClient();
    const {data,isLoading}=useQuery(["bookable",id],()=>getData(`http://localhost:3002/bookables/${id}`),{
        initialData:queryClient.getQueryData("bookables")?.find(b=>b.id===parseInt(id,10))
    });
    // const formState=useFormState(data);
    function handleDelete(){}
    function handleSubmit(){

    }

    if(isLoading){
        return <div>loading...</div>
    }
    

    return <div>edit</div>
}