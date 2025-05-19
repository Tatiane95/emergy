"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  HeaderContainer,
  TabsButton,
  Span,
  Logo,
  TabsDiv,
  Container,
} from "./styles";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { label: "Início", path: "/home" },
    { label: "Definição", path: "/definition" },
    { label: "Energia x Emergia", path: "/energy-vs-emergy" },
    { label: "Transformidade", path: "/transformity" },
    {
      label: "Aplicações na Sustentabilidade",
      path: "/application-in-sustainability",
    },
  ];

  const handleNavigation = (path) => {
    if (path) {
      router.push(path);
    } else {
      console.error("Caminho inválido:", path);
    }
  };

  return (
    <HeaderContainer>
      <Container>
        <Logo
          src={"/images/emergia2.png"}
          alt={"Logo"}
          height={115}
          width={115}
          priority
        />
        <TabsDiv>
          {tabs.map(({ label, path }) => (
            <TabsButton key={label} onClick={() => handleNavigation(path)}>
              <Span $active={pathname === path}>{label}</Span>
            </TabsButton>
          ))}
        </TabsDiv>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
