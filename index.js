import './plugins/css/hiprint.css';
import './plugins/css/print-lock.css';
import hiprint from './plugins/js/hiprint.bundle';
import getReactDom from './lib/index';

hiprint.getReactDom = getReactDom;

export default hiprint;

