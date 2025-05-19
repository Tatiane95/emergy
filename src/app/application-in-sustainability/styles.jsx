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

export const Body = styled.div`
  padding-right: 200px;
  padding-left: 200px;
`;

export const Container = styled.div`
  background-color: ${colors.iceMist};
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  margin-top: 40px;
  color: ${colors.twilightBlue};
  font-size: 40px;
  text-align: center;
`;

export const Paragraph = styled.p`
  margin-top: 20px;
  margin-bottom: 60px;
  color: ${colors.midnightSlate};
  font-size: 20px;
  text-align: justify;
`;
