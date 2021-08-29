
import { getWeek } from "../../utils/date-wrangler";
export default function weekReducer(state,action){
    console.log('week redcuer',state,action)
    switch(action.type){

        case 'NEXT_WEEK':
            return getWeek(state.date,7);
        case 'PREV_WEEK':
            return getWeek(state.date,-7);
        case 'TODAY':
            return getWeek(new Date());
        case 'SET_DATE':
            return getWeek(new Date(action.payload));
        default:
            throw new Error(`Unknow action type: ${action.type}`)
    }
}