<template>
  <NavList
    nav="pills"
    margin="b-3"
    tablist
  >
    <NavItem role="presentation">
      <NavLink
        active
        toggle="nav"
        tab="#pills-home"
      >
        Home
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        toggle="nav"
        tab="#pills-profile"
      >
        Profile
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        toggle="nav"
        tab="#pills-contact"
      >
        Contact
      </NavLink>
    </NavItem>
  </NavList>
  <TabContent>
    <TabPane
      id="pills-home"
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

    <TabPane id="pills-profile">
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
    <TabPane id="pills-contact">
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
