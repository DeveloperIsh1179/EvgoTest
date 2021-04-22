import React from 'react';
import TableCell from '@material-ui/core/TableCell'

const TableHeadCells = ({ headerCells }) => {
  const headers  = headerCells.map((header, index) => (
      <TableCell key={index} align='left'><b>{header}</b></TableCell>
  ));
  return headers;
}

export default TableHeadCells