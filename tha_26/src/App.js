import Card from "./cardAction.jsx";
import Output from "./Output";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Card />
        <Output />
      </Provider>
    </div>
  );
}

export default App;