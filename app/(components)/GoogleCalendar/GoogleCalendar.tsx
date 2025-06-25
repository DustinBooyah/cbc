import React from 'react';

const GoogleCalendar = () => {
  return (
    <div>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=micbccalendar%40gmail.com&ctz=America%2FNew_York"
        title="calendar"
        // style={{ border: 0 }}
        width="800"
        height="600"
        // frameBorder="0"
        // scrolling="no"
      ></iframe>
    </div>
  );
};

export default GoogleCalendar;
