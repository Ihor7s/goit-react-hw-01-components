// import { Container } from './App.styled';


import { Profile } from '../Profile/Profile';
import user from '../../user.json';

import { Statistics } from '../Statistics/Statistics';
import stats from '../../data.json';

import { FriendList } from '../Friends/FriendList';
import friends from '../../friends.json';

import { TransactionHistory } from '../Transactions/TransactionHistory';
import transactions from '../../transactions.json';

export const App = () => {
  return (
    <>
      <Profile item={user} />
      <Statistics title="Upload stats" data={stats} />
      <FriendList data={friends} />
      <TransactionHistory data={transactions} />
    </>
  );
    
};