import { VscClose, VscEllipsis } from "react-icons/vsc";
import useFilesStore from "../../stores/filesStore";
import { useNavigate } from "react-router-dom";
import Dropdown from "./components/dropdown";
import {
  Button,
  CloseFileButton,
  Container,
  DropdownsWrapper,
  FileIcon,
  FileInput,
  Header,
} from "./styles";

function Explorer() {
  const navigate = useNavigate();

  const files = useFilesStore((state) => state.files);
  const selectedFile = useFilesStore((state) => state.selectedFile);

  function handleFileClick(fileName: string) {
    if (fileName === "home") return navigate("/");

    navigate(`/${fileName}`);
  }

  return (
    <Container
      defaultSize={{ height: "100%", width: "20%" }}
      enable={{
        right: true,
      }}
      minWidth={150}
      maxWidth="70%"
    >
      <Header>
        <span>EXPLORER</span>
        <Button>
          <VscEllipsis />
        </Button>
      </Header>
      <DropdownsWrapper>
        <Dropdown title="Open editors" first initialOpen>
          {files.map((file, index) => (
            <FileInput
              selected={selectedFile === index}
              padding={23}
              onClick={() => {
                handleFileClick(file.name);
              }}
              key={index}
            >
              <CloseFileButton>
                <VscClose />
              </CloseFileButton>
              <FileIcon /> <span>{file.name + "." + file.extension}</span>
            </FileInput>
          ))}
        </Dropdown>
        <Dropdown title="Portfolio" borderWidth={3} fullOpen initialOpen>
          {files.map((file, index) => (
            <FileInput
              selected={selectedFile === index}
              padding={33}
              onClick={() => {
                handleFileClick(file.name);
              }}
              key={index}
            >
              <FileIcon /> <span>{file.name + "." + file.extension}</span>
            </FileInput>
          ))}
        </Dropdown>
        <Dropdown title="Outline" canOpen={false}></Dropdown>
        <Dropdown title="Timeline" canOpen={false}></Dropdown>
      </DropdownsWrapper>
    </Container>
  );
}

export default Explorer;
