"use client";

import colors from "../../constants/colors";

import styled from "styled-components";

export const ScrollWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  scrollbar-width: thin;
  scrollbar-color: ${colors.twilightBlue} transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.iceMist};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const Container = styled.div`
  background-color: ${colors.iceMist};
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
`;

export const Body = styled.div`
  padding-right: 200px;
  padding-left: 200px;
`;

export const H1 = styled.h1`
  margin-top: 40px;
  color: ${colors.twilightBlue};
  font-size: 45px;
  text-align: center;
`;

export const Paragraph = styled.p`
  margin-top: 30px;
  margin-bottom: 60px;
  color: ${colors.midnightSlate};
  font-size: 20px;
  text-align: justify;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Th = styled.th`
  border: 1px solid ${colors.arcticMist};
  padding: 8px;
  background-color: ${colors.iceMist};
  color: ${colors.midnightSlate};
  text-align: center;
  vertical-align: middle;
`;

export const Td = styled.td`
  border: 1px solid ${colors.arcticMist};
  padding: 8px;
  color: ${colors.midnightSlate};
  text-align: center;
  vertical-align: middle;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: ${colors.iceMist};
  }
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Div = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

export const DivBody = styled.div``;
