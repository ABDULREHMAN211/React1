import './App.css';
import HELLO from'./HELLO';
import './HELLO.css'
function App({name,age}){
  return <div><p class="top">HELLO {name}! AGE:{age-10}</p>

  <HELLO firstName={name}></HELLO>
</div>

}

export default App;
