import React from 'react';
import { shallow } from 'enzyme';
import { GiFlame } from 'react-icons/gi';

import Input from './index';

describe('Input Component', () => {
  const wrapper = shallow(
    <Input
      icon={GiFlame}
      placeholder="name"
      className="test"
      onChange={() => {}}
      value={'value-test'}
    />,
  );

  it('Container should be a div', () => {
    expect(wrapper.name()).toBe('styled.div');
  });

  it('first child should be a icon', () => {
    expect(wrapper.childAt(0).name()).toBe('GiFlame');
  });

  it('second child should be a input', () => {
    expect(wrapper.childAt(1).name()).toBe('input');
  });

  it('input should have a prop type', () => {
    expect(wrapper.childAt(1).prop('type')).toBe('text');
  });

  it('input should have a prop placeholder', () => {
    expect(wrapper.childAt(1).prop('placeholder')).toBe('name');
  });

  it('input should have a prop onChange', () => {
    expect(wrapper.childAt(1).prop('onChange')).toBeInstanceOf(Function);
  });

  it('input should have a prop value', () => {
    expect(wrapper.childAt(1).prop('value')).toBe('value-test');
  });
});
