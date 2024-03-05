import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  margin: 1rem 0 2.5rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
`;

export const ArrowButton = styled.button<{ $isHidden: boolean }>`
  border: none;
  background: none;
  font-size: 1.5rem;
  position: relative;
  margin-bottom: 0.625rem;
  color: ${({ theme }) => theme.colors.white};
  visibility: ${(props) => props.$isHidden && "hidden"};

  &::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border: 3px solid ${({ theme }) => theme.colors.white};
    border-top: none;
    border-left: none;
    transform: rotate(130deg);
  }
`;

export const Counter = styled.div`
  font-weight: 800;
  font-size: 1.125rem;
  letter-spacing: 0.125rem;

  span {
    color: ${({ theme }) => theme.colors.magenta};
  }
`;

export const Dots = styled.div`
  gap: 0.25rem;
  display: flex;
`;

export const Dot = styled.div`
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const StyledProgressBar = styled.div<{ $progress: number }>`
  width: 100%;
  height: 0.25rem;
  position: relative;
  margin-top: 0.5rem;
  border-radius: 6.25rem;
  background-color: ${({ theme }) => theme.colors.lightBlueish};

  &::after {
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    position: absolute;
    border-radius: 6.25rem;
    width: ${(props) => props.$progress}%;
    background-color: ${({ theme }) => theme.colors.magenta};
  }
`;
