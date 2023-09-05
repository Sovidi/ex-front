import React, {useContext} from 'react'
import { MyContext } from '../Context'
import Item from './Item';

function List() {
    const {data, fetchFn} = useContext(MyContext)

    return(
    <li>
        {
        data.map(item => (
            <Item key={item.id} item={item}></Item>
        ))
        }
    </li>
    )
}

export default List