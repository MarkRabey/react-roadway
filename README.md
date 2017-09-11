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

---

## Contributor Code of Conduct
Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

## License
MIT Copyright (c) 2017 [Opentrace](http://opentrace.ca)
