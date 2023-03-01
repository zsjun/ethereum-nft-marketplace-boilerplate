import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Balances from "components/Balances";

const router = createBrowserRouter([
  {
    path: "/balances",
    element: <Balances />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
