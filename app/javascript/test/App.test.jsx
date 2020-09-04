import React from 'react';
import { shallow } from 'enzyme';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import App from '../Components/App';

let container; // For use with react-dom, act, etc.

describe('App - ', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ time: new Date() })
      })
    );
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;

    global.fetch.mockClear();
    delete global.fetch;
  });

  // One snapshot test per component
  it('should render app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass fetchTime', async done => {
    // We use act here since a useState setter is triggered upon fetch resolution (on mount)
    await act(async () => {
      render(<App />, container);
    });

    const heading = container.querySelector('h1');
    const para = container.querySelector('p');

    expect(heading.textContent).toEqual('Welcome to Ruby on Rails + React!');
    expect(para.textContent.substring(0, 12)).toEqual('Server time:');
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch.mock.calls[0][0]).toEqual('/current-time');
    done();
  });

  it('should pass fetchTime, (API error response)', async done => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Server error'
      })
    );
    await act(async () => {
      render(<App />, container);
    });

    const heading = container.querySelector('h1');
    const para = container.querySelector('p');

    expect(heading.textContent).toEqual('Welcome to Ruby on Rails + React!');
    expect(para.textContent).toEqual('Server error');
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch.mock.calls[0][0]).toEqual('/current-time');
    done();
  });
});
