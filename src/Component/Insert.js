import React, {useContext} from 'react'
import { MyContext } from '../Context';

function Insert() {
    const {data, fetchFn} = useContext(MyContext)

    const insertFn = (e) => {
        e.preventDefault();
        let formdata = new FormData(e.target);
        let objData = Object.fromEntries(formdata);

        fetchFn("post", objData);
    }
    return(
        <div>
            <form onSubmit={(e)=>{insertFn(e)}}>
                <input type='text' name='msg'></input>
                <input type='submit' value="저장"></input>
            </form>
        </div>
        )
    }

export default Insert