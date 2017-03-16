import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as SessionAPIUtil from './util/session_api_util';
import * as CategoryAPIUtil from './util/categories_api_util';
import * as GroupAPIUtil from './util/groups_api_util';
import * as GroupsUsersAPIUtil from './util/groups_users_api_util';
import * as HuddleAPIUtil from './util/huddles_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.createGroupsUser = GroupsUsersAPIUtil.createGroupsUser;
  window.deleteGroupsUser = GroupsUsersAPIUtil.deleteGroupsUser;
  window.createGroup = GroupAPIUtil.createGroup;
  window.createHuddle = HuddleAPIUtil.createHuddle;
  window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
