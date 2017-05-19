# webpack-polyfill

There is an [api] available in [webpack] for modules. Unfortunately if you have a universal application that is _not_ built with webpack using that API will break your application. This polyfill allows for limited use of the webpack module API without running your code through webpack. Support functions are:

 * `require.ensure`
 * `require.context`
 * `require.resolveWeak`

**NOTE: It is recommended you do NOT use this and instead build your server properly with webpack. Unfortunately it may not always possible to do this because of your project's political or legacy requirements.**

[webpack]: https://webpack.github.io
[api]: https://webpack.github.io/docs/api-in-modules.html