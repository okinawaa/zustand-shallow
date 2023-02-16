import { useObjectStore } from "@/stores/oneObject.store";
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

let renderCount = 0;
const Bar = () => {
  useEffect(() => {
    renderCount++;
  });

  const { bar, dispatchObject } = useObjectStore((state) => ({
    bar: state.obj.bar,
    dispatchObject: state.dispatchObject,
  }));

  return (
    <VStack border="2px" padding="2" gap={10}>
      <Heading>이것은 Bar컴포넌트입니다</Heading>
      <Heading>bar : {bar}</Heading>
      <Button onClick={() => dispatchObject("bar", bar + 1)}>changeBar</Button>
      <Text>foo는 {renderCount}번 렌더링되었습니다.</Text>
    </VStack>
  );
};

export default Bar;
