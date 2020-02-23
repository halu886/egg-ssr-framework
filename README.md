# pc-4.0-demo

demo of pc`s 4.0 that research the new framework base of egg and build by webpack and render by vue 🐰

> it depend on [Egg-webpack-tuji](http://gogs.tuji.com/hongchun/egg-webpack-tuji) && [Egg-view-vue-tuji](http://gogs.tuji.com/hongchun/egg-view-vue-tuji) that encapsulation by [halu886🧑🏻‍💻](http://gogs.tuji.com/hongchun)。

<!-- TOC -->

- [pc-4.0-demo](#pc-40-demo)
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
- Client side hydration 🔨
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
