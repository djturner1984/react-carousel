
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


var afterChangeSlide = function (currentSlide) {
    setCaption(currentSlide);
} 

var beforeChangeSlide = function (currentSlide) {
    $( ".caption" ).remove();
}

var setCaption = function (slidePosition) {
    var caption = $('img[data-index="'+slidePosition+'"]').data('caption');
    if (caption)
    {
        $(".slick-slide.slick-active").append('<div class="caption">' + caption + '</div>');
    }
}


var Slides = React.createClass({
   componentDidMount: function() {
    setCaption(0);
  },
  render: function() {
    var settings = {
        speed:800,
        infinite: true,
        autoplay: true,
        autoplaySpeed:5000,
        prevArrow: CustomPrevArrow,
        nextArrow: CustomNextArrow,
        afterChange: afterChangeSlide,
        beforeChange: beforeChangeSlide
    }
    var imgNodes = this.props.data.map(function(img) {
      return (
        <div key={img.index}>
            <img src={img.imageUrl} data-index={img.index} data-caption={img.caption}  />
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