<template>
  <ListGroupList
    id="myList"
    class="list-group"
    role="tablist"
  >
    <ListGroupItemAction
      toggle="list"
      href="#home"
      role="tab"
      active
    >
      Home
    </ListGroupItemAction>
    <ListGroupItemAction
      toggle="list"
      href="#profile"
      role="tab"
    >
      Profile
    </ListGroupItemAction>
    <ListGroupItemAction
      toggle="list"
      href="#messages"
      role="tab"
    >
      Messages
    </ListGroupItemAction>
    <ListGroupItemAction
      toggle="list"
      href="#settings"
      role="tab"
    >
      Settings
    </ListGroupItemAction>
  </ListGroupList>

  <b-div tab-content>
    <b-div
      id="home"
      active
      tab-pane
      role="tabpanel"
    >
      ...
    </b-div>
    <b-div
      id="profile"
      tab-pane
      role="tabpanel"
    >
      ...
    </b-div>
    <b-div
      id="messages"
      tab-pane
      role="tabpanel"
    >
      ...
    </b-div>
    <b-div
      id="settings"
      tab-pane
      role="tabpanel"
    >
      ...
    </b-div>
  </b-div>
</template>

<!-- <script>
// var firstTabEl = document.querySelector('#myTab a:last-child')
// var firstTab = new bootstrap.Tab(firstTabEl)

// firstTab.show()
</script> -->
