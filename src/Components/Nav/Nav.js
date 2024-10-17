import React from "react";
import navStyles from "./Nav.module.scss";
import { Link } from "react-scroll";
import menuImg from "Images/menu.png";
import emailIcon from "Images/email.png";
import githubIcon from "Images/github.png";
import linkedinIcon from "Images/linkedin.png";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      fixed: {
        top: "0px",
        position: "fixed",
        width: "100%",
        zIndex: 999,
      },
      showMenu: {
        height: "0px",
      },
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  onClick() {
    if (this.state.showMenu.height === "0px") {
      this.setState({ showMenu: { height: "210px" } });
    } else {
      this.setState({ showMenu: { height: "0px" } });
    }
  }

  render() {
    const { width } = this.state;
    return (
      <nav
        className={width < 600 ? navStyles.smallMenu : navStyles.nav}
        style={this.props.fixed ? this.state.fixed : null}
      >
        {width < 600 ? (
          <nav style={{ width: "100%" }} id="navbar">
            <div className={navStyles.wrapper}>
              <img
                className={navStyles.menuImg}
                src={menuImg}
                alt="Menu icon"
                onClick={this.onClick}
              />
            </div>

            <div className={navStyles.hiddenMenu} style={this.state.showMenu}>
              <ul>
                <li
                  className={navStyles.hiddenItem}
                  style={{ paddingTop: "25px" }}
                >
                  {" "}
                  <Link
                    activeClass={navStyles.active}
                    to="homeSection"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={this.onClick}
                  >
                    Home
                  </Link>{" "}
                </li>
                <li className={navStyles.hiddenItem}>
                  {" "}
                  <Link
                    activeClass={navStyles.active}
                    to="portfolioSection"
                    spy={true}
                    smooth={true}
                    offset={this.props.fixed ? 0 : -180}
                    duration={500}
                    onClick={this.onClick}
                  >
                    Portfolio
                  </Link>{" "}
                </li>
                <li className={navStyles.hiddenItem}>
                  {" "}
                  <Link
                    activeClass={navStyles.active}
                    to="aboutSection"
                    spy={true}
                    smooth={true}
                    offset={this.props.fixed ? 0 : -180}
                    duration={500}
                    onClick={this.onClick}
                  >
                    About
                  </Link>{" "}
                </li>
                <li className={navStyles.hiddenItem}>
                  {" "}
                  <Link
                    activeClass={navStyles.active}
                    to="contactSection"
                    spy={true}
                    smooth={true}
                    offset={this.props.fixed ? 0 : -180}
                    duration={500}
                    onClick={this.onClick}
                  >
                    Contact
                  </Link>{" "}
                </li>
              </ul>
            </div>
          </nav>
        ) : (
          <nav className={navStyles.navbar} id="navbar">
            <ul className={navStyles.navItems}>
              <li className={navStyles.navItem}>
                {" "}
                <Link
                  activeClass={navStyles.active}
                  to="homeSection"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Home
                </Link>{" "}
              </li>
              <li className={navStyles.navItem}>
                {" "}
                <Link
                  activeClass={navStyles.active}
                  to="portfolioSection"
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
                >
                  Portfolio
                </Link>{" "}
              </li>
              <li className={navStyles.navItem}>
                {" "}
                <Link
                  activeClass={navStyles.active}
                  to="aboutSection"
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
                >
                  About
                </Link>{" "}
              </li>
              <li className={navStyles.navItem}>
                {" "}
                <Link
                  activeClass={navStyles.active}
                  to="contactSection"
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
                >
                  Contact
                </Link>{" "}
              </li>
              <div style={{ float: "right" }}>
                <li className={navStyles.social}>
                  <a href="https://www.linkedin.com/in/harry-parkinson-418515126/">
                    <span>
                      <img src={linkedinIcon} alt="Link to my linked in" />
                    </span>
                  </a>
                </li>
                <li className={navStyles.social}>
                  <a href="https://github.com/hazza203">
                    <span>
                      <img src={githubIcon} alt="Link to my github" />
                    </span>
                  </a>
                </li>
                <li className={navStyles.social}>
                  <a href="mailto:harry.m.parkinson@gmail.com">
                    <span>
                      <img src={emailIcon} alt="Link to my email" />
                    </span>
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        )}
      </nav>
    );
  }
}

export default Nav;
