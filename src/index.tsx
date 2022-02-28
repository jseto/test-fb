import React from 'react';
import { render } from 'react-dom'
import { FirebaseDatasource, FirebaseHelper } from '@entropic-bond/firebase'
import { Store } from 'entropic-bond'
import { App } from './app'
import { User } from './user/user'

new User()

FirebaseHelper.setFirebaseConfig({
  apiKey: "AIzaSyDSE6fMN1A_RWfx5p2V6BEBz_rpTi8k_W0",
  authDomain: "test-josep.firebaseapp.com",
  databaseURL: "https://test-josep.firebaseio.com",
  projectId: "test-josep",
  storageBucket: "test-josep.appspot.com",
  messagingSenderId: "827185653405",
  appId: "1:827185653405:web:3b476dbd3c78153ce39674"
})
Store.useDataSource( new FirebaseDatasource() )

render(<App/>, document.getElementsByTagName('App')[0]);

