/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { type } from "os";

export const MainView = css`
  width: 34rem;
`;

export const CenterAlignDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type ButtonProps = {
  width: number;
  height: number;
  size?: number;
  color?: string;
  backgroundColor?: string;
};
export const ButtonStyle = styled.div<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => (color ? color : "black")};
  width: ${({ width }) => width + "rem"};
  height: ${({ height }) => height + "rem"};
  font-size: ${({ size }) => size + "rem"};
`;

export const FlexRowDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FlexColumnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
