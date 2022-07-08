import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Layout from "./layout";
import Files from "./components/files.json";

function Routes() {
  const [_, ...restFiles] = Files;

  return (
    <Router>
      <Switch>
        {restFiles.map((file, index) => (
          <Route key={index} path={`/${file.name}`} element={<Layout />} />
        ))}
        <Route path="/" element={<Layout />} />
      </Switch>
    </Router>
  );
}

export default Routes;
