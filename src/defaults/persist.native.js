// @flow

// $FlowIgnore
import { persistStore } from 'redux-persist';
import AsyncStorage from 'react-native'; // Supporting Expo SDK36

export default (store: any, options: {}, callback: any) =>
  persistStore(store, { storage: AsyncStorage, ...options }, callback);
