import React from 'react';
import { shallow } from 'enzyme';

import List from './index';

describe('List Component', () => {
  const dragons = [
    {
      createdAt: '2020-07-26T19:10:58.228Z',
      id: '1',
      name: 'Banguela',
      type: 'Raio Negro',
    },
    {
      createdAt: '2020-07-26T19:10:58.228Z',
      id: '2',
      name: 'Banguela',
      type: 'Raio Negro',
    },
    {
      createdAt: '2020-07-26T19:10:58.228Z',
      id: '3',
      name: 'Banguela',
      type: 'Raio Negro',
    },
  ];

  const wrapper = shallow(
    <List data={dragons} buttonTextCreate="create" handleClick={() => {}} />,
  );

  it('Container should be a div', () => {
    expect(wrapper.name()).toBe('styled.div');
  });

  it('first child should have a div', () => {
    expect(wrapper.childAt(0).name()).toBe('div');
  });

  it('first child should have a div with prop className', () => {
    expect(wrapper.childAt(0).prop('className')).toBe('header-list');
  });

  it('first child should have a div with h2', () => {
    expect(wrapper.find('.header-list').childAt(0).name()).toBe('h2');
  });

  it('first child should have a div with button', () => {
    expect(wrapper.find('.header-list').childAt(1).name()).toBe('button');
  });

  it('second child should have a ul', () => {
    expect(wrapper.find('ul').name()).toBe('ul');
  });
});
