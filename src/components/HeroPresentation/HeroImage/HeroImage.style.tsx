import styled from "styled-components";

const Square = styled.div<{
	$color: string;
	$size: number;
	$top: number;
	$left: number;
	$zIndex: number;
}>`
  position: absolute;
  border-radius: 15px;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  background-color: ${(props) => props.$color};
  box-shadow: inset 0 0 15px rgba(255, 255, 255, 0.6);
  z-index: ${(props) => props.$zIndex};
  top: ${(props) => props.$top}px;
  left: ${(props) => props.$left}px;
`;

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 400px;  
  border-radius: 20px;
  overflow: hidden;
`;

const PngOverlay = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  min-width: 250px;
  max-width: 350px;
  height: auto;
  pointer-events: none;
`;

export { Container, PngOverlay, Square };
