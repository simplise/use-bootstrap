<template>
	<Navbar class="navbar-vertical flex-column"> 
		 <slot />
	</Navbar>
</template>

<script lang="ts" setup>
 import Navbar from '../../bootstrap/navbar/navbar'

</script>

<style lang="scss" scoped>

.navbar-vertical.navbar {


}
.navbar{
	align-items: start;
}

:deep(.navbar-collapse) {
	flex-direction: column;
}

:deep(.navbar-nav) {
	flex-direction: column;
}



</style>