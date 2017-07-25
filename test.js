import test from 'ava';
import React from 'react';
import { create } from 'react-test-renderer';

import {
  createRouter,
  createRoute,
  createLink,
  Router,
  Link
} from './src';
 
test('exports higher-order components', t => {
  t.is(typeof createRouter, 'function')
  t.is(typeof createRoute, 'function')
  t.is(typeof createLink, 'function')
});

test('exports components', t => {
  const router = create(<Router />).toJSON();
  const link = create(<Link />).toJSON();
  t.snapshot(router);
  t.snapshot(link);
})

test('creates a Router component', t => {
  const R = createRouter('div');
  const router = create(<R />).toJSON();
  t.snapshot(router);
});

test('creates a Route component', t => {
  const R = createRoute('div');
  const route = create(<R />).toJSON();
  t.snapshot(route);
});

test('creates a Link component', t => {
  const L = createLink('a');
  const link = create(<L />).toJSON();
  t.snapshot(link);
});