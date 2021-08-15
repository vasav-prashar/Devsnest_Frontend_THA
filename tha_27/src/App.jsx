import './App.css';
import AppTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <AppTodo/>
      <ListTodo/>
     
    </div>
  );
}

export default App;
