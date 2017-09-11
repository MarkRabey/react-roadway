/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import pkg from '../package.json';
import { Flex, Box } from 're-flex';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live';
import styles from './main.scss';

import { createRouter, createRoute, Route, Link } from 'react-roadway';

const Demo = () => (
  <div className={ styles.demo }>
    <header className={ styles.demo__header }>
      <h1>React Roadway</h1>
      <p>
        { pkg.description }
      </p>
    </header>

    <section className={ styles['demo__section'] }>
      <header className={ styles['demo__section-header'] }>
        <h2>Installation</h2>
      </header>
      <code className="prism-code">
        npm install react-roadway
      </code>
    </section>

    <section className={ styles['demo__section'] }>
      <header className={ styles['demo__section-header'] }>
        <h2>
          Example
        </h2>
      </header>
      <LiveProvider noInline scope={{ createRouter, createRoute, Route, Link }} code={
`const Home = () => (
  <div>Home</div>
);

const About = () => (
  <div>About</div>
);

const HomeRoute = createRoute(Home);

const App = () => (
  <div>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
    </ul>
    <HomeRoute match="/" />
    <Route match="/about">
      <About />
    </Route>
  </div>
);

const Router = createRouter(App);

render(<Router options={{ basename: '/' }} />);
`}>
        <Flex gutter={ 0 }>
          <Box width={ [1, [768, 1/2]] }>
            <LiveEditor className={ styles['prism-code'] } />
          </Box>

          <Box width={ [1, [768, 1/2]] } className={ styles['react-live-preview'] }>
            <LivePreview />
          </Box>

          <Box width="1">
            <LiveError className={ styles['react-live-error'] } />
          </Box>
        </Flex>
      </LiveProvider>
    </section>

    <section className={ styles['demo__section'] }>
      <header className={ styles['demo__section-header'] }>
        <h2>Higher-order Components</h2>
      </header>
      <div>
        Coming soon.
      </div>
    </section>

    <section className={ styles['demo__section'] }>
      <header className={ styles['demo__section-header'] }>
        <h2>Options</h2>
      </header>
      <div>
        Coming soon.
      </div>
    </section>

    <footer>
      &copy; { (new Date).getFullYear() } <a href="http://opentrace.ca" target="_blank">Opentrace</a>.
    </footer>
  </div>
);

render(<Demo />, document.getElementById('content'));
