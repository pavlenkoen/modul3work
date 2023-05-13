import { useLocation } from "react-router-dom";
import { List } from "../../components/List/List";
import { iHotel } from "../../interfaces";
import { useState, useEffect } from "react";
import { getHotelList } from "../../dataHandlers/dataHandlers";

export const HotelsPage = () => {
  const [hotels, setHotels] = useState<iHotel[]>([]);

  useEffect(() => {
    const data = getHotelList();
    data.then((res) => setHotels(res.data));
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
      {hash !== "" ? (
        <>
          {hash === "#Egypt" && (
            <List
              listName={"Египет"}
              ordersArray={hotels.filter(
                (country) => country.countryListId === 1
              )}
            />
          )}
          {hash === "#Turkey" && (
            <List
              listName={"Турция"}
              ordersArray={hotels.filter(
                (country) => country.countryListId === 2
              )}
            />
          )}
          {hash === "#Thailand" && (
            <List
              listName={"Тайланд"}
              ordersArray={hotels.filter(
                (country) => country.countryListId === 3
              )}
            />
          )}
          {hash === "#UAE" && (
            <List
              listName={"ОАЭ"}
              ordersArray={hotels.filter(
                (country) => country.countryListId === 4
              )}
            />
          )}
          <List listName={"Дополнительная информация"} />
        </>
      ) : (
        <>
          <List listName={"Где вы хотели бы побывать?"} ordersArray={hotels} />
          <List listName={"Прочее"} />
        </>
      )}
    </>
  );
};
