# React Roadway
Minimal Routing for React

## Installation
```sh
npm install react-roadway --save
```

## Examples

```..jsx

const Home = Route((props) => (
  <div>
    <h1>Home</h1>
  </div>
));

const About = Route((props) => (
  <div>
    <h1>About</h1>
  </div>
));

const App = Router(() => (
  <div>
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
    <Home match="/" />
    <About match="/about" />
  </div>
));

render(<App />);
```

## License
MIT Copyright (c) 2017 [Opentrace](http://opentrace.ca)
