import React from "react";
import Welcome from "./Components/Welcome/Welcome.js";
import About from "./Components/About/About.js";
import Portfolio from "./Components/Portfolio/Portfolio.js";
import Contact from "./Components/Contact/Contact.js";
import Nav from "./Components/Nav/Nav.js";
import Footer from "./Components/Footer/Footer.js";
import appStyles from "./App.module.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    window.removeEventListener("scroll", this.handleScroll);
  }

  updateWindowDimensions() {
    this.setState({ height: window.innerHeight });
  }

  handleScroll(event) {
    if (window.pageYOffset > this.state.height) {
      this.setState({ fixed: true });
    } else {
      this.setState({ fixed: false });
    }
  }

  render() {
    return (
      <div className={appStyles.app}>
        <Welcome id="homeSection" />
        <Nav fixed={this.state.fixed} />
        <Portfolio id="portfolioSection" fixed={this.state.fixed} />
        <About id="aboutSection" fixed={this.state.fixed} />
        <Contact id="contactSection" />
        <Footer />
      </div>
    );
  }
}

export default App;
