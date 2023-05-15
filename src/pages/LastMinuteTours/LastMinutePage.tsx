import { HotelsList } from "../../components/List/HotelsList";
import { IHotel } from "../../interfaces";
import { useState, useEffect } from "react";
import { getHotelList } from "../../dataHandlers/dataHandlers";

export const LastMinutePage = () => {
  const [hotels, setHotels] = useState<IHotel[]>([]);

  useEffect(() => {
    const data = getHotelList();
    data.then((res) => setHotels(res.data));
  }, []);

  return (
    <>
      <HotelsList
        listName={"Успейте приобрести тур своей мечты"}
        ordersArray={hotels.filter((hotel) => hotel.hot === true)}
      />
      <HotelsList listName={"Дополнительная информация"} />
    </>
  );
};
