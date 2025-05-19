import Header from "../components/features/header";
import GlobalStyles, { Html, Body } from "./global-styles";
import StyledComponentsRegistry from "./registry";
import Footer from "../components/features/footer";

const RootLayout = ({ children }) => {
  return (
    <Html>
      <Body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </Body>
    </Html>
  );
};

export default RootLayout;
