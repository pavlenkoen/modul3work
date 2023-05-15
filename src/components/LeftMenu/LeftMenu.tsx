import { Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ICountry } from "../../interfaces";
import { getCountryList } from "../../dataHandlers/dataHandlers";

export const LeftMenu = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    const data = getCountryList();
    data.then((res) => setCountries(res.data));
  }, []);
  return (
    <>
      <h5>Направления</h5>

      {countries.map((country) => {
        return (
          <>
            <Nav key={country.id} className="flex-column">
              <Nav.Link href={`/country#${country.id}`}>
                {country.name}
              </Nav.Link>
            </Nav>
          </>
        );
      })}
    </>
  );
};
