<template>
  <!-- Button trigger modal -->
  <b-button
    button="primary"
    toggle="modal"
    target="#exampleModalFullscreen"
  >
    Full screen
  </b-button>
  <b-button
    button="primary"
    toggle="modal"
    target="#exampleModalFullscreenSm"
  >
    Full screen below sm
  </b-button>
  <b-button
    button="primary"
    toggle="modal"
    target="#exampleModalFullscreenMd"
  >
    Full screen below md
  </b-button>
  <b-button
    button="primary"
    toggle="modal"
    target="#exampleModalFullscreenLg"
  >
    Full screen below lg
  </b-button>
  <b-button
    button="primary"
    toggle="modal"
    target="#exampleModalFullscreenXl"
  >
    Full screen below xl
  </b-button>
  <b-button
    button="primary"
    toggle="modal"
    target="#exampleModalFullscreenXxl"
  >
    Full screen below xxl
  </b-button>
  <!-- Modal -->
  <Modal id="exampleModalFullscreen">
    <ModalDialog fullscreen>
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
  <Modal id="exampleModalFullscreenSm">
    <ModalDialog fullscreen="sm-down">
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Full screen below down</ModalTitle>
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
  <Modal id="exampleModalFullscreenMd">
    <ModalDialog fullscreen="md-down">
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Full screen below md</ModalTitle>
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
  <Modal id="exampleModalFullscreenLg">
    <ModalDialog fullscreen="lg-down">
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Full screen below lg</ModalTitle>
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
  <Modal id="exampleModalFullscreenXl">
    <ModalDialog fullscreen="xl-down">
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Full screen below xl</ModalTitle>
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
  <Modal id="exampleModalFullscreenXxl">
    <ModalDialog fullscreen="xxl-down">
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Full screen below xl</ModalTitle>
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
