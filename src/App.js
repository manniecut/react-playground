import React from 'react';
import Split from './composition/Split';
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate';
import Messages from './Messages';
import Counter from './state/Counter'
import HelloWorld from './state-drills/Helloworld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import './App.css';

const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
    section
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='blue' message='another tooltip message'>
    officiis
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      <section>
        <Split className='left' flexBasis={2}>
          This is the left Split section {firstTooltip}. blah blah blah blhalhalha
      <Tooltip message='inner tooltip message'>necesssitatittbus?</Tooltip>
          <br />
          <TheDate />
        </Split>

        <Split className='right'>
          And this is the right one . aha ha ha {secondTooltip}hahahahahahahalkdfjla skdf
      <br />
          <Counter count={123} />
        </Split>

        <Split>
          <Messages name="Messages" unread={0} />
          <Messages name="Notifications" unread={10} />
        </Split>
      </section>
      <section>
        <Split>
          <HelloWorld />
        </Split>
        <Split>
          <Bomb />
        </Split>
        <Split>
          <RouletteGun />
        </Split>
      </section>
    </main>
  );
}

export default App;