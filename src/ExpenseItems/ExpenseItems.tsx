import type { ItemProps } from "../type.ts";
import "./ExpenseItems.css";

interface Props {
  items: ItemProps[];
  removeItem: (id: string) => void;
}

const ExpenseItem = ({ items, removeItem }: Props) => {

  return (
    <>
      {items.map((item) => (
        <div className='cart_item' key={item.id}>
          <span>{item.title}</span>
          <span>  {item.quantity} x {item.price * item.quantity} </span>
          <button className='btn-remove' onClick={() => removeItem(item.id)}> X </button>
        </div>
      ))}
    </>
  );
};

export default ExpenseItem;