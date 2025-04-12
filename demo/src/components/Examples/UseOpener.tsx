import { useEffect } from "react";
import { ReactOpener } from "react-opener";
import { StyledCode } from ".";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export const UseOpenerExample = () => {
  const [api, opener] = ReactOpener.useOpener();
  useEffect(() => {
    api.open(({ unmount }) => (
      <Modal isOpen={true} onClose={unmount}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna
            exercitation reprehenderit magna aute tempor cupidatat consequat
            elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt
            cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim
            laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse
            laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt
            nostrud ad veniam.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={unmount}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    ));
  }, []);

  return (
    <>
      <StyledCode
        code={`
  const [api, opener] = ReactOpener.useOpener();
  
  api.open(({close})=> <YourDialog isOpen={true} onClose={close}/>);`}
      />
      {opener}
    </>
  );
};
