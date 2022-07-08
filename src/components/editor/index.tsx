import Scrollbars from "react-custom-scrollbars-2";
import { VscClose } from "react-icons/vsc";
import useFilesStore from "../../stores/filesStore";
import { useNavigate } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import {
  CloseFileButton,
  Container,
  Cursor,
  EditorWrapper,
  FileIcon,
  Line,
  Tab,
  TabsView,
  TextArea,
} from "./styles";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Editor() {
  const navigate = useNavigate();

  const files = useFilesStore((state) => state.files);
  const selectedFile = useFilesStore((state) => state.selectedFile);

  const { width: windowWidth } = useWindowDimensions();

  function renderView({ style, ...props }: any) {
    return <TabsView {...props} style={{ ...style }} />;
  }

  function renderThumb({ style, ...props }: any) {
    const thumbStyle = {
      height: "3px",
      top: "calc(100% - 2px)",
      backgroundColor: "#4f4f4f",
      pointerEvents: "all",
    };

    return <div {...props} style={{ ...style, ...thumbStyle }} />;
  }

  function handleFileClick(fileName: string) {
    if (fileName === "home") return navigate("/");

    navigate(`/${fileName}`);
  }

  return (
    <Container>
      <Scrollbars
        style={{ height: "40px" }}
        autoHide={windowWidth >= 500}
        renderView={renderView}
        renderThumbHorizontal={renderThumb}
      >
        {files.map((file, index) => (
          <Tab
            key={index}
            selected={index === selectedFile}
            onClick={() => handleFileClick(file.name)}
          >
            <FileIcon />
            <span>{file.name + "." + file.extension}</span>
            <CloseFileButton>
              <VscClose />
            </CloseFileButton>
          </Tab>
        ))}
      </Scrollbars>
      <EditorWrapper>
        <TextArea>
          {files[selectedFile].content.map((line, index) => (
            <Line key={index}>{ReactHtmlParser(line)}</Line>
          ))}
          <Line>
            <Cursor>|</Cursor>
          </Line>
        </TextArea>
      </EditorWrapper>
    </Container>
  );
}

export default Editor;
