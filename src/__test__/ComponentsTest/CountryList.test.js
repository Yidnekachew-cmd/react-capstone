import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../Redux/store';
import CountryList from '../../components/Home/CountryList';

describe('It renders', () => {
  it('CountryList correctly', () => {
    const tree = render(
      <Provider store={store}>
        <CountryList />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
