import { Box, Center, Heading, Text } from "@chakra-ui/react";

export default function RecipeBlog() {
  return (
    <Center>
      <Box backgroundColor="white" h="400px" />
      <Box w={1000}  backgroundColor="#FEB2B2">
        <Heading
        fontSize="50px"
          ml="40px"
          mt="40px"
          color="#3182CE"
    >
          หัวเรื่องๆๆๆๆๆๆ
        </Heading>
        <Text color="black" ml='10px' mt='40px' w={970} fontSize="20px" noOfLines={100}>
          สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร
          สูตรทำอาหาร สูตรทำอาหาร อ อ สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร อ
          สูตรทำอาหาร สูตรทำอาหาร อ สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร อ
          สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร
          สูตรทำอาหาร
        </Text>
        <Box backgroundColor="#FEB2B2" h="50px" />
      </Box>
      
    </Center>
  );
}
