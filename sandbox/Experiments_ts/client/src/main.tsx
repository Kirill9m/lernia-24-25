import React from "react"
import { ConfigProvider, theme } from "antd"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import { Paths } from "./paths"
import { Login } from "./pages/login"
import { Register } from "./pages/register"

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <h1>Home</h1>,
  },
  {
    path: Paths.login,
    element: < Login />,
  },
  {
    path: Paths.register,
    element: < Register />,
  },
]);

const container = document.querySelector("#root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ConfigProvider theme ={{
          algorithm: theme.darkAlgorithm
        }}>
        <RouterProvider router={ router }/>
        </ConfigProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
