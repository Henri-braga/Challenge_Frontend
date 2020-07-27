import React from 'react';
import { shallow } from 'enzyme';

import Button from './index';

describe('Button Component', () => {
  const handleClick = jest.fn();
  const wrapper = shallow(
    <Button className="class-test" children="button" onClick={handleClick} />,
  );

  it('Container should be a button', () => {
    expect(wrapper.name()).toBe('styled.button');
  });

  it('Container should be have a prop type', () => {
    expect(wrapper.prop('type')).toBe('button');
  });

  it('Container should be have a prop className', () => {
    expect(wrapper.prop('className')).toBe('class-test');
  });

  it('Container should be have a prop onClick', () => {
    expect(wrapper.prop('onClick')).toBe(handleClick);
  });

  it('Container should be have a prop children', () => {
    expect(wrapper.prop('children')).toBe('button');
  });

  it('should be call a click function at least once', () => {
    wrapper.simulate('click');

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
