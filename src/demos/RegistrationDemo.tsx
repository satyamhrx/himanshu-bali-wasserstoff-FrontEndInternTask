import React, { useState } from 'react';
import { Form } from '../components/Form';
import { Ticket } from '../components/Ticket';
import './RegistrationDemo.css';

const generateTicketId = () => {
  return 'CONF-' + Math.random().toString(36).substr(2, 8).toUpperCase();
};

export const RegistrationDemo: React.FC = () => {
  const [ticket, setTicket] = useState<null | { name: string; email: string; ticketId: string }>(null);

  const handleFormSubmit = (data: { name: string; email: string; password: string }) => {
    setTicket({
      name: data.name,
      email: data.email,
      ticketId: generateTicketId(),
    });
  };

  return (
    <div className="registration-bg">
      <div className="registration-card">
        {!ticket ? (
          <div className="registration-content">
            <div className="registration-title-row">
              <span className="registration-title-icon" role="img" aria-label="logo">🪐</span>
              <span className="registration-title">Coding Conf</span>
            </div>
            <h1 className="registration-heading">
              Your Journey to Coding Conf 2025 Starts Here!
            </h1>
            <p className="registration-desc">
              Secure your spot at next year's biggest coding conference.
            </p>
            <Form onSubmit={handleFormSubmit} />
          </div>
        ) : (
          <div className="registration-content" style={{ textAlign: 'center' }}>
            <div className="registration-title-row">
              <span className="registration-title-icon" role="img" aria-label="logo">🪐</span>
              <span className="registration-title">Coding Conf</span>
            </div>
            <h2 className="registration-congrats">
              Congrats, <span className="registration-highlight">{ticket.name}</span>!<br />
              Your ticket is ready.
            </h2>
            <p className="registration-info">
              We've emailed your ticket to <span className="registration-highlight">{ticket.email}</span> and will send updates in the run up to the event.
            </p>
            <Ticket name={ticket.name} ticketId={ticket.ticketId} />
          </div>
        )}
      </div>
    </div>
  );
}; 