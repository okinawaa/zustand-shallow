import { Button, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter();

  return (
    <VStack gap={30}>
      <Heading>확인하고 싶은 페이지로 버튼을 클릭하여 이동하세요</Heading>

      <HStack gap={30}>
        <Button onClick={() => push("primitive")} size="lg">
          원시타입
        </Button>

        <Button onClick={() => push("oneObject")} size="lg">
          하나의 객체
        </Button>
      </HStack>
    </VStack>
  );
}
