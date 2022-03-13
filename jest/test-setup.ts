// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {},
}));

jest.mock('next/image', () => {
  type ImageProps = {
    src: string;
    alt: string;
  };

  return ({ src, alt }: React.PropsWithChildren<ImageProps>) =>
    React.createElement('img', { src, alt });
});
