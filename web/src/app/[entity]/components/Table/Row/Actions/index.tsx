import Delete from "./Delete";
import Edit from "./Edit";

interface ActionsProps {
  id: number;
}

function Actions({ id }: ActionsProps) {
  return (
    <div className="flex items-center justify-center gap-x-2">
      <Edit id={id} />
      <Delete id={id} />
    </div>
  );
}

export default Actions;
