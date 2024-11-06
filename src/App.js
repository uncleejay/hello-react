import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Greetings from './GreetingsProps';
import Message from './MessageUseEffect';

function App() {
  return (
    <div className="App">
      <Counter />

      {/* over here we are passing the name props to Greetings
          component
      */}
      <Greetings name="Alice"/>
      <Greetings name="in WonderLand"/>
      <Message/>
    </div>
  );
}

export default App;
