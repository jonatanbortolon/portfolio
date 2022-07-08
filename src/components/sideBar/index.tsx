import {
  VscExtensions,
  VscDebugAlt,
  VscFiles,
  VscRemoteExplorer,
  VscSearch,
  VscSourceControl,
} from "react-icons/vsc";
import { Container, Icon } from "./styles";

function SideBar() {
  return (
    <Container>
      <Icon selected>
        <VscFiles />
      </Icon>
      <Icon>
        <VscSearch />
      </Icon>
      <Icon>
        <VscSourceControl />
      </Icon>
      <Icon>
        <VscDebugAlt />
      </Icon>
      <Icon>
        <VscExtensions />
      </Icon>
      <Icon>
        <VscRemoteExplorer />
      </Icon>
    </Container>
  );
}

export default SideBar;
