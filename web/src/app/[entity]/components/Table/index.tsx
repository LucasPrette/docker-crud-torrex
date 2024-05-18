import { twJoin } from "tailwind-merge";
import Header from "./Header";
import Row from "./Row";

interface TableProps {
  columns: string[];
  className: string;
  rows: (string | number)[][];
}

function Table({ columns, className, rows }: TableProps) {
  return (
    <table
      className={twJoin(
        "w-full max-w-screen-xl mx-auto table-fixed rounded-sm bg-zinc-950 overflow-hidden",
        className
      )}
    >
      <Header columns={columns} />
      <tbody className="">
        {rows.map((row) => (
          <Row id={row[0] as number} data={row} key={row[0]} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
