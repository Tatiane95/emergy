"use client";

import colors from "../../constants/colors";

import styled from "styled-components";

export const Container = styled.div`
  background-color: ${colors.iceMist};
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  align-items: center;
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
  margin-top: 20px;
  margin-bottom: 60px;
  color: ${colors.midnightSlate};
  font-size: 20px;
  text-align: justify;
`;
