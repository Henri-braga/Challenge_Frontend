import React from 'react';
import { shallow } from 'enzyme';

import ListItem from './index';

describe('List Component', () => {
  const dragon = {
    createdAt: '2020-07-26T19:10:58.228Z',
    id: '1',
    name: 'Banguela',
    type: 'Raio Negro',
  };

  const wrapper = shallow(
    <ListItem item={dragon} url="/fake" handleDelete={() => {}} />,
  );

  it('Container should be a div', () => {
    expect(wrapper.name()).toBe('styled.li');
  });

  it('first child should have a div', () => {
    expect(wrapper.childAt(0).name()).toBe('div');
  });

  it('first child should have a child icon', () => {
    expect(wrapper.childAt(0).childAt(0).name()).toBe('GiVelociraptor');
  });

  it('first child should have a child icon with className', () => {
    expect(wrapper.childAt(0).childAt(0).prop('className')).toBe('icon-name');
  });

  it('second child should have a div', () => {
    expect(wrapper.childAt(1).name()).toBe('div');
  });

  it('second child should have a div with className', () => {
    expect(wrapper.childAt(1).prop('className')).toBe('icons-group');
  });

  it('.icons-group should be a link', () => {
    expect(wrapper.childAt(1).childAt(0).name()).toBe('Link');
  });

  it('.icons-group should be a button', () => {
    expect(wrapper.childAt(1).childAt(1).name()).toBe('button');
  });
});
