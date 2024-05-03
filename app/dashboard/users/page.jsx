"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, email, phone, carbs) {
  return { name, email, phone, carbs };
}

const rows = [
  createData(
    "Akash Lewis",
    "akash_lewis_1281@gmail.com",
    "+1234567890",
    "random address located somewhere in USA"
  ),
  createData(
    "Random customer",
    "random@gmail.com",
    "+1234567890",
    "random address located somewhere in Denmark"
  ),
  createData(
    "Jon Snow",
    "jonsnow@gmail.com",
    "+1234567890",
    "Random address located anywhere in Finland"
  ),
  createData(
    "Jon Smith",
    "jonsmith@gmail.com",
    "+1234567890",
    "Random address located anywhere in Norway"
  ),
  createData(
    "Kenny Elias",
    "kennyegun240@gmail.com",
    "+1234567890",
    "random address located in ipaja, Lagos state, Nigeria"
  ),
  createData(
    "Akash Lewis",
    "akash_lewis_1281@gmail.com",
    "+1234567890",
    "random address located somewhere in USA"
  ),
  createData(
    "Random customer",
    "random@gmail.com",
    "+1234567890",
    "random address located somewhere in Denmark"
  ),
  createData(
    "Jon Snow",
    "jonsnow@gmail.com",
    "+1234567890",
    "Random address located anywhere in Finland"
  ),
  createData(
    "Jon Smith",
    "jonsmith@gmail.com",
    "+1234567890",
    "Random address located anywhere in Norway"
  ),
  createData(
    "Kenny Elias",
    "kennyegun240@gmail.com",
    "+1234567890",
    "random address located in ipaja, Lagos state, Nigeria"
  ),
  createData(
    "Akash Lewis",
    "akash_lewis_1281@gmail.com",
    "+1234567890",
    "random address located somewhere in USA"
  ),
  createData(
    "Random customer",
    "random@gmail.com",
    "+1234567890",
    "random address located somewhere in Denmark"
  ),
  createData(
    "Jon Snow",
    "jonsnow@gmail.com",
    "+1234567890",
    "Random address located anywhere in Finland"
  ),
  createData(
    "Jon Smith",
    "jonsmith@gmail.com",
    "+1234567890",
    "Random address located anywhere in Norway"
  ),
  createData(
    "Kenny Elias",
    "kennyegun240@gmail.com",
    "+1234567890",
    "random address located in ipaja, Lagos state, Nigeria"
  ),
  createData(
    "Akash Lewis",
    "akash_lewis_1281@gmail.com",
    "+1234567890",
    "random address located somewhere in USA"
  ),
  createData(
    "Random customer",
    "random@gmail.com",
    "+1234567890",
    "random address located somewhere in Denmark"
  ),
  createData(
    "Jon Snow",
    "jonsnow@gmail.com",
    "+1234567890",
    "Random address located anywhere in Finland"
  ),
  createData(
    "Jon Smith",
    "jonsmith@gmail.com",
    "+1234567890",
    "Random address located anywhere in Norway"
  ),
  createData(
    "Kenny Elias",
    "kennyegun240@gmail.com",
    "+1234567890",
    "random address located in ipaja, Lagos state, Nigeria"
  ),
  createData(
    "Akash Lewis",
    "akash_lewis_1281@gmail.com",
    "+1234567890",
    "random address located somewhere in USA"
  ),
  createData(
    "Random customer",
    "random@gmail.com",
    "+1234567890",
    "random address located somewhere in Denmark"
  ),
  createData(
    "Jon Snow",
    "jonsnow@gmail.com",
    "+1234567890",
    "Random address located anywhere in Finland"
  ),
  createData(
    "Jon Smith",
    "jonsmith@gmail.com",
    "+1234567890",
    "Random address located anywhere in Norway"
  ),
  createData(
    "Kenny Elias",
    "kennyegun240@gmail.com",
    "+1234567890",
    "random address located in ipaja, Lagos state, Nigeria"
  ),
];

export default function CustomizedTables() {
  return (
    <div style={{ height: 400, width: "100%", padding: "2rem", color: "#fff" }}>
      <TableContainer
        component={Paper}
        sx={{ minWidth: 700, maxHeight: 500, border: "1px solid #91C3F4" }}
      >
        <Table stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ minWidth: "250px" }}>
                Full Name
              </StyledTableCell>
              <StyledTableCell align="left" sx={{ minWidth: "100px" }}>
                Email
              </StyledTableCell>
              <StyledTableCell sx={{ minWidth: "150px" }} align="center">
                Phone No.
              </StyledTableCell>
              <StyledTableCell sx={{ minWidth: "200px" }} align="left">
                Address
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.phone}</StyledTableCell>
                <StyledTableCell align="left">{row.carbs}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
