"use client"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { ReactNode } from "react";
import { LuPlus } from "react-icons/lu";

export default function CreateProvider({children}: {children: ReactNode}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary"><LuPlus size={20}/></Button>
      <Modal className="bg-orange-400" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="w-full">
          {(onClose) => (
            <>
              <ModalBody>
                {children}
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
