import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
    position: relative;
    width: 100%; 
`;
const CarouselContainer = styled.div`
    display: flex;
    overflow-x: scroll;
    scrollbar-width: thin;
    scrollbar-color: rgba(0,0,0,.1) transparent;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,.1);
        &:hover {
        background-color: rgba(0,0,0,.2);
        }
    }
`;
const SlideItem = styled.div`
    flex: 0 0 auto;
    min-width: 260px; 
    margin-right: -312px; 
    box-sizing: border-box;
    border-color: green;
    background-color: #f8f9fa;
    transition: transform .3s ease-in-out;
`;

const ButtonGroup = styled.div`
    position: absolute;
    top: 38%;
    transform: translateY(-50%);
    right: 3rem; 
    display: flex;
    
`;
const Button = styled.button`
    background-color: #3c4043;
    border: none;
    color: #000;
    cursor: pointer;
    font-size: 24px;
    z-index: 1000;
    padding:10px 10px 10px 10px 
`;

const NextButton = styled(Button)``;
const PrevButton = styled(Button)``;

const HorizontalCarousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNextClick = () => {
        setActiveIndex((prevIndex) => prevIndex < children?.length - 1 ? prevIndex + 1 : 0);
    };

    const handlePrevClick = () => {
        setActiveIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : children?.length - 1);
    };

    return (
        <CarouselWrapper>
            <CarouselContainer>
                {React.Children.map(children, (child, index) => (
                    <SlideItem
                        key={index}
                        style={{
                            transform: `translateX(${-(activeIndex - index) * 100}%)`,
                        }}
                    >
                        {child}
                    </SlideItem>
                ))}
            </CarouselContainer>
            <ButtonGroup>
                <PrevButton
                    onClick={handlePrevClick}
                >
                    <IoIosArrowBack />
                </PrevButton>
                <NextButton
                    onClick={handleNextClick}
                >
                    <IoIosArrowForward />
                </NextButton>
            </ButtonGroup>
        </CarouselWrapper>
    );
};

export default HorizontalCarousel;