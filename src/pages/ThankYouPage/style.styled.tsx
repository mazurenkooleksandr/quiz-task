import styled from "styled-components";

export const SuccessIcon = styled.img`
  top: 50%;
  left: 50%;
  width: 7.375rem;
  height: 7.375rem;
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const Container = styled.button`
  left: 50%;
  bottom: 0;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -220%);
  cursor: pointer;
`;

export const DownloadIcon = styled.img`
  width: 2.625rem;
  height: 2.625rem;
`;

export const DownloadText = styled.p`
  width: 12.5rem;
  font-weight: 600;
  text-align: center;
  font-size: 1.063rem;
  padding-left: 0.6rem;
  line-height: 1.563rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;
