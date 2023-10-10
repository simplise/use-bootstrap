<template>
  <List unstyled>
    <ListItem>This is a ListItemst.</ListItem>
    <ListItem>It appears completely unstyled.</ListItem>
    <ListItem>Structurally, it's still a ListItemst.</ListItem>
    <ListItem>However, this style only appListItemes to immediate child elements.</ListItem>
    <ListItem>
      Nested ListItemsts:
      <List>
        <ListItem>are unaffected by this style</ListItem>
        <ListItem>will still show a bullet</ListItem>
        <ListItem>and have appropriate left margin</ListItem>
      </List>
    </ListItem>
    <ListItem>This may still come in handy in some situations.</ListItem>
  </List>
</template>
