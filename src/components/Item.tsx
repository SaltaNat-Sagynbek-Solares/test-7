import type {ItemProps} from "../type.ts";

const Item = ({ title, price, }: ItemProps) => {
  return (
    <div className="item">
      <span>{title}</span>
      <span>{price}</span>
    </div>
  );
};

export default Item;