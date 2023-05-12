import axios from "axios";


export interface Hotel{ 
    id?: number;
    name?: string;
    description?: string;
    imgSrc?: string;
    price?:number;
    country?:string;
    hot?:boolean;
    countryListId?:number;
    rusName?:string
};

export interface Country {
    name?: string;
    description?:string;
    imgSrc?:string
}


export const getHotelList = async () => {
   const response =  await axios.create({
        baseURL:'http://localhost:3334/api/hotel_list/'
    }).get('/')
   return response
      }



