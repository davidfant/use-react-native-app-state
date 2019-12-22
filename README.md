
# use-appstate

This module makes it easy to use [React Native's AppState](https://facebook.github.io/react-native/docs/appstate) with React Hooks.

## Installation
```
yarn add use-appstate
```

## Usage

### useAppState

```ts
import { useAppState } from 'use-appstate';

function Component(props) {
    // Possible values: "active", "background", "inactive" (iOS only)
    const appState = useAppState();
    // ...
}
```

### useAppStateChange

```ts
import { useAppStateChange } from 'use-appstate';

function Component(props) {
    // Possible values: "active", "background", "inactive" (iOS only)
    useAppStateChange(
        (status: AppStateStatus) => alert('App state changed: ' + status),
        // triggers to update the callback
        [props.updateCallbackWhenThisPropsChanges],
    );
    // ...
}
```

### useAppStateChangedTo

```ts
import { useAppStateChangedTo } from 'use-appstate';

function Component(props) {
    // Possible values: "active", "background", "inactive" (iOS only)
    useAppStateChangedTo(
        'active', // AppStateStatus
        () => alert('App became active'),
        // triggers to update the callback
        [props.updateCallbackWhenThisPropsChanges],
    );
    // ...
}
```
