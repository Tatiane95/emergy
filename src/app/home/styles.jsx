"use client";

import colors from "../../constants/colors";

import styled from "styled-components";

export const Container = styled.div`
  background-color: ${colors.iceMist};
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  padding-right: 200px;
  padding-left: 200px;
`;

export const H1 = styled.h1`
  color: ${colors.twilightBlue};
  font-size: 40px;
  text-align: center;
`;

export const Paragraph = styled.p`
  margin-top: 6.5px;
  color: ${colors.midnightSlate};
  text-align: center;
  font-size: 22px;
`;
