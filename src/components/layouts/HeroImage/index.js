import React, { Component } from "react";
import hero1 from "../../../images/compressed/adult-coder-coding-1181676-min.jpg";
import hero2 from "../../../images/compressed/books-coding-couch-1181298-min.jpg";
import hero3 from "../../../images/compressed/cellphone-codes-coding-92904-min.jpg";
import hero4 from "../../../images/compressed/chairs-developer-development-1181376-min.jpg";
import hero5 from "../../../images/compressed/codes-coding-hacker-97077-min.jpg";
// import SearchBar from "../../SearchBar";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getSearchField } from "../../../actions/course/courseActions";
import SearchBox from "../../SearchBox";

import { Container } from "reactstrap";
class HeroImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroImage: hero1,
      searchBarSize: "lg",
      searchPlaceholder: "Search for your favorite tech courses"
    };
  }

  componentDidMount() {
    this.handleImageChange();
  }

  handleImageChange = () => {
    const imageData = [hero1, hero2, hero3, hero4, hero5];
    const hrs = 1 / 60;
    const secPerhr = 3600;
    const millisec = 1000;
    const hoursToMilliseconds = hrs * secPerhr * millisec;
    let currentImage = 0;
    setInterval(() => {
      console.log(currentImage);
      currentImage = (currentImage + 1) % imageData.length;
      const heroImage = imageData[currentImage];
      this.setState({
        heroImage
      });
    }, hoursToMilliseconds);
  };

  handleSearchOnKeyDown = e => {
    [e.target.name] = e.target.value;
    if (e.key === "Enter" || e.keyCode === 13) {
      this.handleSearchOnSubmit();
    }
  };

  handleSearchOnSubmit = () => {
    const queryPath = `/courses/search/${this.props.searchField}`;
    this.props.searchField.length === 0
      ? this.props.history.push("/")
      : this.props.history.push(queryPath);
  };

  render() {
    const { handleSearchChange } = this.props;
    return (
      <div className="heroImage">
        <img src={this.state.heroImage} alt="hero" />
        <div className="heroImage__overlayBg" />
        <Container className="heroImage__overlayTitle  d-flex flex-column justify-content-center">
          <h1>Ready. Set. Rise</h1>
          <h5>
            <span>Elevate yourself to the next level.</span>
            <span> Anywhere.</span>
            <span> Anytime.</span>
          </h5>
          <div className="heroImage__overlayTitle__searchBar">
            <SearchBox
              size={this.state.searchBarSize}
              placeholder={this.state.searchPlaceholder}
              handleChange={handleSearchChange}
              handleKeyDown={this.handleSearchOnKeyDown}
              handleSubmitButton={this.handleSearchOnSubmit}
            />
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchChange: e => dispatch(getSearchField(e.target.value))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeroImage)
);
