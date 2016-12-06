import React from 'react';
//import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import Tab from './Tab';
import { shallow, mount } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils'


describe('Tabs test', () => {
  it('All Tabs are rendered', () => {
    const tabs = shallow(<Tabs>
      <Tab name='tab1'>1</Tab>
      <Tab name='tab2'>2</Tab>
      <Tab name='tab3'>3</Tab>
    </Tabs>);
    console.log(tabs.find('Tab'))
    expect(tabs.find('Tab').length).toBe(3);
  })

})
