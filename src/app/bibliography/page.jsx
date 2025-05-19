"use client";
import { Container, Paragraph, H1, Body, Link } from "./styles";

const Bibliography = () => {
  return (
    <Container>
      <H1>Bibliografia</H1>
      <Body>
        <Link
          href="https://repositorio.unip.br/engenharia-dissertacoes-teses/avaliacao-energetico-ambiental-de-data-centers-computacao-tradicional-versus-computacao-nas-nuvens/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Avaliação energético-ambiental de data centers: computação tradicional
          versus computação nas nuvens - Repositório Digital UNIP
        </Link>
        <Paragraph>
          <br />
          Odum, H.T. (1996).{" "}
          <i>
            Environmental Accounting: Emergy and Environmental Policy Making
          </i>
          . John Wiley and Sons.
          <br />
          <br />
        </Paragraph>
        <Link
          href="https://unicamp.br/unicamp/unicamp_hoje/ju/junho2005/ju293pag09.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://unicamp.br/unicamp/unicamp_hoje/ju/junho2005/ju293pag09.html
        </Link>
        <br />
        <br />
        <Link
          href="https://www.emergysociety.com/wp-content/uploads/BrownMT-Ulgiati.2004.Emergy-analysis-and-environmental-accounting.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.emergysociety.com/wp-content/uploads/BrownMT-Ulgiati.2004.Emergy-analysis-and-environmental-accounting.pdf
        </Link>
        <Paragraph>
          <br />
          Brown, M.T., & Ulgiati, S. (2004). Emergy analysis and environmental
          accounting. <i>Encyclopedia of Energy</i>, 2, 329–354.
          <br />
          <br />
          Bastianoni, S., Marchettini, N., & Tiezzi, E. (2001). A thermodynamic
          approach to sustainability: emergy accounting.{" "}
          <i>Environmental Monitoring and Assessment</i>, 72(2), 157–176.
        </Paragraph>
      </Body>
    </Container>
  );
};

export default Bibliography;
