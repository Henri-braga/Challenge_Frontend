import React from 'react';
import { shallow } from 'enzyme';

import Card from './index';

describe('Card Component', () => {
  const mockDragon = {
    createdAt: '2020-07-26T19:10:58.228Z',
    id: '9',
    name: 'Banguela',
    type: 'Raio Negro',
  };

  const handleUpdateDragon = jest.fn();

  const wrapper = shallow(
    <Card dragon={mockDragon} updateCard={handleUpdateDragon} />,
  );

  it('Container should be a form', () => {
    expect(wrapper.name()).toBe('styled.form');
  });

  it('Container should have a prop onSubmit', () => {
    expect(wrapper.prop('onSubmit')).toBeInstanceOf(Function);
  });

  it('first child should be a input', () => {
    expect(wrapper.childAt(0).name()).toBe('input');
  });

  it('first child should have a prop name', () => {
    expect(wrapper.childAt(0).prop('name')).toBe('name');
  });

  it('first child should have a prop className', () => {
    expect(wrapper.childAt(0).prop('className')).toBe('nameDragon');
  });

  it('first child should have a prop onChange', () => {
    expect(wrapper.childAt(0).prop('onChange')).toBeInstanceOf(Function);
  });

  it('first child should have a prop value', () => {
    expect(wrapper.childAt(0).prop('value')).toBe('Banguela');
  });

  it('second child should be a input', () => {
    expect(wrapper.childAt(1).name()).toBe('input');
  });

  it('second child should have a prop className', () => {
    expect(wrapper.childAt(1).prop('className')).toBe('typeDragon');
  });

  it('second child should have a prop onChange', () => {
    expect(wrapper.childAt(1).prop('onChange')).toBeInstanceOf(Function);
  });

  it('second child should have a prop value', () => {
    expect(wrapper.childAt(1).prop('value')).toBe('Raio Negro');
  });

  it('second child should have a prop name', () => {
    expect(wrapper.childAt(1).prop('name')).toBe('type');
  });

  it('third child should be a p', () => {
    expect(wrapper.childAt(2).name()).toBe('p');
  });

  it('third child should have a prop className', () => {
    expect(wrapper.childAt(2).prop('className')).toBe('dateDragon');
  });

  it('fourth child should be a div', () => {
    expect(wrapper.childAt(3).name()).toBe('div');
  });

  it('fourth child should have a prop className', () => {
    expect(wrapper.childAt(3).prop('className')).toBe('button-group');
  });

  it('fourth child should be a button', () => {
    expect(wrapper.childAt(3).children().name()).toBe('button');
  });
});
