import { useLocation } from "react-router";
import { PageTitle, SubTitle, Wrapper } from "./style.styled";

type Props = {
  title: string;
  subTitle?: string;
};

export const Title = ({ title, subTitle }: Props) => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      {title && <PageTitle $pathname={pathname}>{title}</PageTitle>}
      {subTitle && <SubTitle $pathname={pathname}>{subTitle}</SubTitle>}
    </Wrapper>
  );
};
