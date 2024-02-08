import React, { useState } from "react";

interface CheckoutProps {
  startDate: Date;
}

const Checkout: React.FC<CheckoutProps> = ({ startDate }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    setSelectedDate(newDate);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Start Date: {startDate.toDateString()}</p>
      <label htmlFor="dateInput">Select a date:</label>
      <input type="date" id="dateInput" onChange={handleDateChange} />
      {selectedDate && (
        <>
          <p>Selected Date: {selectedDate.toDateString()}</p>
          <p>Local Date local Date: {selectedDate.toLocaleDateString()}</p>
          <p>ISO date local Date: {selectedDate.toISOString()}</p>
          <p>Selected local Date: {selectedDate.toLocaleString()}</p>
        </>
      )}
    </div>
  );
};

export default Checkout;
