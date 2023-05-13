import "./HomePage.css";
import { List } from "../../components/List/List";
import { iCountry } from "../../interfaces";
import { useEffect, useState } from "react";
import { getCountryList } from "../../dataHandlers/dataHandlers";

export const HomePage = () => {
  const [countries, setCountries] = useState<iCountry[]>([]);

  useEffect(() => {
    const data = getCountryList();
    data.then((res) => setCountries(res.data));
  }, []);

  useEffect(() => {
    getCountryList();
  }, []);
  return (
    <>
      <List
        listName={"Путешествуйте с удовольствием"}
        ordersArray={countries}
      />
      <List listName={"Дополнительная информация"} />
    </>
  );
};
