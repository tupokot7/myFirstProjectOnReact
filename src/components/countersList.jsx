import React, { useState } from "react";
import Counter from "./counter";

const initialState = [
   { id: 0, value: 0, name: "Ненужная вещь" },
   { id: 1, value: 4, name: "Ложка" },
   { id: 2, value: 0, name: "Вилка" },
   { id: 3, value: 0, name: "Тарелка" },
   { id: 4, value: 0, name: "Набор минималиста" },
];

const CountersList = () => {
   const [counters, setCounters] = useState(initialState);
   const handleDelete = (id) => {
      const newCounters = counters.filter(c => c.id !== id);
      setCounters(newCounters);
   };
   const handleReset = () => {
      setCounters(initialState);
   };
   const handleIncrement = (id) => {
      const newCounters = counters.map((counter) => {
         return counter.id === id ? { ...counter, value: counter.value + 1 } : counter
      });
      setCounters(newCounters)
   };
   const handleDecrement = (id) => {
      const newCounters = counters.map((counter) => {
         return counter.id === id ? { ...counter, value: counter.value - 1 } : counter
      });
      setCounters(newCounters)
   };

   return (
      <>
         {counters.map((count) => (
            <Counter
               key={count.id}
               onDelete={handleDelete}
               onIncrement={handleIncrement}
               onDecrement={handleDecrement} {...count}
            />
         ))};
         <button
            className="btn btn-primary btn-sm m-2"
            onClick={handleReset}
         >
            Сброс
         </button>
      </>
   );
};
export default CountersList;