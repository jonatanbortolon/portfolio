import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  background-color: #323233;
`;

export const LeftSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const MiddleSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > * {
    margin-left: auto;
    margin-right: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const RightSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Option = styled.div`
  width: fit-content;
  height: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #474748;
  }
`;

export const WindowAction = styled.div.attrs<
  { close: boolean },
  { close: boolean }
>((props) => ({
  close: props.close || false,
}))`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.close ? "#d61425" : "#474748")};
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
