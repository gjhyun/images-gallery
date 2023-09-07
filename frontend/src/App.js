import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';


function App() {
  const [word, setWord] = useState(''); {/** word is part of state of this component. initial value is empty string */}

  const handleSearchSubmit = (e) => { {/** e is an event */}
    e.preventDefault()
    console.log(word)
  }
  
  return (
    <div className="App">
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
