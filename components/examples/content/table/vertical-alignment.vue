<template>
  <b-table vertical-align="middle">
    <b-thead>
      <b-tr>
        <b-th
          scope="col"
          width="25%"
        >
          Heading 1
        </b-th>
        <b-th
          scope="col"
          width="25%"
        >
          Heading 2
        </b-th>
        <b-th
          scope="col"
          width="25%"
        >
          Heading 3
        </b-th>
        <b-th
          scope="col"
          width="25%"
        >
          Heading 4
        </b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr>
        <b-td>
          This cell inherits
          <code>vertical-align: middle;</code>
          from the table
        </b-td>
        <b-td>
          This cell inherits
          <code>vertical-align: middle;</code>
          from the table
        </b-td>
        <b-td>
          This cell inherits
          <code>vertical-align: middle;</code>
          from the table
        </b-td>
        <b-td>
          This here is some placeholder text, intended to take up quite a bit of
          vertical space, to demonstrate how the vertical alignment works in the
          preceding cells.
        </b-td>
      </b-tr>
      <b-tr vertical-align="bottom">
        <b-td>
          This cell inherits
          <code>vertical-align: bottom;</code>
          from the table row
        </b-td>
        <b-td>
          This cell inherits
          <code>vertical-align: bottom;</code>
          from the table row
        </b-td>
        <b-td>
          This cell inherits
          <code>vertical-align: bottom;</code>
          from the table row
        </b-td>
        <b-td>
          This here is some placeholder text, intended to take up quite a bit of
          vertical space, to demonstrate how the vertical alignment works in the
          preceding cells.
        </b-td>
      </b-tr>
      <b-tr>
        <b-td>
          This cell inherits
          <code>vertical-align: middle;</code>
          from the table
        </b-td>
        <b-td>
          This cell inherits
          <code>vertical-align: middle;</code>
          from the table
        </b-td>
        <b-td vertical-align="top">
          This cell is aligned to the top.
        </b-td>
        <b-td>
          This here is some placeholder text, intended to take up quite a bit of
          vertical space, to demonstrate how the vertical alignment works in the
          preceding cells.
        </b-td>
      </b-tr>
    </b-tbody>
  </b-table>
</template>
