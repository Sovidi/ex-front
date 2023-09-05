import React, {useContext} from 'react'
import { MyContext } from '../Context'
import Item from './Item';

function List() {
    const {data, fetchFn} = useContext(MyContext);

    return(
      <li>
        {
          data.map(item => (
            <Item item={item}></Item>
          ))
        }
        <button>삭제</button>
      </li>

    )
  }

export default List