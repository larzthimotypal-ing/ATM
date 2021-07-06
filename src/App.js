import Menu from './pages/Menu'
import Withdraw from './pages/Withdraw'
import Balance from './pages/Balance'
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import{useState} from 'react'


function App() {
  const [input, setInput] = useState(0)
  const [balance, setBalance] = useState(1000)
  return (
    <div className="container">
      <Router>
        <div className="screen">
          <h1 className="title">ATM</h1>
          <Switch>
            <Route exact path='/' component={Menu}/>
            <Route exact path='/withdraw' render={(props) => <Withdraw{...props} 
            input={input} setInput={setInput}
            balance={balance} setBalance={setBalance}/>}/>
            <Route exact path='/balance' render={(props) => <Balance{...props}
            balance={balance}/>}/>
          </Switch>   
        </div>
      </Router>
    </div>
  );
}

export default App;
