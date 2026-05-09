import type {ItemProps} from "../type.ts";
import Item from "./Item.tsx";
import "./MenuList.css"

interface MenuListProps {
  items: ItemProps[];
  onClick: (id: string) => void;
}

const MenuList = ({ items, onClick} : MenuListProps) => {
  return (
    <div className='menu-container'>
      <h2 className='menu-list-title'>Add items</h2>
      <div>
        {items.map((item) =>(
          <Item key={item.id} {...item} onClick={() => onClick(item.id)}/>
        ))}
      </div>
    </div>
  );
};

export default MenuList;