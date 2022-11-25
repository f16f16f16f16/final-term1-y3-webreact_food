import {
  Image,
  Box,
  Center,
  Heading,
  Avatar,
  Text,
  HStack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
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
        <Heading size="md" ml="30px" color="black">
          ชื่อเมนู
        </Heading>
        <Box h="10px"></Box>
        <HStack  ml='10px'>
          <Avatar name="Logo" src="../images/f16.JPG" />
          <Box h="15px"></Box>
          <Text color="black">ชื่อ User</Text>
        </HStack>
        <Text color="black" ml='10px' noOfLines={10}>
          สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร
          สูตรทำอาหาร สูตรทำอาหาร อ อ สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร อ
          สูตรทำอาหาร สูตรทำอาหาร อ สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร อ
          สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร สูตรทำอาหาร
          สูตรทำอาหาร
        </Text>
      </Box>
      <Box h="20px" bg="white"></Box>
      <Box bg="white">
        <Heading size="md" ml="30px" color="black">
          ส่วนผสม
        </Heading>
        <Box h="15px"></Box>
        <UnorderedList color="black" ml="30px">
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
        </UnorderedList>
      </Box>
      <Box h="20px" bg="white"></Box>
      <Box bg="white">
        <Heading size="md" ml="30px" color="black">
          วิธีทำ
        </Heading>
        <Box h="15px"></Box>
        <OrderedList color="black" ml="30px" spacing={3}>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </OrderedList>
      </Box>
      <Box h="50px"></Box>
    </Box>
  );
}
