<template>
  <button :class="$style.el"><slot/></button>
</template>

<style module lang="scss">
.el {
  border: none;
  margin: 0;
  padding: 10px 15px;
  width: auto;
  overflow: visible;
  cursor: pointer;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable `input` types in iOS */
  -webkit-appearance: none;

  display: inline-block;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  border-radius: 15px;
  background: rgba(241, 239, 239, 0.55);
  transition: 0.2s background ease-in-out;

  &:hover {
    background: rgba(241, 239, 239, 0.95);
  }
}
</style>
