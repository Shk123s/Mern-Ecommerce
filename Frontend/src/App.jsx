
import { ToastContainer } from 'react-toastify'
const App = () => {

  if (loading) {
    return <div className='Loading'>Loading...</div>;
  }
  return (
    <div>
 <ToastContainer/>
    </div>
  )
}

export default App
