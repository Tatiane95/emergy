"use client";

import { usePathname, useRouter } from "next/navigation";
import { FooterContainer, Span, TabButton, SpanButton } from "./styles";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path) => {
    if (path) {
      router.push(path);
    } else {
      console.error("Caminho inválido:", path);
    }
  };

  return (
    <FooterContainer>
      <Span>© 2025 - Site Educacional sobre Emergia | </Span>
      <TabButton onClick={() => handleNavigation("/bibliography")}>
        <SpanButton $active={pathname === "/bibliography"}>
          Bibliografia
        </SpanButton>
      </TabButton>
    </FooterContainer>
  );
};

export default Footer;
