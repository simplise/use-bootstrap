<template>
  <!-- Button trigger modal -->
  <b-button
    button="primary"
    toggle="modal"
    target="#exampleModalLong-1"
  >
    Launch demo modal
  </b-button>
  <!-- Modal -->
  <Modal id="exampleModalLong-1">
    <ModalDialog scrollable>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal title</ModalTitle>
          <CloseButton dismiss="modal" />
        </ModalHeader>
        <ModalBody style="min-height: 1500px">
          <b-p>
            This is some placeholder content to show the scrolling behavior for
            modals. Instead of repeating the text the modal, we use an inline
            style set a minimum height, thereby extending the length of the
            overall modal and demonstrating the overflow scrolling. When content
            becomes longer than the height of the viewport, scrolling will move
            the modal as needed.
          </b-p>
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
