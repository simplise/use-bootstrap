<template>
  <b-table>
    <thead>
      <tr>
        <th scope="col" />
        <th scope="col">
          xs
          <br>
          <span class="fw-normal">&lt;576px</span>
        </th>
        <th scope="col">
          sm
          <br>
          <span class="fw-normal">&ge;576px</span>
        </th>
        <th scope="col">
          md
          <br>
          <span class="fw-normal">&ge;768px</span>
        </th>
        <th scope="col">
          lg
          <br>
          <span class="fw-normal">&ge;992px</span>
        </th>
        <th scope="col">
          xl
          <br>
          <span class="fw-normal">&ge;1200px</span>
        </th>
        <th scope="col">
          xxl
          <br>
          <span class="fw-normal">&ge;1400px</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th
          class="text-nowrap"
          scope="row"
        >
          Container
          <code class="fw-normal">max-width</code>
        </th>
        <td>None (auto)</td>
        <td>540px</td>
        <td>720px</td>
        <td>960px</td>
        <td>1140px</td>
        <td>1320px</td>
      </tr>
      <tr>
        <th
          class="text-nowrap"
          scope="row"
        >
          Col attribute
        </th>
        <td>
          <code />
        </td>
        <td>
          <code>col="sm"</code>
        </td>
        <td>
          <code>col="md"</code>
        </td>
        <td>
          <code>col="lg"</code>
        </td>
        <td>
          <code>col="xl"</code>
        </td>
        <td>
          <code>col="xxl"</code>
        </td>
      </tr>
      <tr>
        <th
          class="text-nowrap"
          scope="row"
        >
          # of columns
        </th>
        <td colspan="6">
          12
        </td>
      </tr>
      <tr>
        <th
          class="text-nowrap"
          scope="row"
        >
          Gutter width
        </th>
        <td colspan="6">
          1.5rem (.75rem on left and right)
        </td>
      </tr>
      <tr>
        <th
          class="text-nowrap"
          scope="row"
        >
          Custom gutters
        </th>
        <td colspan="6">
          <a href="#">Yes</a>
        </td>
      </tr>
      <tr>
        <th
          class="text-nowrap"
          scope="row"
        >
          NeTable
        </th>
        <td colspan="6">
          <a href="#">Yes</a>
        </td>
      </tr>
      <tr>
        <th
          class="text-nowrap"
          scope="row"
        >
          Column ordering
        </th>
        <td colspan="6">
          <a href="#">Yes</a>
        </td>
      </tr>
    </tbody>
  </b-table>
</template>
