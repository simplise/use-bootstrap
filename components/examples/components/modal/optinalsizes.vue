<template>
  <!-- Button trigger modal -->
  <b-button
    button="primary"
    toggle="modal"
    target="#exampleModalXl"
  >
    Extra large modal
  </b-button>
  <b-button
    button="primary"
    toggle="modal"
    target="#exampleModalLg"
  >
    large modal
  </b-button>
  <b-button
    button="primary"
    toggle="modal"
    target="#exampleModalSm"
  >
    small modal
  </b-button>
  <!-- Modal -->
  <Modal id="exampleModalXl">
    <ModalDialog>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Extra large modal</ModalTitle>
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
  <Modal id="exampleModalLg">
    <ModalDialog>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Large modal</ModalTitle>
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
  <Modal id="exampleModalSm">
    <ModalDialog>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Small modal</ModalTitle>
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
