import MenuList from "./components/MenuList.tsx";
import {useState} from "react";
import type {ItemProps} from "./type.ts";
import ExpenseItem from "./ExpenseItems/ExpenseItems.tsx";

const menuItems : ItemProps[] =[
  {id: "1", title: "Hamburger ", price:80, },
  {id: "2", title: "Coffee " , price: 70, },
  {id: "3", title:"Cheeseburger ", price: 90, },
  {id: "4", title:"Tea ", price: 50, },
  {id: "5", title:"Fries ", price: 45, },
  {id: "6", title:"Cole ", price: 40, },
  ]

const App = () => {
  const [cart, setCart] = useState<ItemProps[]>([]);

  const handleClick = ( id: string) =>{
    const item = menuItems.find((item) => item.id ===id);
    if(item) setCart([...cart, item]);
  };

  const removeItem = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className='App-container'>
      <div>
        <h2> Order Details:</h2>
        <ExpenseItem items={cart} removeItem={removeItem}/>
      </div>
      <div>
        <MenuList items={menuItems} onClick={handleClick} />
      </div>
    </div>

  );
};

export default App;
