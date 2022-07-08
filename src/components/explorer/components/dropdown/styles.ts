import styled from "styled-components";

export const Container = styled.div.attrs<
  { open: boolean; fullOpen: boolean },
  { open: boolean; fullOpen: boolean }
>((props) => ({
  open: props.open,
  fullOpen: props.fullOpen,
}))`
  width: 100%;
  ${(props) => props.fullOpen && "flex: 1;"}
  height: ${(props) => (props.fullOpen ? "0" : "fit-content")};
  max-height: ${(props) => (props.open ? "100%" : "25px")};
  transition-property: max-height;
  transition-timing-function: ease-in-out;
  transition-duration: 200ms;
  transition-delay: 0ms;
  overflow: hidden;
`;

export const Header = styled.div.attrs<
  { open: boolean; first: boolean; borderWidth: number },
  { open: boolean; first: boolean; borderWidth: number }
>((props) => ({
  open: props.open,
  first: props.first,
  borderWidth: props.borderWidth,
}))`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  ${(props) =>
    !props.first && `border-top: ${props.borderWidth}px solid #333333;`}

  & > *:first-child {
    width: auto;
    height: 15px;
    margin-right: 2px;
  }
`;

export const Expand = styled.div.attrs<
  { open: boolean; fullOpen: boolean },
  { open: boolean; fullOpen: boolean }
>((props) => ({ open: props.open, fullOpen: props.fullOpen }))`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
