"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";

const data = [
  {
    ticker: "BTC/USD",
    status: "active",
    profit: {
      usd: 100,
      percent: "10%",
    },
  },
  {
    ticker: "ETH/USD",
    status: "active",
    profit: {
      usd: 200,
      percent: "34%",
    },
  },
];

export function Positions() {
  console.log(data);
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pair</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Close</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item: any, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell>{item.ticker}</TableCell>
                <TableCell>
                  {item.profit.usd} ({item.profit.percent})
                </TableCell>
                <TableCell>{item.status}</TableCell>

                <Button
                  variant={"destructive"}
                  className="p-4 align-middle [&:has([role=checkbox])]:pr-0"
                  size={"sm"}
                >
                  Close
                </Button>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
