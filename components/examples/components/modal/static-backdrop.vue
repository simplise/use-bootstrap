<template>
  <!-- Button trigger modal -->
  <b-button
    button="primary"
    toggle="modal"
    target="#staticBackdropLive"
  >
    Launch demo modal
  </b-button>
  <!-- Modal -->
  <Modal
    id="staticBackdropLive"
    backdrop="static"
    :keyboard="false"
  >
    <ModalDialog>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal title</ModalTitle>
          <CloseButton dismiss="modal" />
        </ModalHeader>
        <ModalBody>
          <p>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </p>
        </ModalBody>
        <ModalFooter>
          <b-button
            button="secondary"
            dismiss="modal"
          >
            Close
          </b-button>
          <b-button button="primary">
            Understood
          </b-button>
        </ModalFooter>
      </ModalContent>
    </ModalDialog>
  </Modal>
</template>
