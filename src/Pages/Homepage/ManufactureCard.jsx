/** @format */

import React from "react";
import { Card } from "react-bootstrap";

const ManufactureCard = ({ image, title }) => {
  return (
    <Card className="border border-gray-200 bg-white">
      <div className="w-24 h-24 mx-auto mt-3 rounded-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <Card.Body className="p-3">
        <Card.Title>
          <div className="flex gap-2 text-sm md:text-lg font-semibold text-secondary">
            {title}
          </div>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ManufactureCard;
