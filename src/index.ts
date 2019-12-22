import { useEffect, useState, useCallback } from 'react';
import { AppState, AppStateStatus } from 'react-native';

// This hook calls a callback when the React Native app's
// state changes (active, background, inactive).
export function useAppStateChange(
    callback: (state: AppStateStatus) => void,
    triggers: any[] = [],
) {
    useEffect(
        () => {
            AppState.addEventListener('change', callback);
            return () => AppState.removeEventListener('change', callback);
        },
        [callback, ...triggers],
    );
}

// This hook returns the current app state status
export function useAppState(): AppStateStatus {
    const [status, setStatus] = useState(AppState.currentState);
    useAppStateChange(setStatus);
    return status;
}

// This hook calls a callback when the React Native app's state changes
// to a desired state. Eg to listen to when the app becomes active, do:
// useAppStateChangedTo('active', () => alert('app opened'));
export function useAppStateChangedTo(
    desiredState: AppStateStatus,
    callback: () => void,
    triggers: any[] = [],
    ) {
        const callbackHook = useCallback(
        (state: AppStateStatus) => {
            if (state === desiredState) callback();
        },
        [desiredState, callback, ...triggers],
    );
    useAppStateChange(callbackHook, [callbackHook]);
}
