import {
  Container,
  LeftSection,
  MiddleSection,
  Option,
  RightSection,
  WindowAction,
} from "./styles";
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeClose,
} from "react-icons/vsc";
import useFilesStore from "../../stores/filesStore";

function TopBar() {
  const files = useFilesStore((state) => state.files);
  const selectedFile = useFilesStore((state) => state.selectedFile);

  return (
    <Container>
      <LeftSection>
        <Option>
          <span>File</span>
        </Option>
        <Option>
          <span>Edit</span>
        </Option>
      </LeftSection>
      <MiddleSection>
        <span>
          {files[selectedFile].name + "." + files[selectedFile].extension} -
          portfolio
        </span>
      </MiddleSection>
      <RightSection>
        <WindowAction>
          <VscChromeMinimize />
        </WindowAction>
        <WindowAction>
          <VscChromeMaximize />
        </WindowAction>
        <WindowAction close>
          <VscChromeClose />
        </WindowAction>
      </RightSection>
    </Container>
  );
}

export default TopBar;
