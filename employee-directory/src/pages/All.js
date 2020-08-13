import React from "react";
import Navbar from "../components/Navbar";
import { useTable, useSortBy } from 'react-table';
import { columns, data } from '../components/dataSource';

function All() {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data,
      }, 
      useSortBy
      );
    return (
        <div>
        <div><Navbar /></div>
        <div>
        <table {...getTableProps()}>
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
             <span>
                  {column.isSorted ? (column.isSortedDesc ? " 👆" : " 👇") : ""}
                </span></th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
            })}
          </tr>
        )
      })}
    </tbody>
  </table>

        </div>
        </div>
    );
}

export default All;

