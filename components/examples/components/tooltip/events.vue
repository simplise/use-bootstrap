<template>
  <b-table responsive>
    <thead>
      <tr>
        <th style="width: 150px">
          Event type
        </th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <code>show.bs.tooltip</code>
        </td>
        <td>
          This event fires immediately when the
          <code>show</code>
          instance method is called.
        </td>
      </tr>
      <tr>
        <td>
          <code>shown.bs.tooltip</code>
        </td>
        <td>
          This event is fired when the tooltip has been made visible to the user
          (will wait for CSS transitions to complete).
        </td>
      </tr>
      <tr>
        <td>
          <code>hide.bs.tooltip</code>
        </td>
        <td>
          This event is fired immediately when the
          <code>hide</code>
          instance method has been called.
        </td>
      </tr>
      <tr>
        <td>
          <code>hidden.bs.tooltip</code>
        </td>
        <td>
          This event is fired when the tooltip has finished being hidden from
          the user (will wait for CSS transitions to complete).
        </td>
      </tr>
      <tr>
        <td>
          <code>inserted.bs.tooltip</code>
        </td>
        <td>
          This event is fired after the
          <code>show.bs.tooltip</code>
          event when the tooltip template has been added to the DOM.
        </td>
      </tr>
    </tbody>
  </b-table>
</template>
