<template>
  <!-- Button trigger modal -->
  <b-button
    button="primary"
    toggle="modal"
    target="#exampleModal"
  >
    Launch demo modal
  </b-button>
  <!-- Modal -->
  <Modal id="exampleModal">
    <ModalDialog>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal title</ModalTitle>
          <CloseButton dismiss="modal" />
        </ModalHeader>
        <ModalBody>...</ModalBody>
        <ModalFooter>
          <b-button
            button="secondary"
            dismiss="modal"
          >
            Close
          </b-button>
          <b-button button="primary">
            Save changes
          </b-button>
        </ModalFooter>
      </ModalContent>
    </ModalDialog>
  </Modal>
</template>
