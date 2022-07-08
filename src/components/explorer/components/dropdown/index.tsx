import { useState } from "react";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";
import { Container, Expand, Header } from "./styles";

type DropdownProps = {
  title: string;
  first?: boolean;
  borderWidth?: number;
  fullOpen?: boolean;
  children?: React.ReactNode;
  canOpen?: boolean;
  initialOpen?: boolean;
};

function Dropdown({
  title,
  first = false,
  borderWidth = 2,
  fullOpen = false,
  children,
  canOpen = true,
  initialOpen = false,
}: DropdownProps) {
  const [open, setOpen] = useState(initialOpen);

  return (
    <Container open={open} fullOpen={fullOpen}>
      <Header
        open={open}
        first={first}
        borderWidth={borderWidth}
        onClick={() => {
          if (!canOpen) return;
          setOpen(!open);
        }}
      >
        {open ? <VscChevronDown /> : <VscChevronRight />}
        <span>{title}</span>
      </Header>
      <Expand open={open} fullOpen={fullOpen}>
        {children}
      </Expand>
    </Container>
  );
}

export default Dropdown;
