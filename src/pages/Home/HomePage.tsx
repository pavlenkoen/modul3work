import './HomePage.css'
import { List } from '../../components/List/List'
import { Country } from '../../interfaces'
import axios from 'axios'
import { useEffect, useState } from 'react'

/** Главная страница. */
export const HomePage = () => {
    const [countries, setCountries] = useState<Country[]>([])
    
   
    const getCountryList = async () => {
        const  { data }   = await axios.create({
            baseURL:'http://localhost:3334/api/country_list/'
        }).get('/')
        setCountries(data)
        
      }
      
  
 
  useEffect(() => {
    getCountryList()
    
     }, [])
    return (
        
        <>
            <List listName={'Путешествуйте с удовольствием'} ordersArray={countries} />
            <List listName={'Дополнительная информация'} />
        </>
    );
};

