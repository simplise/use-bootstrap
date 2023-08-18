<template>
  <!-- Button trigger modal -->
  <b-button
    button="primary"
    toggle="modal"
    target="#exampleModalVary"
    whatever="@mdo"
  >
    Open modal for @mdo
  </b-button>
  <b-button
    button="primary"
    toggle="modal"
    target="#exampleModalVary"
    whatever="@fat"
  >
    Open modal for @fat
  </b-button>
  <b-button
    button="primary"
    toggle="modal"
    target="#exampleModalVary"
    whatever="@getbootstrap"
  >
    Open modal for @getbootstrap
  </b-button>
  <!-- Modal -->
  <Modal id="exampleModalVary">
    <ModalDialog>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>New message</ModalTitle>
          <CloseButton dismiss="modal" />
        </ModalHeader>
        <ModalBody>
          <BForm>
            <Row class="mb-3">
              <BColFormLabel for="recipient-name">
                Recipient:
              </BColFormLabel>
              <Col>
                <BFormInput
                  id="recipient-name"
                  type="text"
                />
              </Col>
            </Row>
            <b-div class="mb-3">
              <BFormLabel
                for="message-text"
                class="col-form-label"
              >
                Message:
              </BFormLabel>
              <BFormTextarea id="message-text" />
            </b-div>
          </BForm>
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
