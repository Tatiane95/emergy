"use client";

import styled from "styled-components";

import Image from "next/image";

import colors from "../../../constants/colors";

export const HeaderContainer = styled.header`
  background-color: ${colors.twilightBlue};
  height: 8em;
`;

export const Container = styled.div`
  background-color: ${colors.lavenderMist};
  padding: 1em;
  display: flex;
  height: 5em;
  justify-content: center;
  align-items: center;
`;

export const TabsButton = styled.button`
  background-color: ${colors.lavenderMist};
  border: none;
  cursor: pointer;
  margin: 0 12px;
  padding: 10px;
  transition: color 0.2s ease-in-out;
`;

export const Span = styled.span`
  font-size: 19px;

  color: ${({ $active }) => ($active ? colors.iceMist : `${colors.iceMist}60`)};

  &:hover {
    color: ${colors.iceMist};
  }
`;

export const Logo = styled(Image)`
  object-fit: contain;
`;

export const TabsDiv = styled.div`
  display: flex;
  margin-left: 30px;
  gap: 30px;
`;
