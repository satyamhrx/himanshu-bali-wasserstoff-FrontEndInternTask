import React from "react";
// import { Card } from "../components/Card";
import { Ticket } from "../components/Ticket";
import "./TicketDemo.css";

export const TicketDemo: React.FC = () => {
  return (
    <div className="ticket-demo-bg">
      <div className="ticket-demo-card">
        <Ticket name="Jontan Kristof" email="jontan@email.com" ticketId="CONF-ABCD1234" />
      </div>
    </div>
  );
}; 