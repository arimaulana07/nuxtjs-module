import { defineNuxtModule, addPlugin, createResolver, addComponent, installModule } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    /* Add Component */
    await addComponent({
      name: 'FooBar',
      export: 'FooBar',
      filePath: resolver.resolve('runtime/components/FooBar.vue'),
    });

    /* Add Pinia Module */
    await installModule('@pinia/nuxt');

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
