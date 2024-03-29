import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';

// Configuring Adapter
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ButtonDefault from '../components/Button';

fdescribe('ButtonDefault', () => {
    it('ButtonDefault when Clicked calls ONPRESS', () => {
        const mockOnPress = jest.fn();
        const wrapper = shallow(
            <ButtonDefault />
        ).setProps({
            navProps: {
                navigation: {
                    navigate: mockOnPress
                }
            }
        });
        wrapper.props().onPress();

        expect(mockOnPress).toHaveBeenCalledWith({ routeName: 'currencyList' });
        expect(mockOnPress).toHaveBeenCalledTimes(1);
    });
});