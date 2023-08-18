<template>
  <!-- Button trigger modal -->
  <b-button
    button="primary"
    toggle="modal"
    target="#exampleModalPopovers"
  >
    Launch demo modal
  </b-button>
  <!-- Modal -->
  <Modal id="exampleModalPopovers">
    <ModalDialog>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal title</ModalTitle>
          <CloseButton dismiss="modal" />
        </ModalHeader>
        <ModalBody>
          <h5>Popover in a modal</h5>
          <p>
            This
            <b-button
              button="secondary"
              toggle="popover"
              title="Popover title"
              content="Popover body content is set in this attribute."
            >
              button
            </b-button>
            triggers a popover on click.
          </p>
          <hr>
          <h5>Tooltips in a modal</h5>
          <p>
            <b-a
              toggle="tooltip"
              title="Tooltip"
            >
              This link
            </b-a>
            and
            <b-a
              toggle="tooltip"
              title="Tooltip"
            >
              that link
            </b-a>
            have tooltips on hover.
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
            Save changes
          </b-button>
        </ModalFooter>
      </ModalContent>
    </ModalDialog>
  </Modal>
</template>
