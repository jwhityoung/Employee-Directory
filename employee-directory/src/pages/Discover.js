import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useTable, useSortBy, useFilters } from 'react-table';
import { columns, data } from '../components/dataSource';
// export default Discover;

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
          placeholder={"Search name"}
        />
        <table {...getTableProps()}>
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

// function GlobalFilter({
//     preGlobalFilteredRows,
//     globalFilter,
//     setGlobalFilter,
// }) {
//     const [value, setValue] = React.useState(globalFilter)
//     const onChange = useAsyncDebounce(value => {
//         setGlobalFilter(value || undefined)
//     }, 200)

//     return (
//         <span>
//             Search{''}
//             <input
//                 value={value || ''}
//                 onChange={e => {
//                     setValue(e.target.value);
//                     onChange(e.target.value);
//                 }}
//                 placeholder='Search'
//             />
//         </span>
//     );
//             }

    
//     function DefaultColumnFilter({
//         column: { filterValue, preFilteredRows, setFilter }
//     }) {
//         return (
//             <input
//                 value={filterValue || ''}
//                 onChange={e => {
//                     setFilter(e.target.value || undefined)
//                 }}
//                 placeholder={'Search'}
//             />
//         );
//             }




//         function Table({ columns, data }) {
//             const filterTypes = React.useMemo(
//                 () => ({
//                     text: (rows, id, filterValue) => {
//                         return rows.filter(row => {
//                             const rowValue = row.values[id]
//                             return rowValue !== undefined
//                                 ? String(rowValue)
//                                     .startsWith(String(filterValue))
//                                 : true
//                         })
//                     },
//                 }),
//                 []
//             )

//             const defaultColumn = React.useMemo(
//                 () => ({
//                     Filter: DefaultColumnFilter,
//                 }),
//                 []
//             )

//             const {
//                 getTableProps,
//                 getTableBodyProps,
//                 headerGroups,
//                 rows,
//                 prepareRow,
//                 state,
//                 visibleColumns,
//                 preGlobalFilteredRows,
//                 setGlobalFilter,
//             } = useTable(
//                 {
//                     columns,
//                     data,
//                     defaultColumn,
//                     filterTypes,
//                 },
//                 useFilters,
//                 useGlobalFilter
//             )

//         }
    

//     function Discover() {
//         return (
//             <div>
//                 <Table columns={columns} data={data} />
//             </div>
//         )
//     }