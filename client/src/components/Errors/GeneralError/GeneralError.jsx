
const GeneralError = ({ resetErrorBoundary }) => {
  return (
    <div>
      <p>Ocurrió un error, vuelva a intentarlo.</p>
      <button onClick={resetErrorBoundary}>X</button>
    </div>
  )
}

export default GeneralError