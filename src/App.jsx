import { Profile } from './components/comp_profile/Profile';
import user from './path/user';

import { Statistics } from './components/comp_statistics/Statistics';
import data from './path/data';

import { FriendList } from './components/comp_friends/FriendList';
import friends from './path/friends';

import { TransactionHistory } from './components/comp_transaction/TransactionHistory';
import transactions from './path/transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
};
