import './App.css';
import List from './Component/List';
import Insert from './Component/Insert';
import { Context } from './Context';

function App() {
  
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
    <Context>
      <div>
        <h2>한줄댓글</h2>
          <Insert/>
        <ul>
          <List/>
        </ul>
      </div>
    </Context>
  );
}

export default App;
