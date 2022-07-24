import './styles/index.css';
import {Routing} from '../pages'
import { withProviders } from "./providers";

import {useProcess} from '../process'
import { Link } from 'react-router-dom';
import {Save} from '../enities'

function App() {

  useProcess()

  return (

      <div className="App">
        <header style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 30
        }} className="App-header">
          <p>
            FSD PROTO
          </p>
          <Link style={{color: '#fff'}} to="/offers">Offers</Link>
          <Link style={{color: '#fff'}}  to="/">Home</Link>
           <Save.SaveButton />
        </header>
        <Routing />
      </div>

  )
}


export default withProviders(App);
