import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Record from "./components/Record.jsx";
import RecordList from "./components/RecordList.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // default child route for "/"
      { path: "/trip", element: <RecordList /> }, // path = /record
      { path: "/trip/edit/:id", element: <Record /> }, // path = /record/edit/:id
      { path: "/create", element: <Record /> }, // path = /create
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <RecordList />,
//       },
//     ],
//   },
//   {
//     path: "/edit/:id",
//     element: <App />,
//     children: [
//       {
//         path: "/edit/:id",
//         element: <Record />,
//       },
//     ],
//   },
//   {
//     path: "/create",
//     element: <App />,
//     children: [
//       {
//         path: "/create",
//         element: <Record />,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
