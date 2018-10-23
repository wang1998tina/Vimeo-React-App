import React, { Component } from 'react';
import MovieCard from './MovieCard.js'

class Carousel extends Component {

	constructor(props) {
   		super(props);

   		this.state = {
   			currentMovieSlide : 1,
   			totalSlides : 3,
   			width: 1280
   		};

   		this.handlePrev = this.handlePrev.bind(this);
   		this.handleNext = this.handleNext.bind(this);
   		this.getVal = this.getVal.bind(this);
   		this.updateDimensions = this.updateDimensions.bind(this);

	}

	componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions(){
    	let w = window.innerWidth;
    	this.setState({ width: w });
    }

	handlePrev(){
		const endOfList = this.state.currentMovieSlide === 0;
		let index = this.state.currentMovieSlide;
		index = endOfList ? (this.state.totalSlides - 1) : (index - 1);
		this.setState({
			currentMovieSlide : index
		});
		console.log(this.state.currentMovieSlide);
	}

	handleNext(){
		const endOfList = this.state.currentMovieSlide === (this.state.totalSlides - 1);
		let index = this.state.currentMovieSlide;
		index = endOfList ? 0 : index + 1;
		this.setState({
			currentMovieSlide : index
		});
		console.log(this.state.currentMovieSlide);
	}

	getVal(index) {
		const arr = [{
  			title: 'King Kong',
  			url: require("./king_kong.jpg"),
  			text: 'Voluptas a vel eius voluptatibus natus eius eum dolore. Est nisi impedit dolore unde in unde. Ab repellendus occaecati nobis.'
		},{
			title: 'Crossroads',
			url: require("./crossroads.jpg"),
  			text: 'Voluptas a vel eius voluptatibus natus eius eum dolore. Est nisi impedit dolore unde in unde. Ab repellendus occaecati nobis.'
		},{
			title: 'Silence of the Lambs',
			url: require("./silence_lambs.jpg"),
  			text: 'Voluptas a vel eius voluptatibus natus eius eum dolore. Est nisi impedit dolore unde in unde. Ab repellendus occaecati nobis.'
		}];

		return arr[index ? index-1 : this.state.currentMovieSlide];
	}

  	render() {
  		const currentMovie = this.getVal();

  		/*To get all values for small screens*/
  		let endOfList = this.state.currentMovieSlide === (this.state.totalSlides - 1);
		let index = this.state.currentMovieSlide;
		index = endOfList ? 0 : index + 1;
  		const secondMovie = this.getVal(index+1);

		endOfList = this.state.currentMovieSlide === 0;
		index = this.state.currentMovieSlide;
		index = endOfList ? (this.state.totalSlides - 1) : (index - 1);
		const thirdMovie = this.getVal(index+1);


  		/*Movie passed as props*/
  		if(this.state.width > 960){
  			return(
  			    <div className="carousel">
    			<div className="arrow">
	    			<Arrow onClick={ this.handlePrev } direction="left"/>
	    		</div>
	    		<MovieCard {...currentMovie}/>
	    		<div className="arrow">
	    			<Arrow onClick={ this.handleNext } direction="right"/>
	    		</div>
	    	</div>
	    	);
  		} else{
	    	return (
	    		/*List of all movies*/
	    		<div>
		    		<MovieCard {...currentMovie}/>
		    		<MovieCard {...secondMovie}/>
		    		<MovieCard {...thirdMovie}/>
		    	</div>
    	);
    	}
    }
}

export default Carousel;

const Arrow = ({ onClick, direction }) => (
	<div 
		className={ `${direction}-arrow` }
		onClick={ onClick }>
	</div>
);