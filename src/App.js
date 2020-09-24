import React from 'react';
import Split from './composition/Split';
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate';
import Messages from './Messages';
import Counter from './state/Counter'
import HelloWorld from './state-drills/Helloworld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import Tabs from './state/Tabs'
import Accordion from './state-drills/Accordion';
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

const tabsProp = [
  { name: 'First tab',
  content: 'Loruem imspon fadolra sit amet csonecut dipipti fjkljoal.'},
  { name: 'Second tab',
  content: 'Laboriosam execritanonetmiom quos cosnceuter elalelflewk.'},
  { name: '3rd tab',
  content: 'Fugit, sapiente aspernatur corpiris velit, caclkjeoifasl.'}
];

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

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
            <Counter count={123} />
        </Split>
        <Split>
          <Messages name="Messages" unread={0} />
          <Messages name="Notifications" unread={10} />
        </Split>
        <Split><HelloWorld /></Split>
        <Split><Bomb /></Split>
        <Split><RouletteGun /></Split>
      </section>
      <section>
      <Split>
        <Tabs tabs={tabsProp} />
      </Split>
      <Split>
        <Accordion sections={sections}/>
      </Split>
      </section>
    </main>
  );
}

export default App;