<template>
  <Progress>
    <ProgressBar :value="15" />
    <ProgressBar
      background-color="success"
      :value="30"
    />
    <ProgressBar
      background-color="info"
      :value="20"
    />
  </Progress>
</template>
