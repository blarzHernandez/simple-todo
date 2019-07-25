import React from 'react';
import { shallow, mount } from 'enzyme';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
	const initialState = {
		items: [
			{ id: 0, text: 'Buy grocery', done: true },
			{ id: 1, text: 'Play guitar', done: false },
			{ id: 2, text: 'Romantic dinner', done: false },
		],
	};
	it('Should be renders', () => {
		const wrapper = shallow(<TodoList items={[]} onClick={() => {}} />);
		//Check if this component exist
		expect(wrapper.exists()).toBe(true);
	});

	it('Should be receive a list of items as prop', () => {
		const component = mount(<TodoList items={initialState} />);
		expect(component.props().items).toEqual(initialState);
	});
});
