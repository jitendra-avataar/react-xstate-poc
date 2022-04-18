import './App.css';
import {useMachine} from '@xstate/react';
import {trafficLightMachine} from './machines/traffic-light-machine';

function App() {
  const [state,send]=useMachine(trafficLightMachine)
  return (
    <div className="container">
      <input type="radio" name="traffic-light" readOnly className='light red' checked={state.matches('red')}/>
      <input type="radio" name="traffic-light" readOnly className='light yellow' checked={state.matches('yellow')}/>
      <input type="radio" name="traffic-light" readOnly className='light green' checked={state.matches('green')} />
      <button type='button' onClick={()=>send("NEXT")}>NEXT</button>
   </div>
  );
}

export default App;
