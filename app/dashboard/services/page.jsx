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
import { useRouter } from "next/navigation";
import useSWR from "swr";
import TableLoading from "@/loaders/TableLoading";

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

export default function CustomizedTables() {
  const router = useRouter();
  const navigate = () => {
    router.push("/add/service");
  };
  const fetcher = async () => {
    const fetchData = await fetch("/api/services/all");
    const data = await fetchData.json();
    return data?.allServices;
  };
  const { data, error, isLoading } = useSWR("fetcher", fetcher, {
    refreshInterval: null,
    errorRetryInterval: 5000,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    errorRetryCount: 1,
    revalidateOnMount: true,
  });
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
        {!isLoading && !error ? (
          <Table stickyHeader aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell sx={{ minWidth: "250px" }}>
                  Service Name
                </StyledTableCell>
                <StyledTableCell align="left" sx={{ minWidth: "100px" }}>
                  Price
                </StyledTableCell>
                <StyledTableCell align="left" sx={{ minWidth: "100px" }}>
                  Timing
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <StyledTableRow key={row.product_name}>
                  <StyledTableCell component="th" scope="row">
                    {row.service_name}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.price}</StyledTableCell>
                  <StyledTableCell align="left">{row.timing}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <TableLoading />
        )}
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
        onClick={navigate}
      >
        <FaPlus style={{ background: "transparent" }} />
        Add New Service
      </button>
    </div>
  );
}
