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
`;

export const Body = styled.div`
  padding-right: 200px;
  padding-left: 200px;
`;

export const H1 = styled.h1`
  color: ${colors.twilightBlue};
  font-size: 40px;
  text-align: center;
  margin-bottom: 15px;
`;

export const Paragraph = styled.p`
  color: ${colors.midnightSlate};
  text-align: justify;
  font-size: 22px;
`;

export const Link = styled.a`
  color: ${colors.midnightSlate};
  text-align: justify;
  font-size: 22px;
`;
