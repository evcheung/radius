# Get Started

This React Native project was started with the React Native CLI, and will need XCode downloaded (which includes the iOS Simulator) to run the app & Storybook. Download instructions are here: https://reactnative.dev/docs/0.8/getting-started

`wml` and Watchman are also needed to resolve the symlinking of the design system, which is not something that is supported in React Native. Watchman will watch files you specify and record when they change. `wml` uses Watchman to do so, and then copy changed files into another folder.
Download wml here: https://www.npmjs.com/package/wml and Watchman here: https://facebook.github.io/watchman/

Then in a terminal window within the `app` folder, you will need to tell `wml` to what files/folders to watch and where to copy them over. In this case, it is our local design system and our theme from the `common` workspace that we want to copy into our app's `node_modules` so we can use them as a package.

If `yarn install` has not been run yet on the root or on this workspace, do so first then run the below (say "Yes" to the prompt about ignoring the source folder's`node_modules`):

```
wml add ../ds ./node_modules/@radius/react-native-ds
wml add ../../common/theme ./node_modules/@radius/theme
```

Once this is done, run `wml start`.

Then run `yarn ios && yarn start` to start the app in the simulator.

In the off time when wml/Watchman fails and the app stops being able to resolve the above packages, try resetting with the below within the `app` directory:

```
wml rm all
watchman watch-del-all
rm -rf node_modules
wml add ../ds ./node_modules/@radius/react-native-ds
wml add ../../common/theme ./node_modules/@radius/theme
yarn install
wml start
yarn ios && yarn start --reset-cache
```
