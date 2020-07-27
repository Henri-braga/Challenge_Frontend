import React from 'react';
import { shallow } from 'enzyme';

import Modal from '../Modal';

describe('Modal Component', () => {
  const wrapper = shallow(
    <Modal children={<p>text</p>} handleActive={() => {}} />,
  );

  it('Container should be a div', () => {
    expect(wrapper.name()).toBe('styled.div');
  });

  it('first child should be a div', () => {
    expect(wrapper.childAt(0).name()).toBe('div');
  });

  it('first child should be a div with prop className', () => {
    expect(wrapper.childAt(0).prop('className')).toBe('form-header');
  });

  it('first child should have a child div with p element', () => {
    expect(wrapper.childAt(0).childAt(0).name()).toBe('p');
  });

  it('first child should have a child div with button element', () => {
    expect(wrapper.childAt(0).childAt(1).name()).toBe('button');
  });

  it('second child should be a div', () => {
    expect(wrapper.childAt(1).name()).toBe('p');
  });
});
