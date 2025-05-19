"use client";
import {
  Container,
  Paragraph,
  H1,
  DivFormulae,
  Span,
  DivisionDiv,
  DivLine,
  Table,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
  Div,
  Body,
  ScrollWrapper,
} from "./styles";

const Transformity = () => {
  return (
    <ScrollWrapper>
      <Container>
        <H1>Tudo o que você precisa saber sobre Emergia</H1>
        <br />
        <Body>
          <Paragraph>
            A transformidade é um dos pilares conceituais da análise emergética,
            formulada dentro da teoria dos sistemas ecológicos desenvolvida por
            Howard T. Odum. Trata-se de uma métrica que expressa a quantidade
            total de emergia solar equivalente (seJ) necessária para gerar uma
            única unidade de saída — seja ela energia útil, massa, valor
            monetário ou outro produto final. Em termos simples, a
            transformidade quantifica o investimento energético acumulado ao
            longo de todas as etapas de transformação envolvidas em um processo
            natural ou tecnológico.
            <br />
            Sua formulação matemática é direta, mas poderosa em termos
            analíticos:
            <br />
          </Paragraph>
          <DivFormulae>
            <Span>Transformidade = </Span>
            <DivisionDiv>
              <Span>Emergia total (seJ)</Span>
              <DivLine />
              <Span>Unidade de saúda (J, g, $, etc)</Span>
            </DivisionDiv>
          </DivFormulae>
          <br />
          <br />
          <Paragraph>
            A unidade mais comum de medida é seJ/J, especialmente quando se
            tratam de fluxos energéticos. No entanto, pode ser expressa como
            seJ/g (para fluxos de massa), seJ/$ (para fluxos monetários) ou
            outras variações, dependendo da natureza do sistema em estudo. Essa
            versatilidade torna a transformidade uma ferramenta valiosa para
            comparar fluxos heterogêneos em uma base energética comum.
            <br />
            Conceitualmente, a transformidade permite entender não apenas quanto
            de energia foi consumido, mas como essa energia foi mobilizada e
            transformada ao longo do tempo, revelando a qualidade energética e a
            hierarquia dos sistemas. Um valor elevado de transformidade indica
            que uma quantidade significativa de energia solar (direta ou
            indiretamente incorporada) foi necessária para produzir determinada
            unidade final. Isso pode refletir uma maior complexidade ecológica,
            sofisticação técnica, processamento informacional ou tempo de
            formação natural. Por outro lado, implica também, em geral, uma
            menor eficiência termodinâmica direta, já que mais energia foi
            consumida ao longo da cadeia de conversão.
            <br />
            Contudo, ao contrário da eficiência energética tradicional — que
            valoriza a minimização do uso energético —, a transformidade
            reconhece o valor organizacional e funcional de processos que
            demandam mais energia acumulada. Um sistema com alta transformidade,
            como redes elétricas ou informações complexas, pode desempenhar
            papel estratégico dentro de um ecossistema ou infraestrutura, ainda
            que energeticamente mais custoso.
            <br />
            Essa abordagem amplia o entendimento de eficiência, integrando
            fatores ecológicos, técnicos, sociais e temporais, e tornando
            possível a comparação entre sistemas naturais e artificiais sob um
            mesmo critério: a energia solar equivalente necessária para
            originá-los. Por isso, o conceito de transformidade é amplamente
            aplicado em análises de sustentabilidade energética, avaliações de
            EROI (Energy Return on Investment), planejamento ambiental e
            comparações entre fontes de energia renováveis e não renováveis.
            <br />
            <br />A seguir, alguns exemplos ilustrativos de transformidades
            médias estimadas, conforme dados apresentados por Odum (1996), Brown
            & Ulgiati (2004) e Bastianoni et al. (2001):
          </Paragraph>
          <Div>
            <Table>
              <Thead>
                <Tr>
                  <Th>Produto / Sistema</Th>
                  <Th>Transformidade Aproximada (seJ/J)</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Energia solar direta</Td>
                  <Td>1 seJ/J</Td>
                </Tr>
                <Tr>
                  <Td>Biomassa florestal</Td>
                  <Td>4.400 seJ/J</Td>
                </Tr>
                <Tr>
                  <Td>Eletricidade (rede nacional)</Td>
                  <Td>150.000–300.000 seJ/J</Td>
                </Tr>
                <Tr>
                  <Td>Informações complexas</Td>
                  <Td> &gt; 1.000.000 seJ/J</Td>
                </Tr>
              </Tbody>
            </Table>
          </Div>
        </Body>
      </Container>
    </ScrollWrapper>
  );
};

export default Transformity;
