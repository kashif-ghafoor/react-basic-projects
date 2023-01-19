import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const BasicTable = ({ URLs, columns }) => {
  function rendercell(column, url) {
    return column.content(url);
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>URLs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {URLs.map((doc) => (
            <TableRow key={doc._id}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {rendercell(column, doc.url)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default BasicTable;
