"use client";
import {
  Container,
  Paragraph,
  H1,
  Table,
  Tr,
  Th,
  Thead,
  Tbody,
  Div,
  ScrollWrapper,
  Td,
  Body,
} from "./styles";

const EnergyVsEmergy = () => {
  return (
    <ScrollWrapper>
      <Container>
        <H1>Energia X Emergia: Qual a Diferença que Você Precisa Saber?</H1>
        <Body>
          <Paragraph>
            A energia é tradicionalmente definida como a capacidade de realizar
            trabalho, sendo medida em unidades como os joules (J). Essa
            propriedade fundamental da matéria pode se manifestar em diversas
            formas — térmica, cinética, elétrica, química, entre outras — e,
            conforme estabelece a Primeira Lei da Termodinâmica, a energia é
            conservada em sistemas fechados, isto é, não pode ser criada nem
            destruída, apenas transformada.
            <br />
            Contudo, embora essencial para a análise física de processos, a
            energia convencional não distingue a origem, a qualidade ou o valor
            ambiental dos recursos e sistemas que a produzem. Ela trata todas as
            formas de energia de modo equivalente, desconsiderando os contextos
            ecológicos e sociais em que estão inseridas. Isso limita sua
            utilidade quando se busca compreender a sustentabilidade ou o
            impacto ecológico de processos produtivos.
            <br />
            É nesse ponto que a emergia se diferencia: ao contrário da energia,
            que capta apenas um estado presente e mensurável, a emergia
            incorpora o histórico energético acumulado ao longo do tempo — em
            processos naturais (como a formação de solos ou florestas) ou
            tecnológicos (como a fabricação de um equipamento). Isso inclui
            todas as contribuições de energia necessárias, direta ou
            indiretamente, para que determinado recurso ou serviço exista.
            <br />
            Enquanto a energia está ancorada na física clássica e é usada para
            medir o desempenho imediato de um sistema, a emergia tem base na
            ecologia de sistemas e oferece uma leitura mais ampla, ao considerar
            também o valor ecológico e a ecoeficiência dos processos. Essa
            abordagem permite avaliar não apenas a eficiência termodinâmica, mas
            também a contribuição relativa de cada elemento dentro de um sistema
            maior, fornecendo subsídios para decisões mais sustentáveis.
            <br />
            <br />
            Essa distinção entre os dois conceitos pode ser resumida na tabela a
            seguir:
          </Paragraph>
          <Div>
            <Table>
              <Thead>
                <Tr>
                  <Th>Critério</Th>
                  <Th>Energia</Th>
                  <Th>Emergia</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Unidade</Td>
                  <Td>Joules(J)</Td>
                  <Td>seJ(joules equivalentes solares)</Td>
                </Tr>
                <Tr>
                  <Td>Foco</Td>
                  <Td>Capacidade de Realizar Trabalho</Td>
                  <Td>Energia Total Acumulada</Td>
                </Tr>
                <Tr>
                  <Td>Base Teórica</Td>
                  <Td>Física Clássica</Td>
                  <Td>Ecologia de Sistemas</Td>
                </Tr>
                <Tr>
                  <Td>Considera Histórico?</Td>
                  <Td>Não</Td>
                  <Td>Sim</Td>
                </Tr>
                <Tr>
                  <Td>Valor Ecológico</Td>
                  <Td>Não Representa</Td>
                  <Td>Representa</Td>
                </Tr>
              </Tbody>
            </Table>
          </Div>
        </Body>
      </Container>
    </ScrollWrapper>
  );
};

export default EnergyVsEmergy;
