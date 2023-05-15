import "./Card.css";
import { Card as ButCard } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { ICountry } from "../../interfaces";

interface ICardProps {
  order: ICountry;
}

export const CountryCard = ({ order }: ICardProps) => {
  return (
    <>
      <ButCard
        key={order.id}
        border="info"
        style={{ minWidth: "1000px", maxHeight: "600px" }}
      >
        <ButCard.Body
          style={{ display: "flex", flexDirection: "row", padding: "20px" }}
        >
          <ButCard.Img
            variant="top"
            src={order.imgSrc ? order.imgSrc : "/logo192.png"}
            style={{
              width: "30%",
              margin: "left",
              height: "20%",
              left: "30px",
            }}
          />

          <ButCard.Title style={{ paddingLeft: "30px", paddingTop: "30px" }}>
            {order.name}
          </ButCard.Title>

          <ButCard.Text style={{ paddingLeft: "30px", paddingTop: "30px" }}>
            {order.description ? order.description : "Описание отсутствует"}
          </ButCard.Text>
        </ButCard.Body>
        <div className="buttons">
          <Nav.Link
            className="flex-column"
            style={{
              paddingLeft: "30px",
              paddingBottom: "20px",
              fontSize: "x-large",
              color: "blue",
            }}
            href={`/country#${order.id}`}
          >
            Подобрать отель
          </Nav.Link>
        </div>
      </ButCard>
    </>
  );
};
