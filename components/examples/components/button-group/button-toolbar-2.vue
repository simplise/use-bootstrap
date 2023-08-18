<template>
  <ButtonToolbar
    margin="b-3"
    aria-label="Toolbar with button groups"
  >
    <ButtonGroup
      margin="e-2"
      aria-label="First group"
    >
      <b-button button="primary">
        1
      </b-button>
      <b-button button="primary">
        2
      </b-button>
      <b-button button="primary">
        3
      </b-button>
      <b-button button="primary">
        4
      </b-button>
    </ButtonGroup>
    <BInputGroup>
      <BInputGroupText>@</BInputGroupText>
      <BFormControl
        placeholder="Input group example"
        aria-label="Input group example"
      />
    </BInputGroup>
  </ButtonToolbar>

  <ButtonToolbar
    justify-content="between"
    aria-label="Toolbar with button groups"
  >
    <ButtonGroup aria-label="First group">
      <b-button button="outline-secondary">
        1
      </b-button>
      <b-button button="outline-secondary">
        2
      </b-button>
      <b-button button="outline-secondary">
        3
      </b-button>
      <b-button button="outline-secondary">
        4
      </b-button>
    </ButtonGroup>
    <BInputGroup>
      <BInputGroupText>@</BInputGroupText>
      <BFormControl
        placeholder="Input group example"
        aria-label="Input group example"
      />
    </BInputGroup>
  </ButtonToolbar>
</template>
