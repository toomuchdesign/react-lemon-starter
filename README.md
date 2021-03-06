# React lemon starter 🍋

A personal collection of React bad/best practices.

```
                       .-.
                      /  .\
                    .' .  .'.
                 .-'. .    . '-._
               .' ..    . . . .  '.
              /. .    .        .  .\
             / .  . .     . .. . .  \
            |. .  .      .. . . ...  |
            / . .     .       .  .  .\
           | . . ._______ .. . .  . ..|
           |   . / react \ .   . .  . |
           |. . {  lemon  }. ..   . ..|
           |.  . \starter_/.     .   ..|
           | .  .          . . . . .  |
           |. .     .    .. .   .   ..|
            \  . .        .  . .  . . /
            |  .  .      .  .  . . . |
             \. .     .  . .  .. . .'
              \  ..      .. .   . /
               ':_ .  .  . ... _.'
                  '-.. . .  .-'
                      '._..'

http://ascii.co.uk/art/lemon

```

## Set up the project for the first time

React lemon starter requires [NodeJS](https://nodejs.org) and [NPM](https://www.npmjs.com) installed on your machine.

### If setting up the project on a server
```sh
# Automatically install NPM dependencies (in production mode)
npm run setup
```

### If your are a developer
```sh
# Use NPM install/update methods
npm update && npm install
```

## Run the project
Currently you can choose between:

- **building** the application with `npm run build`
- **serving** it in browser and watch for changes with `npm run serve` or `npm run serve:build`
- **build some nice webpack statistics** with `npm run stats:serve`. [Read more here](https://github.com/th0r/webpack-bundle-analyzer).

Both `build` and `serve` command accept an optional `-- --env.extractcss` argument which enables **CSS extraction into a real file**.

### Environment variables

**Before firing any build/serve task**, you have to **choose which environment** you're going to deploy.

**Environment variables** are loaded into global **process.env** from **.env** file by [webpack-dotenv-plugin](https://www.npmjs.com/package/webpack-dotenv-plugin) webpack plugin.

An **.env** file can be automatically generated by one of the following NPM tasks:
```sh
npm run dev
npm run prod
```

The project might need to change/add some environment variable. You can easily do so by editing `generate-envfile.js` file.

### A note about NODE_ENV var
**NODE_ENV** var is an environment variable which usually has special meanings inside plugins/libraries.

This is why **NODE_ENV** is directly set into webpack configuration.

- **webpack.config.local:** NODE_ENV = development
- **webpack.config.publish:** NODE_ENV = production

### Dev server with custom url
If you need the dev server to serve the project on a custom url (eg. `www.lemon.loc`), do the following:
- Set `customLocalHost` variable to `www.lemon.loc` in `src/tools/webpack/webpack.config.server`
- Edit your host file and map your `localhost` to `lemon.loc`.

## Tests
**Unit tests** currently relies on:
- [Jest](https://facebook.github.io/jest)
- [Enzyme](https://github.com/airbnb/enzyme)
- [react-element-to-jsx-string](https://github.com/algolia/react-element-to-jsx-string)

### A note about testing components by string comparison
Sometimes, the strategy of transforming a component output into a string and comparing it with another expected string can produce unexpected failures:

- The component has a dynamic **"key" attribute** which expected component string is not able to reproduce

- The component has **child components** to which it passes **functions as properties**. Even if these functions are mocked into expected component, **Jests**'s **.toEqual()** will trigger an equality check between the functions, and it will fail

When the an easy string comparison fails, **actual** and **expected** component strings are with **react-element-to-jsx-string** and only then compared.

### Some references about testing React
- https://blog.algolia.com/how-we-unit-test-react-components-using-expect-jsx/
- https://github.com/airbnb/enzyme
- https://github.com/MoOx/phenomic/blob/0.19.5/src/components/Link/__tests__/index.js
- http://redux.js.org/docs/recipes/WritingTests.html
- https://github.com/kentcdodds/react-jest-workshop
- https://github.com/kentcdodds/react-jest-workshop/blob/master/exercises-final/components/Toggle.test.js

## Code checking/linting

### Code style checking: Eslint + AirBnb styleguide
**Code style linting** relies on **[Eslint](http://eslint.org/)** + **[AirBnb JS styleguide](https://github.com/airbnb/javascript)**.

In order to run Eslint on the project use `npm run lint` command.

#### Integrate Eslint into Atom editor
Install Atom's [linter-eslint](https://atom.io/packages/linter-eslint) package to have dynamic code linting. If using another IDE please find its **Eslint extension**.

If AirBnb/eslint configuration casts stupid errors, try to install AirBnb-related packages with the following node commands. [Read more here](https://github.com/airbnb/javascript/blob/eslint-config-airbnb-base-v10.0.1/packages/eslint-config-airbnb/README.md#eslint-config-airbnb-1).

```
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

### Code style consistency: .editorconfig
[**EditorConfig**](http://editorconfig.org/#download) helps your IDE to stick to project styleguide. It just automatically applies the rules specified in **.editorconfig** to your IDE.

Please install the [.editorconfig extension](http://editorconfig.org/#download) on your favourite IDE.

### Type checking: Flow
The project includes [Flow](https://flowtype.org/) as a dev dependency. Flow is a JS **static type checker** in part similar to Microsoft's Typescript.

**Flow** is installed as a node module and it runs with `npm run flow` command. Only files starting with `// @flow` comment notation will be parsed.

#### Integrate Flow into Atom editor.
- Install [linter-flow](https://atom.io/packages/linter-flow) package
- Set **linter-flow** `executablePath` configuration to `./node_modules/.bin/flow`.

## Dev tools
The application is ready to nicely interact with:
- [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [React devtools](https://github.com/facebook/react-devtools)

Install them on your browser (completely optional).

### Hot modules replacement
**[React's Hot loader](https://gaearon.github.io/react-hot-loader/)** is kept separated from production environment (please note that It's a dev dependency) by requiring it just in a dedicated application entrypoint (index.local.jsx) which is used only in development mode.

## Project structure
Currently the project is organized by grouping files **by feature**: all files related to one feature are inside the same folder.

### Some hints on how to structure the project:
- https://medium.com/front-end-hacking/structuring-react-and-redux-applications-255361d24f84#.hr6guf7jv
- Ducks: https://github.com/erikras/ducks-modular-redux
- https://medium.freecodecamp.com/scaling-your-redux-app-with-ducks-6115955638be#.t3y698fgl

## Useful libraries

### Portals/gateways
- [react-gateway](https://www.npmjs.com/package/react-gateway)
- [react-outlet](https://www.npmjs.com/package/react-outlet)
- [react-warp-portal](https://www.npmjs.com/package/react-warp-portal)

### Layout grids (CSS only)
- [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid)
- [radium-grid](https://github.com/formidablelabs/radium-grid/)

### Layout grids (Dynamic resize on Runtime)
- [reflexbox](https://github.com/jxnblk/reflexbox/)
- [react-responsive](https://github.com/contra/react-responsive)
- [react-responsive-grid](https://github.com/KyleAMathews/react-responsive-grid)

## Todo's
- Switch to custom dev server? [See here](https://github.com/gaearon/react-hot-loader/tree/master/docs#starter-kits)
- [use-named-routes](https://github.com/taion/use-named-routes) module is unmantained. Consider to move to react-router 4
- Setup [Lodash babel plugin](https://github.com/lodash/babel-plugin-lodash)
- Setup [Webpack optimise-js plugin](https://github.com/vigneshshanmugam/optimize-js-plugin)
- Setup Webpack splitting points when switched to `react-router 4` or when [this](https://github.com/gaearon/react-hot-loader/issues/249#issuecomment-212005628) or [this](https://github.com/gaearon/react-hot-loader/issues/288) get fixed.
- Update [postcss-smart-import](https://github.com/sebastian-software/postcss-smart-import) when switched to node > 6
- Remove `eslint-disable react/no-unused-prop-types` from the codebase when [this](https://github.com/yannickcr/eslint-plugin-react/issues/811) is fixed.
- Setup Flow
