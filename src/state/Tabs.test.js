import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import Tabs from './Tabs';

describe(`Tabs Component`, () => {
    const tabsProp = [
        {
            name: 'First tab',
            content: 'Loruem imspon fadolra sit amet csonecut dipipti fjkljoal.'
        },
        {
            name: 'Second tab',
            content: 'Laboriosam execritanonetmiom quos cosnceuter elalelflewk.'
        },
        {
            name: '3rd tab',
            content: 'Fugit, sapiente aspernatur corpiris velit, caclkjeoifasl.'
        }
    ];
    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Tabs />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    /*it('renders the first tab by default', () => {
        const tree = renderer.create(<Tabs tabs={tabsProp} />)
        expect(tree).toMatchSnapshot()
    })*/
    it('renders empty when given no tabs', () => {
        const wrapper = shallow(<Tabs />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('renders the first tab by default', () => {
        const wrapper = shallow(<Tabs tabs={tabsProp} />);
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('closes the first tab and opens any clicked tab', () => {
        const wrapper = shallow(<Tabs tabs={tabsProp} />)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})