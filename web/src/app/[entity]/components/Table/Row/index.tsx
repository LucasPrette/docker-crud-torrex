import Actions from "./Actions";
import Item from "./Item";

interface RowProps {
  id: number;
  data: (string | number)[];
}

function Row({ id, data }: RowProps) {
  return (
    <tr className="border-t border-t-zinc-700">
      {data.map((d) => (
        <Item key={d}>{d}</Item>
      ))}
      <Item>
        <Actions id={id} />
      </Item>
    </tr>
  );
}

export default Row;
