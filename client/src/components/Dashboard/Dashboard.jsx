import { Suspense, lazy } from "react"
import { ErrorBoundary } from "react-error-boundary"
import ComplaintsList from "../ComplaintsList/ComplaintsList"
const GeneralError = lazy(() => import("../Errors/GeneralError/GeneralError"))

const Dashboard = () => {
  return (
    <>
        <p>Other elements</p>
        <ErrorBoundary fallback={<div>error cargando estos datos</div>}>
            <Suspense fallback={<div>loading....</div>}>
                <ComplaintsList />
            </Suspense>
        </ErrorBoundary>
    </>
  )
}

export default Dashboard