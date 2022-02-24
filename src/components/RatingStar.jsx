import { useState ,useContext} from 'react'
import StarRating from 'react-rating-stars-component'
import { ratingContext } from './Context'
export default function RatingStar(){
   
    const [rating,setRating]=useState(" dsdsd")
    const{setRat}=useContext(ratingContext)
    const ratingChanged=(e)=>{
        console.log(e);
        setRating(e);
        setRat(e);
        
    }
    return(
        <div>
            
         <StarRating
         count={5}
         half={true}
         onChange={ratingChanged}
         size={24}
        
         activeColor="#ffd700"
         />{rating}
        </div>
    )
}