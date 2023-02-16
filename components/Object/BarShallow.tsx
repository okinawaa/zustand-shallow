import { useObjectStore } from "@/stores/oneObject.store";
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

let renderCount = 0;
const BarShallow = () => {
  useEffect(() => {
    renderCount++;
  });

  const { bar, dispatchObject } = useObjectStore(
    (state) => ({
      bar: state.obj.bar,
      dispatchObject: state.dispatchObject,
    }),
    shallow
  );

  return (
    <VStack border="2px" padding="2" gap={10}>
      <Heading>shallowed Bar컴포넌트입니다</Heading>
      <Heading>bar : {bar}</Heading>
      <Button onClick={() => dispatchObject("bar", bar + 1)}>changeBar</Button>
      <Text>bar는 {renderCount}번 렌더링되었습니다.</Text>
    </VStack>
  );
};

export default BarShallow;
