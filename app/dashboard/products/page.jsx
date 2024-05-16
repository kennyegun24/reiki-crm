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
    label: "Product Name",
    width: "250px",
  },
  {
    label: "Price",
    width: "100px",
  },
  {
    label: "In Stock",
    width: "150px",
  },
  {
    label: "Sold",
    width: "200px",
  },
];

export default function CustomizedTables() {
  const router = useRouter();
  const navigate = () => {
    router.push("/add/product");
  };
  const fetcher = async () => {
    const fetchData = await fetch("/api/product/all");
    const data = await fetchData.json();
    return data?.allProducts;
  };
  const { data, error, isLoading } = useSWR("fetchProducts", fetcher, {
    refreshInterval: null,
    errorRetryInterval: 500,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    errorRetryCount: 1,
    revalidateOnMount: true,
  });

  return (
    <TableComponent
      data={data}
      error={error}
      isLoading={isLoading}
      tableHead={tableHead}
      navigate={navigate}
      btn={"Create new product"}
      tableBody={data?.map((row, _) => (
        <>
          <StyledTableRow key={_}>
            <StyledTableCell component="th" scope="row">
              {row.product_name}
            </StyledTableCell>
            <StyledTableCell align="left">{row.price}</StyledTableCell>
            <StyledTableCell align="left">{row.in_stock}</StyledTableCell>
            <StyledTableCell align="left">{row.sold}</StyledTableCell>
          </StyledTableRow>
        </>
      ))}
    />
  );
}
