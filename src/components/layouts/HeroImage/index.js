import React, { Component } from "react";
import hero1 from "../../../images/compressed/adult-coder-coding-1181676-min.jpg";
import hero2 from "../../../images/compressed/books-coding-couch-1181298-min.jpg";
import hero3 from "../../../images/compressed/cellphone-codes-coding-92904-min.jpg";
import hero4 from "../../../images/compressed/chairs-developer-development-1181376-min.jpg";
import hero5 from "../../../images/compressed/codes-coding-hacker-97077-min.jpg";
import SearchBar from "../../SearchBar";

import { Container } from "reactstrap";
export default class HeroImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroImage: hero1
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

  render() {
    return (
      <div className="heroImage">
        <img src={this.state.heroImage} alt="hero" />
        <div className="heroImage__overlayBg" />
        <Container  className="heroImage__overlayTitle  d-flex flex-column justify-content-center ">
          <h1>Ready. Set. Rise</h1>
          <div className="heroImage__overlayTitle__searchBar">
            <SearchBar />
          </div>
        </Container>
      </div>
    );
  }
}
