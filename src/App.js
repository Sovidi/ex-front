import './App.css';
import axios from "axios";
import {useState, useEffect} from "react";

const instance = axios.create({
  baseURL:`${process.env.React_App_Server}`
})


function Insert({data, setData}) {

  const insertFn = (e) => {
    e.preventDefault();
    let formdata = new FormData(e.target);
    let objData = Object.fromEntries(formdata);
    instance.post("/insert", objData)
    .then(res => {
      setData(res.data)
    })
  }

  return(
    <div>
      <form onSubmit={(e)=> {insertFn(e)}}>
        <input type='text' name='msg'></input>
        <input type='submit' value="저장"></input>
      </form>
    </div>
  )
}




function List({data, setData}) {
  console.log(data);
  const remove = (id) => {
    instance.delete(`/abc/${id}`)
    .then(res=> {
      setData(res.data)
    })
  }

  return(
    <li>
      {
        data.map(item => (
          <li>
            {item.msg}
            <button onClick={()=>{remove(item.id)}}>삭제</button>
          </li>
        ))
      }
    </li>

  )
}


function App() {

  const [data, setData] = useState([]);

  const getData = () => {
    instance.get('/abc')
    .then(res=>{
      setData(res.data);
    })
  }

  useEffect(()=> {
    getData();
  }, []);


  
  // // 뒤에 파라미터값 100 이 req.query
  // instance.get("/abc?param=100")
  // .then(res => {
  //   console.log(res)
  // })

  // // 받는값이 req.body 
  // instance.post("/insert", {id:412333, name : "신규"})
  // .then(res => {
  //   console.log(res)
  // })


  return (
    <div className="App">
      <h2>한줄댓글</h2>
        <Insert data={data} setData={setData}/>
      <ul>
        <List data={data} setData={setData}/>
      </ul>
    </div>
  );
}

export default App;
