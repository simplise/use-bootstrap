<template>
  <!-- Button trigger modal -->
  <b-button
    button="primary"
    toggle="modal"
    target="#exampleModalToggle"
  >
    Open first modal
  </b-button>
  <!-- Modal -->
  <Modal id="exampleModalToggle">
    <ModalDialog centered>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal 1</ModalTitle>
          <CloseButton dismiss="modal" />
        </ModalHeader>
        <ModalBody>
          Show a second modal and hide this one with the button below.
        </ModalBody>
        <ModalFooter>
          <b-button
            button="secondary"
            dismiss="modal"
          >
            Close
          </b-button>
          <b-button
            button="primary"
            toggle="modal"
            target="#exampleModalToggle2"
          >
            Open second modal
          </b-button>
        </ModalFooter>
      </ModalContent>
    </ModalDialog>
  </Modal>
  <!-- Modal -->
  <Modal id="exampleModalToggle2">
    <ModalDialog centered>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal 2</ModalTitle>
          <CloseButton dismiss="modal" />
        </ModalHeader>
        <ModalBody>
          Hide this modal and show the first with the button below.
        </ModalBody>
        <ModalFooter>
          <b-button
            button="secondary"
            dismiss="modal"
          >
            Close
          </b-button>
          <b-button
            button="primary"
            toggle="modal"
            target="#exampleModalToggle1"
          >
            Back to first
          </b-button>
        </ModalFooter>
      </ModalContent>
    </ModalDialog>
  </Modal>
</template>
