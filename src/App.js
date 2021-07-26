import "./styles/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blogposts/Blog";
import Navbar from "./components/Navbar";
import Post from "./Pages/Blogposts/Post";

// function from here
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Blog} path="/blog" />
        <Route component={Post} path="/:slug" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
