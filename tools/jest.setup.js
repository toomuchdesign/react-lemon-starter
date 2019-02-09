/* eslint-disable */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// @TODO Find if this global stuff have performance issues and move it in single tests
// Load environemnt variable
require('dotenv').config();

// Mock global fetch method which normally is injected by webpack
global.fetch = require('cross-fetch');
