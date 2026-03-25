import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Layout/Root.jsx'
import Home from './components/Home/Home.jsx'
import Installation from './components/Installation/Installation.jsx'
import App from './components/App/App.jsx'
import AppDetails from './components/AppDetails/AppDetails.jsx'
import NotFound from './components/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "apps",
        loader: async () => await fetch("/data.json"),
        Component: App
      },
      {
        path: "apps/:id",
        loader: async () => await fetch("/data.json"),
        Component: AppDetails
      },
      {
        path: "installation",
        Component: Installation,
      },
      {
        path: "*",
        Component: NotFound,
      },

    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
