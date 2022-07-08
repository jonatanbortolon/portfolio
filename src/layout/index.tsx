import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Editor from "../components/editor";
import Explorer from "../components/explorer";
import SideBar from "../components/sideBar";
import TopBar from "../components/topBar";
import useFilesStore from "../stores/filesStore";
import parseUrlToFile from "../utils/parseUrlToFile";
import { Container, ProjectArea, ResizeWrapper } from "./styles";
import { Helmet } from "react-helmet-async";

function Layout() {
  const location = useLocation();

  const path = location.pathname.split("/")[1];

  const files = useFilesStore((state) => state.files);
  const setSelectedFile = useFilesStore((state) => state.setSelectedFile);

  useLayoutEffect(() => {
    const fileIndex = parseUrlToFile(window.location.pathname, files, "home");

    setSelectedFile(fileIndex);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>
          Jonatan Bortolon -{" "}
          {path === "" ? "Home" : path.charAt(0).toUpperCase() + path.slice(1)}
        </title>
      </Helmet>
      <Container>
        <TopBar />
        <ProjectArea>
          <SideBar />
          <ResizeWrapper>
            <Explorer />
            <Editor />
          </ResizeWrapper>
        </ProjectArea>
      </Container>
    </>
  );
}

export default Layout;
