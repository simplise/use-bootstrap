<template>
  <div class="mt-4 container border-top">
    <footer>
      <nav class="mt-5">
        <div>
          <NuxtLink
            class="text-success"
            to="/helpers/clearfix"
          >
            ← Cleafix
          </NuxtLink>
        </div>
        <div class="text-end">
          <NuxtLink
            class="text-success"
            to="/helpers/ratios"
          >
            Ratios →
          </NuxtLink>
        </div>
      </nav>
      <p><br></p>
    </footer>
  </div>
</template>
<style>
footer nav{
	display: flex; /* flexbox */
	flex-wrap: wrap; /* 折返し指定 */
	gap: 0 4px; /* 余白（縦 横） */
}

footer nav div {
	flex-grow: 1; /* レスポンシブ化 */
}

footer nav p{
	margin: 2px;
	padding: 2px 6px;
}

#copyright {
	display: flex; /* flexbox */
	justify-content: center; /* 中央揃え */
	align-items: center; /* 中央揃え */
	margin-top: 4px;
	padding: 10px;
	background: #ffe4e1;
}
</style>
