import { useEffect } from "react";
import { ReactOpener } from "react-opener";
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
import { StyledCode } from ".";

export const ModalAsyncExample = () => {
  const [api, opener] = ReactOpener.useOpener();
  useEffect(() => {
    const open = async () => {
      const result = await api.openAsync<boolean>(({ isOpen, unmount }) => (
        <Modal isOpen={isOpen} onClose={() => unmount(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
              ullamco deserunt aute id consequat veniam incididunt duis in sint
              irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
              officia tempor esse quis. Sunt ad dolore quis aute consequat.
              Magna exercitation reprehenderit magna aute tempor cupidatat
              consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
              incididunt cillum quis. Velit duis sit officia eiusmod Lorem
              aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
              consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
              et. Culpa deserunt nostrud ad veniam.
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={() => unmount(false)}>
                Close
              </Button>
              <Button variant="ghost" onClick={() => unmount(true)}>
                Confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ));

      alert(result);
    };
    open();
  }, []);

  return (
    <>
      <StyledCode
        code={`
  const Store = ReactOpener.createStore();
  
  const result = Store.openAsync(({isOpen,close})=> <YourDialog isOpen={isOpen} onClose={() =>{close(false)}}/>);`}
      />
      {opener}
    </>
  );
};
