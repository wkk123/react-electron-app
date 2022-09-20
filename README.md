# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
## npx create-react-app my-electron-app --template typescript 项目搭建

## npm install react@17.0.2 react-dom@17.0.2 --save 降低版本

## npm i react-router-dom@5.2.0 react-router@5.2.0 react-router-config @types/react-router-config @types/react-router-dom -S
# 添加 less

## npm i less less-loader -S 
## npm run eject 暴露 congig 文件

### 找到config文件夹目录下wedpack.config.js文件，在70行左右有个cssRegex，在此处添加

# // less
# const lessRegex = /\.less$/;
# const lessModuleRegex = /\.module\.less$/;



# 配置别名@(选配) config.js 中 webpack.config.js 中搜索alias

<!--

alias: {
  // Support React Native Web
  // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
  'react-native': 'react-native-web',
  // Allows for better profiling with ReactDevTools
  ...(isEnvProductionProfile && {
    'react-dom$': 'react-dom/profiling',
    'scheduler/tracing': 'scheduler/tracing-profiling',
  }),
  ...(modules.webpackAliases || {}),
  // 文件路径别名
  '@': path.resolve(__dirname, '../src'),
  '@view': path.resolve(__dirname, '../src/view'),
}, 

-->


# npm i --save-dev electron

# react更新同步更新electron
# npm install concurrently --save-dev

# npm install wait-on --save-dev

# 更新不打开浏览器
# npm install cross-env

# electron热更新
# npm install -g nodemon
