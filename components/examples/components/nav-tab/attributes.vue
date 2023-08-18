<template>
  <NavList nav="tabs">
    <NavItem>
      <NavLink
        active
        tab="#home"
      >
        Home
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tab="#profile">
        profile
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tab="#messages">
        Link
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tab="#settings">
        Settings
      </NavLink>
    </NavItem>
  </NavList>
  <!-- Nav tabs -->
  <TabContent>
    <TabPane
      id="home"
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

    <TabPane id="profile">
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
    <TabPane id="messages">
      <p>
        <strong>
          This is some placeholder content the Messages tab's associated
          content.
        </strong>
        Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling. You can use it with tabs, pills, and any other
        <code>.nav</code>
        -powered navigation.
      </p>
    </TabPane>
    <TabPane id="settings">
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
