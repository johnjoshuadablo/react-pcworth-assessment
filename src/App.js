import { useState } from 'react';
import { login } from './services';

import './App.css';

function App() {
  const [username, setUsername] = useState();
  const [password, setpassword] = useState();


  const onLogin = async () => {
    const res = await login({ username, password })
    console.log()
    if (!res?.success) {
      alert('wrong information')
    } else {
      alert('success information')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>login</p>
        <label>Enter your username:
          <input onChange={(e) => setUsername(e.target.value)} type="text" />
        </label>
        <label>Enter your password:
          <input onChange={(e) => setpassword(e.target.value)} type="password" />
        </label>
        <button onClick={onLogin}>
          Activate Lasers
        </button>
      </header>
    </div>
  );
}

export default App;
