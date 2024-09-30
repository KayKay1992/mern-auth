import { combineReducers, configureStore} from '@reduxjs/toolkit'
import {persistReducer} from  'redux-persist'
import storage from 'redux-persist/lib/storage';
// Import your reducers
import userReducer from './user/userSlice.js';
import persistStore from 'redux-persist/es/persistStore';

const rootReducer =combineReducers({user: userReducer})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
 
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
   // Add your reducers here
    reducer: persistedReducer, 
     // Add your middleware here
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
       serializableCheck: false,
    }),
})

export const persistor = persistStore(store);