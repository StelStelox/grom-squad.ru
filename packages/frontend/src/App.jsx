import { Route, Router } from "@solidjs/router";
import { lazy } from "solid-js";

const Main = lazy(() => import("./layouts/main"));
const Page404 = lazy(() => import("./pages/404"));
const Index = lazy(() => import("./pages/index"));
const Info = lazy(() => import("./pages/info"))

export default function App() {
  return (
    <Router root={Main}>
      <Route path="*" component={Page404} />
      <Route path="/" component={Index} />
      <Route path="/info" component={Info}/>
    </Router>
  );
}
