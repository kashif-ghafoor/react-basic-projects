import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const SubURLsTable = ({ subURLs, url }) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 350 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{`sub urls for ${url}`}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subURLs.map((suburl) => (
            <TableRow key={suburl}>
              <TableCell key={suburl} sx={{ overflow: "auto" }}>
                {suburl}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SubURLsTable;
