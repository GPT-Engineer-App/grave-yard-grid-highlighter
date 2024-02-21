import { Box, Grid, GridItem, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text, Button } from "@chakra-ui/react";
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
          return <GridItem key={index} w="10px" h="10px" bg="gray.700" borderRadius="md" onClick={() => handleGridItemHover(x, y)} />;
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
