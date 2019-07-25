import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';

describe('App Component', () => {
	it('Should be render', () => {
		shallow(<App />);
	});
});
