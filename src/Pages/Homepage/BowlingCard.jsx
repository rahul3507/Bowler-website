/** @format */

import { Card } from "react-bootstrap";
import { BadgeCheck } from "lucide-react";

const BowlingCard = ({ image, title, description }) => {
  return (
    <Card className="border border-gray-200">
      <Card.Img variant="top" src={image} />
      <Card.Body className="bg-[#CFD1CD] p-3">
        <Card.Title>
          <div className="flex gap-2 text-sm md:text-lg font-semibold text-secondary">
            {title}
            <BadgeCheck className="text-blue-500 w-6 h-6" />
          </div>
        </Card.Title>
        <Card.Text className="text-tertiary text-xs">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BowlingCard;
