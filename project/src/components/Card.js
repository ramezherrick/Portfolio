import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" borderRadius="10px">
      <Image src={imageSrc} borderRadius="10px" width="100%" />
      <Heading size="md" alignSelf="flex-start" color="black" pl="5px">
        {title}
      </Heading>
      <Text color="grey" pl="5px">
        {description}
      </Text>
      <HStack alignSelf="flex-start">
        <Text color="black" pl="5px">
          See more
        </Text>
        <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
