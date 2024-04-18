import React from "react";

const TableOfCards = ({ data }) => {
  // Assuming data is an array of objects with card content
  // Example: [{ id: 1, title: 'Card 1', content: 'Lorem ipsum' }, ...]
  const rowHeaders = [
    "Plot Size (sq. Ft.)",
    "1800 sq.ft.",
    "2100 sq.ft.",
    "2400 sq.ft.",
    "2700 sq.ft.",
    "3200 sq.ft.",
    "3600 sq.ft.",
    "5000 sq.ft.",
    "7200 sq.ft.",
  ];
  const colHeaders = [
    "BSP",
    "Development Charges",
    "Club Charges",
    "GST on DC & Club",
    "",
  ];
  // Generate table rows for tbody
  const tableBodyRows = [];
  for (let i = 0; i < 5; i++) {
    const tableColumns = [];
    for (let j = 0; j < 9; j++) {
      // Increased the column count by 1 for the header column
      const dataIndex = i * 10 + j;
      const cardData = data[dataIndex];
      if (j === 0) {
        // Check if it's the first column (header column)
        tableColumns.push(
          <td key={j} className="border-none">
            <div className="bg-gray-100 shadow-md rounded-xl font-bold min-h-[3rem] p-2 m-2 text-center">
              {colHeaders[i]}
            </div>
          </td>
        );
      } else {
        // Other columns
        tableColumns.push(
          <td key={j} className="border-none">
            {cardData && (
              <div className=" bg-white shadow-md rounded-xl  min-h-[3rem] p-2 m-2 text-center">
                <h3 className="text-lg font-semibold">{cardData.title}</h3>
              </div>
            )}
          </td>
        );
      }
    }
    tableBodyRows.push(
      <tr key={i} className="border-none">
        {tableColumns}
      </tr>
    );
  }

  // Generate table header row for thead
  const tableHeaderRow = (
    <tr className="border-none">
      <td className="border-none">
        <div className=" p-2 m-2 bg-gray-100 shadow-md rounded-xl font-bold text-center">
          {rowHeaders[0]}
        </div>
      </td>
      {Array.from({ length: 8 }).map((_, index) => (
        <td key={index + 1} className="border-none">
          <div className="p-2 bg-gray-100 shadow-md rounded-xl font-bold m-2 text-center">
            {rowHeaders[index + 1]}
          </div>
        </td>
      ))}
    </tr>
  );

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse">
        <thead>{tableHeaderRow}</thead>
        <tbody>{tableBodyRows}</tbody>
      </table>
    </div>
  );
};

export default TableOfCards;
