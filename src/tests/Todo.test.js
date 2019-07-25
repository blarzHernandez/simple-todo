import React from 'react';
import Todo from '../components/Todo';
import { shallow, mount } from 'enzyme';

describe('Todo Functional Component', () => {
	const initialState = {
		items: [
			{ id: 0, text: 'Buy grocery', done: true },
			{ id: 1, text: 'Play guitar', done: false },
			{ id: 2, text: 'Romantic dinner', done: false },
		],
	};
	it('Should be renders', () => {
		const wrapper = shallow(<Todo item={[]} onClick={() => {}} />);
		//Check if this component exist
		expect(wrapper.exists()).toBe(true);
	});

	it('Should receive items as prop', () => {
		const component = mount(<Todo item={{ id: 0, text: 'Buy grocery', done: true }} />);
		expect(component.props().item).toEqual({ id: 0, text: 'Buy grocery', done: true });
	});

	it('Should have at least one item', () => {
		const component = mount(<Todo item={initialState} onClick={() => {}} />);
		//component.setState({ items: initialState });
		expect(component.find('li')).toHaveLength(1);
	});

	it('Test click event', () => {
		const mockCallBack = jest.fn();
		const wrapper = shallow(<Todo item={[]} onClick={mockCallBack} />);
		const li = wrapper.find('li');
		li.simulate('click');
		expect(mockCallBack).toHaveBeenCalled();
	});
});
