import React from "react";
import Chart from "./Chart";
import { Card, CardBody, CardTitle, CardText } from "reactstrap"; // Optional: UI library for styling

const DistributorCard = ({ distributor }) => {
  const { name, lastMonthShipment, forecastedShipment, yearToDateAverage, shipmentTrend } = distributor;

  return (
    <div className="distributor-card">
      <Card>
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardText>
            <strong>Last Month's Shipment: </strong>{lastMonthShipment} units
          </CardText>
          <CardText>
            <strong>Forecasted Shipment: </strong>{forecastedShipment} units
          </CardText>
          <CardText>
            <strong>Year-to-Date Average: </strong>{yearToDateAverage} units/month
          </CardText>
          <Chart data={shipmentTrend} />
        </CardBody>
      </Card>
    </div>
  );
};

export default DistributorCard;
