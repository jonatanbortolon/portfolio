import styled from "styled-components";

export const Container = styled.div`
  width: 48px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #333333;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Icon = styled.div.attrs<
  { selected: boolean },
  { selected: boolean }
>((props) => ({
  selected: props.selected || false,
}))`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 0;
  color: ${(props) => (props.selected ? "#fff" : "inherit")};
  cursor: pointer;
  border-left: ${(props) => (props.selected ? "2px solid #fff" : "none")};

  &:hover {
    color: #fff;
  }

  & > * {
    width: auto;
    height: 100%;
  }
`;
