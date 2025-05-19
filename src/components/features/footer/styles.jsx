"use client";

import styled from "styled-components";

import colors from "../../../constants/colors";

export const FooterContainer = styled.footer`
  background-color: ${colors.twilightBlue};
  padding-left: 2.2em;
  padding-right: 2.2em;
  height: 60px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

export const Span = styled.span`
  color: ${colors.iceMist};
`;

export const TabButton = styled.button`
  background-color: ${colors.twilightBlue};
  border: none;
  cursor: pointer;
  margin: 0 12px;
  transition: color 0.2s ease-in-out;
`;

export const SpanButton = styled.span`
  font-size: 19px;

  color: ${({ $active }) => ($active ? colors.iceMist : `${colors.iceMist}60`)};

  &:hover {
    color: ${colors.iceMist};
  }
`;
