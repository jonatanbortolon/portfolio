import styled, { keyframes } from "styled-components";
import { VscSymbolFile } from "react-icons/vsc";

const cursorBlink = keyframes`
  0% {opacity: 0}
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TabsView = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  background-color: #252526;
  border-bottom: 1px solid #323233;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
    opacity: 0;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0);
    opacity: 0;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0);
    opacity: 0;
  }
`;

export const CloseFileButton = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 10px;
  opacity: 0;
  padding: 2px;

  &:hover {
    background-color: #424347;
  }

  & > *:first-child {
    width: 100%;
    height: auto;
    color: #fff;
  }
`;

export const Tab = styled.div.attrs<
  { selected: boolean },
  { selected: boolean }
>((props) => ({ selected: props.selected || false }))`
  width: fit-content;
  height: 100%;
  padding: 0px 5px 0px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.selected ? "#fff" : "inherit")};
  background-color: ${(props) => (props.selected ? "#1e1e1e" : "#2d2d2d")};
  cursor: pointer;

  &:hover {
    ${CloseFileButton} {
      opacity: 1;
    }
  }

  ${CloseFileButton} {
    ${(props) => props.selected && "opacity: 1;"}
  }
`;

export const EditorWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const TextArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: #1e1e1e;
  user-select: text;
  margin-right: 15px;

  //Text styles
  & a {
    color: #fff;
    text-decoration: underline;
  }

  & .upper {
    text-transform: uppercase;
  }
`;

export const Line = styled.span`
  position: relative;
  width: 100%;
  min-height: 1.1rem;
  display: block;
  padding-left: 70px;
  line-height: 1.1rem;
  white-space: pre-wrap;

  &::before {
    position: absolute;
    left: 35px;
    transform: translateX(-50%);
    color: #939494;
    font-size: 14px;
    counter-increment: gutter-counter;
    content: counter(gutter-counter);
  }
`;

export const FileIcon = styled(VscSymbolFile)`
  width: auto;
  height: 14px;
  color: #3e94da;
  margin-right: 5px;
`;

export const Cursor = styled.span`
  box-shadow: none;
  text-shadow: none;
  animation: ${cursorBlink} 700ms steps(2) infinite;
`;
