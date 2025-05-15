import React from 'react';
import '../components/Ticket.css';

export type TicketProps = {
  name: string;
  email: string;
  ticketId: string;
  style?: React.CSSProperties;
};

export const Ticket: React.FC<TicketProps> = ({ name, email, ticketId }) => {
  // Generate a handle from the name
  const handle = '@' + name.toLowerCase().replace(/\s+/g, '') + '01';
  return (
    <div className="ticket-container">
      <div className="ticket-card">
        <div className="ticket-left">
          <div className="event-title">
            <span role="img" aria-label="logo" style={{ fontSize: 20 }}>🪐</span>
            Coding Conf
          </div>
          <div className="event-details">Jan 31, 2025 / Austin, TX</div>
          <div className="profile-row">
            <div className="avatar">
              <span role="img" aria-label="avatar">🧑‍💻</span>
            </div>
            <div>
              <div className="name-style">{name}</div>
              <div className="handle-style">{handle}</div>
            </div>
          </div>
        </div>
        <div className="dashed-line-container">
          <div className="dashed-curve"></div>
          <div className="dashed-line"></div>
          <div className="dashed-curve-bottom"></div>
        </div>
        <div className="ticket-right">{ticketId}</div>
      </div>
    </div>
  );
}; 