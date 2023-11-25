<template>
  <b-div flex>
    <b-img
      src="https://dummyimage.com/144x144/868e96/868e96"
      flex-grow="shrink-0"
      margin="e-3"
      alt="Generic placeholder image"
    />
    <b-div position="relative">
      <CardTitle>
        <b-h
          level="5"
          margin="t-0"
        >
          Custom component with stretched link
        </b-h>
      </CardTitle>
      <b-p>
        This is some placeholder content for the custom component. It is
        intended to mimic what some real-world content would look like, and
        we're using it here to give the component a bit of body and size.
      </b-p>
      <b-a
        stretched-link
        href="#"
      >
        Go somewhere
      </b-a>
    </b-div>
  </b-div>
</template>
