import type { ItemProps } from "../type.ts";

interface Props {
  items: ItemProps[];
  removeItem: (id: string) => void;
}

const ExpenseItem = ({ items, removeItem }: Props) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {items.map((item, index) => (
        <div className="cart-item" key={index}>
          <span>{item.title}</span>
          <div className="cart-item-info">
            <span>{item.price} KGS</span>
            <button className="btn" onClick={() => removeItem(item.id)}>X</button>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <span>Total price:</span>
        <strong>{total} KGS</strong>
      </div>
    </>
  );
};

export default ExpenseItem;