import storage from "redux-persist/lib/storage"; // Access to local storage
import { combineReducers } from "redux";
import appReducer from './slices/app';

const rootPersistConfig = {
  key: 'root',
  storage, // Use localStorage for persistence
  keyPrefix: "redux", // Prefix for the keys (optional)
  whitelist: ['app'], // Persist only the `app` state
  blacklist: [], // Do not persist anything else (optional)
};

const rootReducer = combineReducers({
  app: appReducer, // Combine the `app` reducer
});

export { rootPersistConfig, rootReducer };
