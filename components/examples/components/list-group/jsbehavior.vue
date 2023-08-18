<template>
  <Row>
    <Col col="4">
      <ListGroup>
        <ListGroupItemAction
          toggle="list"
          href="#list-home"
        >
          Home
        </ListGroupItemAction>
        <ListGroupItemAction
          toggle="list"
          href="#list-profile"
        >
          Profile
        </ListGroupItemAction>
        <ListGroupItemAction
          toggle="list"
          href="#list-messages"
        >
          Messages
        </ListGroupItemAction>
        <ListGroupItemAction
          toggle="list"
          href="#list-settings"
        >
          Settings
        </ListGroupItemAction>
      </ListGroup>
    </Col>
    <Col col="8">
      <TabContent id="nav-tabContent">
        <TabPane id="list-home">
          Some placeholder content in a paragraph relating to "Home". And some
          more content, used here just to pad out and fill this tab panel. In
          production, you would obviously have more real content here. And not
          just text. It could be anything, really. Text, images, forms.
        </TabPane>
        <TabPane id="list-profile">
          Some placeholder content in a paragraph relating to "Home". And some
          more content, used here just to pad out and fill this tab panel. In
          production, you would obviously have more real content here. And not
          just text. It could be anything, really. Text, images, forms.
        </TabPane>
        <TabPane id="list-messages">
          Some placeholder content in a paragraph relating to "Home". And some
          more content, used here just to pad out and fill this tab panel. In
          production, you would obviously have more real content here. And not
          just text. It could be anything, really. Text, images, forms.
        </TabPane>
        <TabPane id="list-settings">
          Some placeholder content in a paragraph relating to "Home". And some
          more content, used here just to pad out and fill this tab panel. In
          production, you would obviously have more real content here. And not
          just text. It could be anything, really. Text, images, forms.
        </TabPane>
      </TabContent>
    </Col>
  </Row>
</template>
