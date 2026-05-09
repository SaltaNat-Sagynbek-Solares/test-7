import type {ItemProps} from "../type.ts";
import "./Item.css";

interface  Props extends ItemProps {
  onClick: () => void ;
}

const Item = ({ title, price, onClick}: Props) => {
  return (
    <div className="item" onClick={onClick}>
      <span>{title}</span>
      <span>{price}KGS</span>
    </div>
  );
};

export default Item;