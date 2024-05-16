"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import TableComponent from "@/components/table/Table";
import {
  StyledTableCell,
  StyledTableRow,
} from "@/components/mui/StyledComponents";

const tableHead = [
  {
    label: "Full Name",
    width: "250px",
  },
  {
    label: "Email",
    width: "100px",
  },
  {
    label: "Phone No.",
    width: "150px",
  },
  {
    label: "Address",
    width: "200px",
  },
];

export default function CustomizedTables() {
  const router = useRouter();
  const navigate = () => {
    router.push("/add/user");
  };
  const fetcher = async () => {
    const fetchData = await fetch("/api/users/all");
    const data = await fetchData.json();
    return data?.allUsers;
  };
  const { data, error, isLoading } = useSWR("fetchUsers", fetcher, {
    refreshInterval: null,
    errorRetryInterval: 500,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    errorRetryCount: 1,
    revalidateOnMount: true,
  });
  return (
    <div style={{ height: 400, width: "100%", padding: "2rem", color: "#fff" }}>
      <TableComponent
        data={data}
        error={error}
        isLoading={isLoading}
        tableHead={tableHead}
        navigate={navigate}
        btn={"Create new user"}
        tableBody={data?.map((row, _) => (
          <>
            <StyledTableRow key={_}>
              <StyledTableCell component="th" scope="row">
                {row.full_name}
              </StyledTableCell>
              <StyledTableCell align="left">
                {row.email_address}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.mobile_number}
              </StyledTableCell>
              <StyledTableCell align="left">{row.address}</StyledTableCell>
            </StyledTableRow>
          </>
        ))}
      />
    </div>
  );
}
