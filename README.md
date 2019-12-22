
# use-react-native-app-state

This module makes it easy to use [React Native's AppState](https://facebook.github.io/react-native/docs/appstate) with React Hooks.

## Installation
```
yarn add use-react-native-app-state
```

## Usage

### useAppState

```ts
import { useAppState } from 'use-react-native-app-state';

function Component(props) {
    // Possible values: "active", "background", "inactive" (iOS only)
    const appState = useAppState();
    // ...
}
```

### useAppStateChange

```ts
import { useAppStateChange } from 'use-react-native-app-state';

function Component(props) {
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
import { useAppStateChangedTo } from 'use-react-native-app-state';

function Component(props) {
    useAppStateChangedTo(
        // Possible values: "active", "background", "inactive" (iOS only)
        'active',
        () => alert('App became active'),
        // triggers to update the callback
        [props.updateCallbackWhenThisPropsChanges],
    );
    // ...
}
```
