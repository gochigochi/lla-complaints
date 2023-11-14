import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"
import './index.css'
import { complaintAction } from './utils/complaintAction.js'

const Root = lazy(() => import("./routes/root"))
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"))
const ComplaintForm = lazy(() => import("./components/ComplaintForm/ComplaintForm"))
const GeneralError = lazy(() => import("./components/Errors/GeneralError/GeneralError"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <GeneralError />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "denuncia",
        action: complaintAction,
        element: <ComplaintForm />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<GeneralError />}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>,
)
