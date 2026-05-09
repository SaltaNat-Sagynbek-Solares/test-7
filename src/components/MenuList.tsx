import type {ItemProps} from "../type.ts";
import Item from "./Item.tsx";

interface MenuListProps {
  items: ItemProps[];
}

const MenuList = ({ items, } : MenuListProps) => {
  return (
    <div className='menu-container'>
      <h2 className='menu-list-title'>Add items</h2>
      <div>
        {items.map((item) =>(
          <Item key={item.id} {...item}/>
        ))}
      </div>
    </div>
  );
};

export default MenuList;