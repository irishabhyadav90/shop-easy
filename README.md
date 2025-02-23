# SHOP-EASY

A React Native e-commerce application built with Expo.

##  Running the Project

### Prerequisites
- Node.js (v20 or higher)
- npm
- Expo CLI

### Installation

```bash

git clone https://github.com/irishabhyadav90/shop-easy.git

touch .env

# Please put the baseUrl in env -> BASE_URL=https://prodapp.lifepharmacy.com/api

touch .env

# Please put the baseUrl in env -> BASE_URL=https://prodapp.lifepharmacy.com/api

npm install -g expo-cli

npm run clean-install

# Run on IOS
npm run ios

# Run on Android
npm run android

```


### Testing

```bash
 npm run test
```


###  Performance Optimizations

- React Native Reanimated for UI thread animations, to keep our animations away from JS thread
- react-native-size-matters for responsive layouts across all devices
- Unit test cases coverage with Jest
- Decoupled implementation using custom hooks and Tanstack Query, component modular design


###  Future scope

- We could use Redux implementation for complex state management, basis the business requirement
- Pre-commit hooks and GitHub actions for test automation
- Localization support
- Current Fuzzy is via Backend-integration, since Fuzzy would be static on the Frontend.