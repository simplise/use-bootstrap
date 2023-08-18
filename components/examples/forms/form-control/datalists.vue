<template>
  <BFormLabel for="exampleDataList">
    Datalist example
  </BFormLabel>
  <BFormInput
    id="exampleDataList"
    list="datalistOptions"
    placeholder="Type to search..."
  />
  <BvDatalist id="datalistOptions">
    <b-option value="San Francisco" />
    <b-option value="New York" />
    <b-option value="Seattle" />
    <b-option value="Los Angeles" />
    <b-option value="Chicago" />
  </BvDatalist>
</template>
