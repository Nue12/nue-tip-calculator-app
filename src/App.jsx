import SplitterInput from "./component/SplitterInput"
import Logo from '../public/images/logo.svg'

function App() {

  return (
    <div className="my-10">
      <img src={Logo} alt='logo' className='mx-auto' />
      <SplitterInput />
    </div>
  )
}

export default App
