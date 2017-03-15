import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CategoriesReducer from './categories_reducer';
import CategoryReducer from './category_reducer';
import GroupReducer from './group_reducer';
import GroupsReducer from './groups_reducer';
import HuddleReducer from './huddle_reducer';
import LoadingReducer from './loading_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  categories: CategoriesReducer,
  category: CategoryReducer,
  groups: GroupsReducer,
  group: GroupReducer,
  huddle: HuddleReducer,
  loading: LoadingReducer
});

export default RootReducer;
