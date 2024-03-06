import React from 'react'
import { EXAMPLES } from '../../data'
import { useState } from 'react';
import TabButton from '../TabButton';
import Section from '../Section/section';
import Tabs from '../Tabs/Tabs';

export default function Example() {

    let [selectedTopic,setSelectedTopic] = useState(null) ;
  function handleSelect(selctedButton) {
    setSelectedTopic(selctedButton);
    }
    let TabContent=<p>Please click on the button </p>;
   if(selectedTopic){
    TabContent = (
        <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>
    );
   }
  return (
    <>
    
    <Section  title='Examples' id="examples" >
         <Tabs ButtonsContainer='menu' button={
            <>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')} >Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')} >Jsx</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')} >Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')} >State</TabButton>
            </>
         }>
            {TabContent}
            </Tabs>
         
          
        </Section>
    </>
      
    
  )
}
