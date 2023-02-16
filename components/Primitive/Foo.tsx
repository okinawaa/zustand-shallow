import { usePrimitiveStore } from "@/stores/primitive.store";
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";

let renderCount = 0;
const Foo = () => {
  useEffect(() => {
    renderCount++;
  });
  const { foo, dispatchFoo } = usePrimitiveStore((state) => ({
    foo: state.foo,
    dispatchFoo: state.dispatchFoo,
  }));
  return (
    <VStack border="2px" padding="2" gap={10}>
      <Heading>이것은 Foo컴포넌트입니다</Heading>
      <Heading>foo : {foo}</Heading>
      <Button onClick={() => dispatchFoo(foo + 1)}>changeFoo</Button>
      <Text>foo는 {renderCount}번 렌더링되었습니다.</Text>
    </VStack>
  );
};

export default Foo;
