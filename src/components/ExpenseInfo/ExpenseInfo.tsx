import type { ItemProps } from "../../type.ts";
import "./Expenselnfo.css"

interface Props {
  cart: ItemProps[];
}

const ExpenseInfo = ({ cart }: Props) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const sumByItem = cart.reduce((acc, item) => {
    acc[item.title] = (acc[item.title] || 0) + item.price * item.quantity;
    return acc;
  }, {} as Record<string, number>);

  const uniqueItems = Object.keys(sumByItem);

  return (
    <div>
      <p>Total spent: <b>{total} KGS</b></p>
      <div>
        {uniqueItems.map((title) => (
          <div key={title}>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseInfo;