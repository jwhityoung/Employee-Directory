import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useTable, useSortBy, useFilters } from 'react-table';
import { columns, data } from '../components/dataSource';

function Table() {
    const [filterInput, setFilterInput] = useState("");
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      setFilter
    } = useTable(
      {
        columns,
        data
      },
      useFilters,
      useSortBy
    );
  
    const handleFilterChange = e => {
      const value = e.target.value || undefined;
      setFilter("show.name", value);
      setFilterInput(value);
    };
  
    // Render the UI for your table
    return (
        <div>
        <div><Navbar /></div>
        <input
          value={filterInput}
          onChange={handleFilterChange}
          placeholder={"Search"}
        />
        <table className="table table-bordered" {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={
                      column.isSorted
                        ? column.isSortedDesc
                          ? "sort-desc"
                          : "sort-asc"
                        : ""
                    }
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

export default Table;
