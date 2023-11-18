import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Records from "./pages/Records";
import Funds from "./pages/Funds";
import Expenses from "./pages/Expenses";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/records" element={<Records />} />
        <Route path="/records/funds" element={<Funds />} />
        <Route path="/records/expenses" element={<Expenses />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
