import storage from 'redux-persit/lib/storage';
import { persitReducer } from 'redux-persit';

export default reducers => {
  const persitedReducer = persitReducer(
    {
      key: 'gobarber',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persitedReducer;
};
