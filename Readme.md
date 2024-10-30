# install expo and init app
1. npm install expo-cli -g
2. Migrate to using:

    2.1 npx create-expo-app --template

    2.2 Choose a template: » blank a minimal app as clean as an empty canvas

    2.3 Downloaded template.

📦 Using npm to install packages.

    2.4 Installed JavaScript dependencies.

3. install ESlint = npx expo lint, this will ask whether to install ESlint in your machine.
4. npm start : shows you some alternatives where you can pick web, android or IOS.
5. you will need the app : Expo go for Android or just use the camera on IOS.
6. Install dependencies, this is to run the app on the web.

    6.1 npx expo install react-native-web react-dom

    6.2 npx expo install @expo/metro-runtime

### If everything is fine at this point, you will be able to run your app.

7. Install prettier

    7.1 npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier

    7.2 prettier must be configured on the file .eslintrc.js with the following:

    7.3 module.exports = {
        extends: ['expo', 'prettier'],
        plugins: ['prettier'],
        rules: {
            'prettier/prettier': 'error',
        }
    };





