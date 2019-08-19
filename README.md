# brainhub

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

This Monorepo

## Fetch dependencies
```
npm install
```
```
lerna clean
```
```
lerna bootstrap
```
```
lerna run build;node .\packages\stuff\
```
```
npm t -- --watch
```
```
```
```````````````````````````````````````````````````````````
To start application :
- cd packages
-cd common
- npm run build
```
on first terminal console use to run node : 
cd packages
cd backend
npm run startT

````
on second terminal console use to run mongo:
cd packages
cd backend
mongo

````
on third terminal console use to run mongo databse:
cd packages
cd backend
mongod

````
on fourth terminal console use to run react-redux:
cd packages
cd front
lerna bootstrap

```then````

npm run start
```````````````````````````````````````````````````````````````````
To run test e2e :
-run aplication
-then
cd packages
cd front
-next in file test.js are tests to run them use
npm run testN
```````````````````````
To run tests jest :
- be in \brainhub\ 
-run 
    npm run test