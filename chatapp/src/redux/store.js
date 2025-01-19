import { configureStore } from '@reduxjs/toolkit';
import { useSelector as useAppSelector, useDispatch as useAppDispatch } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import { rootPersistConfig, rootReducer } from './RootReducer';

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);

// Use directly rather than renaming and re-exporting
const useSelector = useAppSelector;
const useDispatch = () => useAppDispatch();
const { dispatch } = store;

export { store, persistor, useSelector, dispatch, useDispatch };
