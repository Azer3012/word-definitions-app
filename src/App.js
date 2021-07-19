import { BrowserRouter, Route, Switch } from "react-router-dom";
import InfoWord from "./components/InfoWord";
import WordSearch from "./components/WordSearch";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WordSearch} />
        <Route path="/info" component={InfoWord} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
