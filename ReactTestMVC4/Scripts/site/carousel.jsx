
var CustomPrevArrow = React.createClass({
  render() {
    return (
            <a className="left carousel-control" role="button" onClick={this.props.onClick}>
            <span className="glyphicon glyphicon-chevron-left left-arrow" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
      </a>
    )
  }
});

var CustomNextArrow = React.createClass({
  render() {
    return (
        <a className="right carousel-control" role="button" onClick={this.props.onClick}>
            <span className="glyphicon glyphicon-chevron-right right-arrow" aria-hidden="true"></span>
            </a>
      
    )
  }
});


var Slides = React.createClass({
  render: function() {
    var settings = {
        speed:800,
        infinite: true,
        autoplay: true,
        autoplaySpeed:5000,
        prevArrow: CustomPrevArrow,
        nextArrow: CustomNextArrow
    }
    var imgNodes = this.props.data.map(function(img) {
      return (
        <div key={img.index} className="img-container">
            <img src={img.imageUrl} data-index={img.index} data-caption={img.caption}  />
            {img.caption ? <div className="caption">{img.caption}</div> : null}
        </div>
      );
    });
    return (
         <Slider {...settings}>
              {imgNodes}
        </Slider>
    );
  }
});




ReactDOM.render(
  <Slides data={data} />,
  document.getElementById('root')
);