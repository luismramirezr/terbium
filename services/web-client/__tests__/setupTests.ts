// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });

const localStorageMock = (() => {
  let store: { [key:string]: string } = {};
  return {
    getItem(key: string) {
      return store[key];
    },
    setItem(key: string, value: string) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(key: string) {
      delete store[key];
    },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Define document.domain
Object.defineProperty(document, 'domain', {
  value: 'http://terbium.test',
});

// Fail in tests on console calls
const failOnConsole = (functionName: string, fn: any) => {
  (console as any)[functionName] = (...args: any[]) => {
    fn.apply(console, args);
    const message = args[0];
    throw message instanceof Error ? message : new Error(message);
  };
};

/* eslint-disable */
failOnConsole('log', console.log);
failOnConsole('error', console.error);
/* eslint-ensable */

// Fail in tests unhandled promise rejection
process.on('unhandledRejection', reason => {
  throw new Error(`unhandledRejection: ${reason}`);
});
