import { useLocation } from "react-router-dom";
import { IHotel, ICountry } from "../../interfaces";
import { useState, useEffect } from "react";
import { getHotelList, getCountryList } from "../../dataHandlers/dataHandlers";
import { HotelsList } from "../../components/List/HotelsList";

export const HotelsPage = () => {
  const [hotels, setHotels] = useState<IHotel[]>([]);
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    const countryData = getCountryList();
    countryData.then((res) => setCountries(res.data));
    const hotelData = getHotelList();
    hotelData.then((res) => setHotels(res.data));
  }, []);

  const { hash } = useLocation();

  return (
    <>
      <h5>Путешествуйте с удовольствием</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad omnis
        tenetur reprehenderit dicta repudiandae voluptas! Doloribus quia unde
        veniam, nulla ipsum iste quibusdam sunt odio dolor nesciunt corrupti
        facilis.
      </p>
      {countries.map((country) => {
        return (
          <>
            {hash === `#${country.id}` && (
              <HotelsList
                key={country.id}
                listName={`${country.name}`}
                ordersArray={hotels.filter(
                  (hotel) => hotel.countryListId === country.id
                )}
              />
            )}
          </>
        );
      })}
      <HotelsList listName={"Дополнительная информация"} />
    </>
  );
};
