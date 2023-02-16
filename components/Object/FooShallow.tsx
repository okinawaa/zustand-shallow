import { useObjectStore } from "@/stores/oneObject.store";
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

let renderCount = 0;
const FooShallow = () => {
  useEffect(() => {
    renderCount++;
  });
  const { foo, dispatchObject } = useObjectStore(
    (state) => ({
      foo: state.obj.foo,
      dispatchObject: state.dispatchObject,
    }),
    shallow
  );
  return (
    <VStack border="2px" padding="2" gap={10}>
      <Heading>shallowed Foo컴포넌트입니다</Heading>
      <Heading>foo : {foo}</Heading>
      <Button onClick={() => dispatchObject("foo", foo + 1)}>changeFoo</Button>
      <Text>foo는 {renderCount}번 렌더링되었습니다.</Text>
    </VStack>
  );
};

export default FooShallow;
