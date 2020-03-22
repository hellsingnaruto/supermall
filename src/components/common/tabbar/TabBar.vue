<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
</script>

<style scoped>
	#tab-bar{
		display: flex;
		position: fixed;
		z-index: 9;
		right: 0;
		left: 0;
		bottom:0;
		background-color: #f1f1f1;
		box-shadow: 0 -2px 10px rgba(200,200,200,0.6);
	}
</style>
