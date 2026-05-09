import MenuList from "./components/MenuList.tsx";
import type {ItemProps} from "./type.ts";

const menuItems : ItemProps[] =[
  {id: "1", title:"Hamburger", price:80, },
  {id: "2", title:"Coffee", price: 70, },
  {id: "3", title:"Cheeseburger", price: 90, },
  {id: "4", title:"Tea", price: 50, },
  {id: "5", title:"Fries", price: 45, },
  {id: "6", title:"Cole", price: 40, },
  ]

const App = () => {



  return (
    <div>
      <MenuList items={menuItems} />
    </div>
  );
};

export default App;
