import expect from 'expect'
//import jsdom from 'mocha-jsdom';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const { window } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
const { document } = window.document;


import angular from 'angular'
//import mainSection from '../../src/components/main-section/main-section.component.js';

describe('bullsfirst components', () => {
    // beforeEach(angular.module('bullsfirstApp'));
    jsdom()
})
