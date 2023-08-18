<template>
  <b-div
    flex
    align-items="start"
  >
    <NavList
      nav="pills"
      margin="e-3"
      tablist
    >
      <NavLink
        active
        tab="#v-pills-home"
      >
        Home
      </NavLink>
      <NavLink tab="#v-pills-profile">
        Profile
      </NavLink>
      <NavLink tab="#v-pills-contact">
        Messages
      </NavLink>
      <NavLink tab="#v-pills-settings">
        Settings
      </NavLink>
    </NavList>
  </b-div>
  <TabContent>
    <TabPane
      id="v-pills-home"
      active
    >
      <p>
        <strong>
          This is some placeholder content the Home tab's associated content.
        </strong>
        Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling. You can use it with tabs, pills, and any other
        <code>.nav</code>
        -powered navigation.
      </p>
    </TabPane>
    <TabPane id="v-pills-profile">
      <p>
        <strong>
          This is some placeholder content the Profile tab's associated content.
        </strong>
        Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling. You can use it with tabs, pills, and any other
        <code>.nav</code>
        -powered navigation.
      </p>
    </TabPane>
    <TabPane id="v-pills-contact">
      <p>
        <strong>
          This is some placeholder content the Contact tab's associated content.
        </strong>
        Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling. You can use it with tabs, pills, and any other
        <code>.nav</code>
        -powered navigation.
      </p>
    </TabPane>
    <TabPane id="v-pills-settings">
      <p>
        <strong>
          This is some placeholder content the Settings tab's associated
          content.
        </strong>
        Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling. You can use it with tabs, pills, and any other
        <code>.nav</code>
        -powered navigation.
      </p>
    </TabPane>
  </TabContent>
</template>
