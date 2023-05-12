
import { List } from '../../components/List/List'
import axios from 'axios'
import { Hotel } from '../../interfaces' 
import { useState, useEffect} from 'react'




export const LastMinutePage = () => {
    const [hotels, setHotels] = useState<Hotel[]>([])
    
   
    const getHotelList = async () => {
        const  { data }   = await axios.create({
            baseURL:'http://localhost:3334/api/hotel_list/'
        }).get('/')
        setHotels(data)
          }
      
  
 
  useEffect(() => {
    getHotelList()
    
     }, [])
    return (
        
        <>
          
            <List listName={'Успейте приобрести тур своей мечты'} ordersArray={hotels.filter((hotel)=> hotel.hot === true)} />
            <List listName={'Дополнительная информация'} />
            
               
           
        </>
    );
};

