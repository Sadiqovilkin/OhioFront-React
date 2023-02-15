import React, { useState } from "react";
import IsoTopeGrid from "react-isotope";
import "./Test.scss";

import cardsLayout from "./cardsLayout.json";
import filtersList from "./filters.json";

export default function App() {
  // Local state for managing filtering logic
  const [filters, updateFilters] = useState(filtersList);

  // Filter change handler
  const onFilter = (event) => {
    const {
      target: { value, checked },
    } = event;

    updateFilters((state) =>
      state.map((f) => {
        if (f.label === value) {
          return {
            ...f,
            isChecked: checked,
          };
        }
        return f;
      })
    );
  };

  return (
    <div className="App">
      <h1>Retail</h1>
      <div className="filter-container">
        {filters.map((f) => (
          <div className="filter" key={`${f.label}_key`}>
            <button
              id={f.label}
              type="checkbox"
              value={f.label}
              onClick={onFilter}
              checked={f.isChecked}
            >
              {f.label}
            </button>
            {/* <label htmlFor={f.label}>{f.label}</label> */}
          </div>
        ))}
      </div>

      <div className="container">
        <IsoTopeGrid
          gridLayout={cardsLayout} // gridlayout of cards
          noOfCols={3} // number of columns show in one row
          unitWidth={300} // card width of 1 unit
          unitHeight={300} // card height of 1 unit
          filters={filters} // list of selected filters
        >
          {cardsLayout.map((card) => (
            <div key={card.id} className="card">
              <div className="card-content">
                <h3>{card.content}</h3>
                <p>{card.placeholder}</p>
                <a href="#">CTA copy link</a>
              </div>
            </div>
          ))}
        </IsoTopeGrid>
      </div>
    </div>
  );
}
