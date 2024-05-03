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
import { FaPlus } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";

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

function createData(product_name, price, in_stock, sold) {
  return { product_name, price, in_stock, sold };
}

const rows = [
  createData("Scent relaxing candles", 120, 5, 29),
  createData("Mat stretcher", 99.99, 1, 4),
  createData("Essential Oils", 18.24, 4, 291),
  createData("Crystals", 290.99, 1, 16),
  createData("Massage table", 299.99, 29, 10),
  createData("Massage chair", 300, 12, 32),
  createData("Jazz Sound Collections", 15, 129, 320),
  createData("Scent relaxing candles", 120, 5, 29),
  createData("Mat stretcher", 99.99, 1, 4),
  createData("Essential Oils", 18.24, 4, 291),
  createData("Crystals", 290.99, 1, 16),
  createData("Massage table", 299.99, 29, 10),
  createData("Massage chair", 300, 12, 32),
  createData("Jazz Sound Collections", 15, 129, 320),
];

export default function CustomizedTables() {
  return (
    <div
      style={{
        height: 600,
        width: "100%",
        padding: "2rem",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{ minWidth: 700, maxHeight: 500, border: "1px solid #91C3F4" }}
      >
        <Table stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ minWidth: "250px" }}>
                Product Name
              </StyledTableCell>
              <StyledTableCell align="left" sx={{ minWidth: "100px" }}>
                Price
              </StyledTableCell>
              <StyledTableCell sx={{ minWidth: "150px" }} align="center">
                In Stock
              </StyledTableCell>
              <StyledTableCell sx={{ minWidth: "200px" }} align="left">
                Sold
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.product_name}>
                <StyledTableCell component="th" scope="row">
                  {row.product_name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.price}</StyledTableCell>
                <StyledTableCell align="center">{row.in_stock}</StyledTableCell>
                <StyledTableCell align="left">{row.sold}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <button
        style={{
          background: "#91C3F4",
          padding: "1rem 1.5rem",
          border: "none",
          width: "fit-content",
          fontWeight: 700,
          borderRadius: "8px",
          alignSelf: "center",
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <FaPlus style={{ background: "transparent" }} />
        Add New Product
      </button>
    </div>
  );
}
