<script setup>
const props = defineProps({
  contentTop: {
    type: String,
    default: '5em'
  },
  contentHeightOffset: {
    type: String,
    default: '2em'
  },
});

</script>

<template>
  <div>
    <slot name="header" />
    <Container type="xl" padding="y-md-2">
      <GridTemplate areas="s e c" areas-lg="sce" rows="auto auto auto" columns="100%" columns-lg="1fr 640px 160px" columns-xl="1fr 760px 1fr" columns-xxl="1fr 880px 1fr">
        <GridArea id="area-s" area="s" margin="e-md-4 s-md-3 s-xl-0" overflow="y-auto x-hidden" sticky="lg-top" z="1">
          <slot name="start" />
        </GridArea>
        <GridArea area="c">
          <Container type="8" margin="x-auto">
            <slot />
          </Container>
        </GridArea>
        <GridArea id="area-e" area="e" overflow="y-auto x-hidden" sticky="lg-top" z="0">
          <slot name="end" />
        </GridArea>
      </GridTemplate>
    </Container>
    <slot name="footer" />
    <BackToTop color="primary-subtle" />
  </div>
</template>

<style lang="scss" scoped>
#area-s {
  max-height: calc(100vh - (v-bind(contentTop) + v-bind(contentHeightOffset)));
  top: v-bind(contentTop);
}

#area-e {
  max-height: calc(100vh - (v-bind(contentTop) + v-bind(contentHeightOffset)));
  top: v-bind(contentTop);
  height: min-content;
}

/*
    #id スクロールで上がずれる問題
    scroll-margin-top 効果なし
    ヘッダーのposition-fixed 効果なし
    scriptでのscrollも動作しなかった
    https://github.com/nuxt/nuxt/pull/28320
    関係している可能性
    :target {
    scroll-margin-top: 100px;
  } */
</style>