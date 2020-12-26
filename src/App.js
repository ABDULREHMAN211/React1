import './App.css';
import HELLO from'./HELLO';
function App({name,age}){
  return <div>Our Creator is great{name} AGE:{age-10}
  <br/>
  <HELLO firstName={name}></HELLO>
</div>

}


export default App;
