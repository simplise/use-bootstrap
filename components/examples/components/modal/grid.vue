<template>
  <!-- Button trigger modal -->
  <b-button
    button="primary"
    toggle="modal"
    target="#gridSystemModal"
  >
    Launch demo modal
  </b-button>
  <!-- Modal -->
  <Modal id="gridSystemModal">
    <ModalDialog>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Grids in modals</ModalTitle>
          <CloseButton dismiss="modal" />
        </ModalHeader>
        <ModalBody>
          <Container fluid>
            <Row>
              <Col col="md-4">
                .col-md-4
              </Col>
              <Col col="md-4 ms-auto">
                .col-md-4 .ms-auto
              </Col>
            </Row>
            <Row>
              <Col col="md-3 ms-auto">
                .col-md-3 .ms-auto
              </Col>
              <Col col="md-2 ms-auto">
                .col-md-2 .ms-auto
              </Col>
            </Row>
            <Row>
              <Col col="md-6 ms-auto">
                .col-md-6 .ms-auto
              </Col>
            </Row>
            <Row>
              <Col col="md-9">
                Level 1: .col-sm-9
              </Col>
              <Row>
                <Col col="col-8 col-sm-6">
                  Level 2: .col-8 .col-sm-6
                </Col>
                <Col col="col-4 col-sm-6">
                  Level 2: .col-4 .col-sm-6
                </Col>
              </Row>
            </Row>
          </Container>
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
