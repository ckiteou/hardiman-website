import React, {Component} from 'react';
import { imgUrls }  from  '../../images/home/index.js'
import '../../styles/home.scss';


export const ImageSlide = ({url}) => {
  const styles = {
    backgroundImage: `url(${url})`,
  };
  return (
    <div className="image_slide" style={styles}></div>
  );
}

class Carousel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };
    this.setSlide = this.setSlide.bind(this);
    this.changeSlides = this.changeSlides.bind(this);
  }

  componentDidMount() {
    setTimeout(this.changeSlides, 5000);
  }

  changeSlides() {
    if (Number(this.state.currentImageIndex) < imgUrls.length - 1) {
      this.setState({
        currentImageIndex: Number(this.state.currentImageIndex) + 1
      });
    } else if (Number(this.state.currentImageIndex) + 1 === imgUrls.length) {
      this.setState({
        currentImageIndex: 0
      });
    }
    setTimeout(this.changeSlides, 5000);
  }

  setSlide(event) {
    let id = event.target.id;
    this.setState((state) => {
      return {currentImageIndex: state.currentImageIndex = id}
    });
  }

  render () {
    return (
      <div className="carousel">
        <ImageSlide url={imgUrls[this.state.currentImageIndex]}/>
        <h1 className="place_holder">PLACEHOLDER IMAGE</h1>
        <div className="dot_container">
          {
            imgUrls.map((v, i) => (
              <div
                key={i}
                className={Number(this.state.currentImageIndex) === i ? "dot active" : "dot"}
                onClick={this.setSlide}
                id={i}>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Carousel;
