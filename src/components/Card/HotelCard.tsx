import "./Card.css";
import { Card as ButCard, Button } from "react-bootstrap";
import { useState } from "react";
import { IHotel } from "../../interfaces";

interface ICardProps {
  order: IHotel;
}

export const HotelCard = ({ order }: ICardProps) => {
  const [confirm, setConfirm] = useState<boolean>(false);

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
          <Button
            size="sm"
            variant={confirm ? "light" : "primary"}
            onClick={() => setConfirm((prev) => !prev)}
          >
            {confirm ? "Отменить" : "Забронировать отель"}
          </Button>
          <p
            style={{
              justifyContent: "right",
              display: "flex",
              paddingRight: "40px",
              marginLeft: "auto",
              color: "blue",
            }}
          >
            Цена от: {order.price}
          </p>
        </div>
      </ButCard>
    </>
  );
};
