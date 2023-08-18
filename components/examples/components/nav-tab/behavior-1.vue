<template>
  <NavList
    nav="tabs"
    margin="b-3"
    tablist
  >
    <NavItem>
      <NavLink
        active
        toggle="nav"
        tab="#home"
      >
        Home
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        toggle="nav"
        tab="#profile"
      >
        Profile
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        toggle="nav"
        tab="#contact"
      >
        Contact
      </NavLink>
    </NavItem>
  </NavList>
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
    <TabPane id="contact">
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
  </TabContent>
</template>
