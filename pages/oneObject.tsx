import Bar from "@/components/Object/Bar";
import BarShallow from "@/components/Object/BarShallow";
import Foo from "@/components/Object/Foo";
import FooShallow from "@/components/Object/FooShallow";
import { HStack, VStack } from "@chakra-ui/react";

const OneObjet = () => {
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

export default OneObjet;
