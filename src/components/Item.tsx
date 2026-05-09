import { ItemProps } from "../type.ts";

const Item = ({id, title, price, onAdd}: ItemProps) => {
  return (
    <div className="item" onClick={onAdd}>
      <span>{id}</span>
      <span>{title}</span>
      <span>{price}</span>
    </div>
  );
};

export default Item;