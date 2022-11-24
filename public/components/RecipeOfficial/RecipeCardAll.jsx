import CommonCard from "../Home/CommonCard";
import { VStack } from '@chakra-ui/react'

export default function RecipeCardAll() {
    return (
        <VStack
        spacing={20}
        align="stretch"
      >
        <CommonCard/>
        <CommonCard/>
        <CommonCard/>
        <CommonCard/>
        <CommonCard/>
        <CommonCard/>
        <CommonCard/>
        <CommonCard/>
        </VStack>
    );
  }
  