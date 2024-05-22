import React from 'react';

interface Event {
  id: string;
  name: string;
  date: string;
}

interface Props {
  events: Event[];
}

const EventList: React.FC<Props> = ({ events }) => {
  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <p>{event.name}</p>
            <p>{event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
