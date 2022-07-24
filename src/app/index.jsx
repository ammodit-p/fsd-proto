import logo from './logo.svg';
import './styles/index.css';
import {Routing} from '../pages'
import { withProviders } from "./providers";


import {useCoreProcess} from '../process'

function App() {
  useCoreProcess()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          FSD PROTO
        </p>
      </header>
      <Routing />
    </div>
  )
}

export default withProviders(App);
