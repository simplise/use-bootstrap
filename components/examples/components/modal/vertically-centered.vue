<template>
  <!-- Button trigger modal -->
  <b-button
    button="primary"
    toggle="modal"
    target="#exampleModalCenter"
  >
    Vertically centered modal
  </b-button>
  <b-button
    button="primary"
    toggle="modal"
    target="#exampleModalCenteredScrollable"
  >
    Vertically centered scrollable modal
  </b-button>
  <!-- Modal -->
  <Modal id="exampleModalCenter">
    <ModalDialog centered>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal title</ModalTitle>
          <CloseButton dismiss="modal" />
        </ModalHeader>
        <ModalBody>This is a vertically centered modal.</ModalBody>
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
  <Modal id="exampleModalCenteredScrollable">
    <ModalDialog
      centered
      scrollable
    >
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal title</ModalTitle>
          <CloseButton dismiss="modal" />
        </ModalHeader>
        <ModalBody>
          <p>
            This is some placeholder content to show a vertically centered
            modal. We've added some extra copy here to show how vertically
            centering the modal works when combined with scrollable modals. We
            also use some repeated line breaks to quickly extend the height of
            the content, thereby triggering the scrolling. When content becomes
            longer than the predefined max-height of modal, content will be
            cropped and scrollable within the modal.
          </p>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <p>Just like that.</p>
        </ModalBody>
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
