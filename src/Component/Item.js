import React, {useContext} from 'react'
import { MyContext } from '../Context'


function Item({item}) {
    const {data, fetchFn} = useContext(MyContext);

  return (
    <li>
        {item.msg}
        <button onClick={()=>{fetchFn("del", item.id)}}>삭제</button>
    </li>
)
}

export default Item