import { PropsWithChildren, useEffect } from "react";
import styled from "@emotion/styled";
import { Flex } from "@chakra-ui/react";

let renderCount = 0;
const CommonLayout = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    renderCount++;
  });

  return (
    <Container align="center" justify="center">
      <RenderCard align="center" justify="center">
        {renderCount}번 렌더링 되었습니다.
      </RenderCard>
      {children}
    </Container>
  );
};

export default CommonLayout;

const Container = styled(Flex)`
  position: fixed;
  width: 100%;
  height: 100%;
`;
const RenderCard = styled(Flex)`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 50px;
  background-color: wheat;
`;
