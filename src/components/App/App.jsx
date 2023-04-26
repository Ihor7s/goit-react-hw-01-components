// import { Container } from '../App/App.styled';


import { Profile } from '../Profile/Profile';
import user from '../../user.json';

import { Statistics } from '../Statistics/Statistics';
import stats from '../../data.json';

// import { FriendList } from '../Friends/FriendList';
// import friends from '../../friends.json';

export const App = () => {
  return (
    <>
      <Profile item={user} />
      <Statistics title="Upload stats" data={stats} />
  
    </>
  );
};
