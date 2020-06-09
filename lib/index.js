import reactDomFactory from './reactDomFactory';

const getReactDom = (panel, data) => {
  const reactDom = reactDomFactory(panel, data);
  return reactDom;
};

export default getReactDom;