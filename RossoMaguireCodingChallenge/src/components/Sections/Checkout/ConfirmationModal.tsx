import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
} from '@chakra-ui/react';
import { useCartContext } from '../../context/CartContext';
import { CheckCircleIcon, EmailIcon } from '@chakra-ui/icons';

interface IConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const logoStyles = { margin: '0px auto', width: '50%', paddingBottom: '30px' };

const ConfirmationModal: React.FC<IConfirmationModalProps> = ({
  isOpen,
  onClose,
}: IConfirmationModalProps) => {
  const { cartTotal, cartItems } = useCartContext();

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleClick = () => {
    setOrderConfirmed(true);
  };

  const handleClose = () => {
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent textAlign='center'>
        <ModalHeader>
          <img
            style={logoStyles}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDR23DbNiTZ_lm_g8VkgU2ijcP5jSptbEZZYewDLs&s'
          />
          {orderConfirmed ? 'Order Confirmed' : 'Confirm Purchase'}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {orderConfirmed ? (
            <>
              <CheckCircleIcon color='green.500' />
              <Text pb={5}>Thank you for your purchase.</Text>
              <Text>A confirmation of your order has been emailed to you.</Text>
              <EmailIcon />
            </>
          ) : (
            <Table variant='simple' color='black'>
              <Thead>
                <Tr>
                  <Th>Product</Th>
                  <Th>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                {cartItems.map((item, index) => (
                  <Tr key={`confirmation-item-${index}}`}>
                    <Td fontWeight='bold'>{item.productName}</Td>
                    <Td fontWeight='bold'>{item.amount}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
          {!orderConfirmed && <Text py={5}>You will pay:</Text>}
          <Text
            pt={orderConfirmed ? 5 : 0}
            fontWeight='bold'
          >{`Order Total: €${cartTotal.toLocaleString('en-US')}`}</Text>
        </ModalBody>

        <ModalFooter>
          {!orderConfirmed && (
            <Button
              colorScheme='blue'
              m='auto'
              onClick={handleClick}
              data-testid='confirm-button'
            >
              Confirm Order
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationModal;
