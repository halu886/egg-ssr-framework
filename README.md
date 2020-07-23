# egg-ssr-framework

demo of pc`s 4.0 that research the new framework base of egg and build by webpack and render by vue 🐰

> it depend on [Egg-webpack-halu886](https://github.com/halu886/egg-webpack-halu886) && [Egg-view-vue-halu886](https://github.com/halu886/egg-view-vue-halu886) that encapsulation by [halu886🧑🏻‍💻](http://github.com/halu886)。

<!-- TOC -->

- [egg-ssr-framework](#egg-ssr-framework)
    - [Checkout List](#checkout-list)
    - [QuickStart](#quickstart)
        - [Development](#development)
        - [Deploy](#deploy)
        - [npm scripts](#npm-scripts)

<!-- /TOC -->

## Checkout List

- Framework init ☑️
- Vue component render ☑️
- Webpack bundler ☑️
- Template cache ☑️
- Inject data to template ☑️
- intergration lru module ☑️
- Client side hydration ☑️
- Authority interceptor 🔨

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

[egg]: https://eggjs.org
