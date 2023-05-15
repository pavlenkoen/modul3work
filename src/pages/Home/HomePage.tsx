import "./HomePage.css";
import { CountryList } from "../../components/List/CountriesList";
import { ICountry } from "../../interfaces";
import { useEffect, useState } from "react";
import { getCountryList } from "../../dataHandlers/dataHandlers";

export const HomePage = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    const data = getCountryList();
    data.then((res) => setCountries(res.data));
  }, []);

  return (
    <>
      <CountryList
        listName={"Путешествуйте с удовольствием"}
        ordersArray={countries}
      />
      <CountryList listName={"Дополнительная информация"} />
    </>
  );
};
