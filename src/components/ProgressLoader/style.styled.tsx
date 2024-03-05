import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  font-weight: 600;
  font-size: 1.063rem;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Value = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 3.25rem;
  border-radius: 50%;
  position: absolute;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  font-family: ${({ theme }) => theme.fonts.secondary};

  p {
    font-weight: 700;
  }
`;

export const ProgressBar = styled.div`
  z-index: 999;
  width: 15.75rem;
  height: 15.75rem;
  border-radius: 50%;
  position: relative;
  transform: rotate(-90deg);
`;

export const ItemSvg = styled.svg<{ $progressBar: number }>`
  z-index: 999;
  width: 15.75rem;
  height: 15.75rem;
  position: relative;

  circle {
    fill: none;
    width: 100%;
    height: 100%;
    stroke-width: 10;
    stroke-linecap: round;
    transform: translate(0.313rem, 0.313rem);
    stroke: ${({ theme }) => theme.colors.lightBlueish};
  }

  circle:nth-child(2) {
    stroke-dasharray: 752;
    stroke-dashoffset: 752;
  }

  circle:nth-child(2) {
    stroke: ${({ theme }) => theme.colors.magenta};
    stroke-dashoffset: calc(
      752 - (752 * ${(props) => props.$progressBar}) / 100
    );
  }
`;

export const LoaderMessage = styled.p`
  max-width: 12.5rem;
  text-align: center;
  margin: 2.5rem auto 0;
`;

export const ProgressCircle = styled.circle``;
