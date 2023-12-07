import './App.css';
import AddTodo from './components/addTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>Redux Application</h1>
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;
