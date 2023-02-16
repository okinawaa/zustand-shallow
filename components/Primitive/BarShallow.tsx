import { usePrimitiveStore } from "@/stores/primitive.store";
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

let renderCount = 0;
const BarShallow = () => {
  useEffect(() => {
    renderCount++;
  });
  const { bar, dispatchBar } = usePrimitiveStore(
    (state) => ({
      bar: state.bar,
      dispatchBar: state.dispatchBar,
    }),
    shallow
  );
  return (
    <VStack border="2px" padding="2" gap={10}>
      <Heading>shallowed Bar컴포넌트입니다</Heading>
      <Heading>bar : {bar}</Heading>
      <Button onClick={() => dispatchBar(bar + 1)}>changeBar</Button>
      <Text>bar는 {renderCount}번 렌더링되었습니다.</Text>
    </VStack>
  );
};

export default BarShallow;
