import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';

// Configuring Adapter
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Importing File
import WelcomeScreen from '../screens/WelcomeScreen';
import ButtonDefault from '../components/Button';

describe('WelcomeScreen', () => {
    //Simple Unit Testing
    it('Checks if WelcomeScreen rendered 2 children', () => {
        const WScreen = shallow(<WelcomeScreen />);
        expect(WScreen.children.length).toBe(2);
    });

    it('WelcomeScreen should have ButtonDefault as child', () => {
        const wrapper = shallow(<WelcomeScreen />).setProps({
            navProps: 'currencyList'
        });
        expect(wrapper.find(ButtonDefault)).toHaveLength(1);
    });

    //Snapshot Testing
    it('Checks if everything is being rendered accordingly', () => {
        const tree = renderer.create(<WelcomeScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});