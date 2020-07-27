import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';

describe('Header Component', () => {
  const wrapper = shallow(<Header title="header-test" buttonName="test" />);

  it('Container should be a header', () => {
    expect(wrapper.name()).toBe('styled.header');
  });

  it('Container should be a children(0)', () => {
    expect(wrapper.childAt(0).name()).toBe('div');
  });

  it('first child should have a prop className', () => {
    expect(wrapper.childAt(0).prop('className')).toBe('logo-header');
  });

  it('first child should be a children(0)', () => {
    expect(wrapper.find('.logo-header').childAt(0).name()).toBe('p');
  });

  it('first child should be a children(0)', () => {
    expect(wrapper.find('.logo-header').childAt(0).text()).toBe(
      '<GiSpikedDragonHead /> header-test',
    );
  });

  it('second child should have a button element', () => {
    expect(wrapper.childAt(1).name()).toBe('button');
  });

  it('second child should have a prop className', () => {
    expect(wrapper.childAt(1).prop('className')).toBe('signOut');
  });

  it('second child should have a prop onClick', () => {
    expect(wrapper.childAt(1).prop('onClick')).toBeInstanceOf(Function);
  });

  it('second child should have a prop className', () => {
    expect(wrapper.childAt(1).prop('className')).toBe('signOut');
  });

  it('second child should have a prop text', () => {
    expect(wrapper.childAt(1).text()).toBe('test');
  });
});
