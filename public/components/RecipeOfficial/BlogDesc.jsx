import {
  Image,
  Box,
  Center,
  Heading,
  Avatar,
  Text,
  HStack,
} from "@chakra-ui/react";

export default function BlogDesc() {
  return (
    <Box maxW="700px">
      <Box h="80px"></Box>
      <Center>
        <Image
          src="https://img.freepik.com/free-photo/chopping-board-surrounded-with-vegetables-eggs-rice-grains-desk_23-2148062361.jpg"
          alt="Dan Abramov"
        />
      </Center>
      <Box h="5px"></Box>
      <Box h="10px" bg="white"></Box>
      <Box bg="white">
        <Heading size='md' ml="30px" color="black">
          ชื่อเมนู
        </Heading>
        <HStack>
          <Avatar name="Logo" src="../images/f16.JPG" />
          <Text color="black">ชื่อ User</Text>
        </HStack>
        <Text color="black" noOfLines={10}>
          สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร
          สูตรทำอาหาร สูตรทำอาหาร อ อ สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร อ
          สูตรทำอาหาร สูตรทำอาหาร อ สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร อ
          สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร
          สูตรทำอาหาร
        </Text>
      </Box>
      <Box h="10px" bg="white"></Box>
      <Box bg="white">
        <Heading size='md' ml="30px" color="black">
        ส่วนผสม
        </Heading>
        <HStack>
          <Avatar name="Logo" src="../images/f16.JPG" />
          <Text color="black">ชื่อ User</Text>
        </HStack>
        <Text color="black" noOfLines={10}>
          "The quick brown fox jumps over the lazy dog" is an English-language
          pangram—a sentence that contains all of the letters of the English
          alphabet. Owing to its existence, Chakra was created. "The quick brown
          fox jumps over the lazy dog" is an English-language
        </Text>
      </Box>
    </Box>
  );
}
