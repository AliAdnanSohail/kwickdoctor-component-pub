import React from 'react';
import renderer from 'react-test-renderer';

import { Toast } from '../src';

const toastContentProps = {
  className: 'test-toast-content',
  text: 'test toast content',
};

function ToastContent(props) {
  return <div className={props.className}>{props.text}</div>;
}

const initialToasts = [
  {
    id: '9c1605ae-9336-4afd-9fe4-412065ef4c9b',
    content: ToastContent(toastContentProps),
    primary: false,
    boxstyle: 'rectangle-22',
    onHideClick() {},
    timeOut: 1000,
  },
];

function createNodeMock() {
  return {
    className: '',
  };
}

it('Toast renders correctly', () => {
  const element = renderer
    .create(<Toast initialToasts={initialToasts} />, { createNodeMock })
    .toJSON();

  expect(element).toMatchSnapshot();
});
