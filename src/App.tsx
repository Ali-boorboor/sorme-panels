import router from "./Routes/router";
import { memo } from "react";
import { useRoutes } from "react-router";

const App = memo(() => {
  const routes = useRoutes(router);

  return <>{routes}</>;
});

export default App;
