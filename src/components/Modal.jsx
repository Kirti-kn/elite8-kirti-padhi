import { Dialog } from '@headlessui/react'

const Modal = ({isOpen, setIsOpen}) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogPanel>
        <DialogTitle>Deactivate account</DialogTitle>
        <Description>
          This will permanently deactivate your account
        </Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </DialogPanel>
    </Dialog>
  );
};

export default Modal;