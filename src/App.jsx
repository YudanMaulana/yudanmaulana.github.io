import './index.css'
// import { FiAlignLeft } from "react-icons/fi";
import Navbar from './Navbar';
import Home from './Home';


function App() {
  return (
    <>
    <div className='flex flex-col'>
    {/* < FiAlignLeft className='text-slate-800 hover:text-slate-600 text-3xl' /> */}
      <Navbar />
      <Home />
    </div>
    </>
  )
}

export default App
