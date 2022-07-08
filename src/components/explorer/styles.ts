import { Resizable } from "re-resizable";
import { VscSymbolFile } from "react-icons/vsc";
import styled from "styled-components";

export const Container = styled(Resizable)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #252526;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Button = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0 2px;
  cursor: pointer;

  &:hover {
    background-color: #363737;
  }

  & > * {
    width: 100%;
    height: auto;
  }
`;

export const DropdownsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

export const CloseFileButton = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 2px;
  margin-top: 2px;
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

export const FileInput = styled.div.attrs<
  { padding: number; selected: boolean },
  { padding: number; selected: boolean }
>((props) => ({
  padding: props.padding || 10,
  selected: props.selected || false,
}))`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 3px ${(props) => props.padding}px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#37373d" : "inherit")};

  &:hover {
    ${(props) => !props.selected && "background-color: #2a2d2e;"}

    ${CloseFileButton} {
      opacity: 1;
    }
  }

  ${CloseFileButton} {
    ${(props) => props.selected && "opacity: 1;"}
  }

  & > span {
    margin-bottom: 2px;
  }
`;

export const FileIcon = styled(VscSymbolFile)`
  width: auto;
  height: 100%;
  color: #3e94da;
  margin-right: 5px;
`;
