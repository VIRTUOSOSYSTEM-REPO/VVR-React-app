import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "../Img/bannerNew.jpg";
import Img1 from "../Img/Banner12.jpg";
import Img2 from "../Img/Banner1.jpg";



export const Header = () => {
	const CarouselDiv = styled(Carousel)`
	`;
	const CarouselItemDiv = styled(Carousel.Item)`

	`;
  
	return (
		<div className="index">
		<CarouselDiv id="top" interval="2000" indicators="false">
				<CarouselItemDiv>
				<img
					className="d-block w-100"
					src={Img}
					alt="Second slide"
          fluid="true"
				/>
				</CarouselItemDiv>
        <CarouselItemDiv>
				<img
					className="d-block w-100"
					src={Img1}
					alt="Second slide"
          fluid="true"
				/>
				</CarouselItemDiv>
        <CarouselItemDiv>
				<img
					className="d-block w-100"
					src={Img2}
					alt="Second slide"
          fluid="true"
				/>
				</CarouselItemDiv>
		</CarouselDiv>
		</div>
	);
};

export default Header;
