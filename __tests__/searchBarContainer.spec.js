import React from 'react';
import SearchBar from '../src/containers/search_bar';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('SearchBar Components ', () => {
  // Render a checkbox with label in the document
  const searchBar = shallow(<SearchBar />);

});