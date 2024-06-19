# nuxt/i18n
<hr>

## Composables

`useLocaleHead`

```vue
<script setup>
const i18nHead = useLocaleHead({
  addSeoAttributes: {
    canonicalQueries: ['foo']
  }
});
useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs.lang
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])]
});
</script>

```

## Components

`<NuxtLinkLocale>`

```vue
<template>
  <NuxtLinkLocale to="/">{{ $t('home') }}</NuxtLinkLocale>
</template>
```
