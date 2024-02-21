import { Box, Grid, GridItem, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text, Button, Icon } from "@chakra-ui/react";
import { FaCross } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCoordinate, setSelectedCoordinate] = useState({ x: 0, y: 0 });

  const handleGridItemHover = (x, y) => {
    setSelectedCoordinate({ x, y });
    onOpen();
  };

  return (
    <Box>
      <Grid templateColumns="repeat(100, 1fr)" gap={1}>
        {Array.from({ length: 10000 }, (_, index) => {
          const x = Math.floor(index / 100) + 1;
          const y = (index % 100) + 1;
          return (
            <GridItem key={index} w="20px" h="20px" bg="gray.900" borderRadius="sm" position="relative" onClick={() => handleGridItemHover(x, y)}>
              <Icon as={FaCross} position="absolute" top="1px" left="50%" transform="translateX(-50%)" color="white" w={3} h={3} />
            </GridItem>
          );
        })}
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Grave Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="lg">
              Coordinate: ({selectedCoordinate.x}, {selectedCoordinate.y})
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
