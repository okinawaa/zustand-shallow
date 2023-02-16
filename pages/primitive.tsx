import Bar from "@/components/Primitive/Bar";
import BarShallow from "@/components/Primitive/BarShallow";
import Foo from "@/components/Primitive/Foo";
import FooShallow from "@/components/Primitive/FooShallow";
import { HStack, VStack } from "@chakra-ui/react";

const Primitive = () => {
  return (
    <VStack gap={40}>
      <HStack>
        <Foo />
        <Bar />
      </HStack>
      <HStack border="2px" padding="2" gap={10}>
        <FooShallow />
        <BarShallow />
      </HStack>
    </VStack>
  );
};

export default Primitive;
