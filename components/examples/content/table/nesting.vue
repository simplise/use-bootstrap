<template>
  <b-table
    striped
    bordered
  >
    <b-thead>
      <b-tr>
        <b-th scope="col">
          #
        </b-th>
        <b-th scope="col">
          First
        </b-th>
        <b-th scope="col">
          Last
        </b-th>
        <b-th scope="col">
          Handle
        </b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr>
        <b-th scope="row">
          1
        </b-th>
        <b-td>Mark</b-td>
        <b-td>Otto</b-td>
        <b-td>@mdo</b-td>
      </b-tr>
      <b-tr>
        <b-td colspan="4">
          <b-table margin="b-0">
            <b-thead>
              <b-tr>
                <b-th scope="col">
                  Header
                </b-th>
                <b-th scope="col">
                  Header
                </b-th>
                <b-th scope="col">
                  Header
                </b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-th scope="row">
                  A
                </b-th>
                <b-td>First</b-td>
                <b-td>Last</b-td>
              </b-tr>
              <b-tr>
                <b-th scope="row">
                  B
                </b-th>
                <b-td>First</b-td>
                <b-td>Last</b-td>
              </b-tr>
              <b-tr>
                <b-th scope="row">
                  C
                </b-th>
                <b-td>First</b-td>
                <b-td>Last</b-td>
              </b-tr>
            </b-tbody>
          </b-table>
        </b-td>
      </b-tr>
      <b-tr>
        <b-th scope="row">
          3
        </b-th>
        <b-td>Larry</b-td>
        <b-td>the Bird</b-td>
        <b-td>@twitter</b-td>
      </b-tr>
    </b-tbody>
  </b-table>
</template>
