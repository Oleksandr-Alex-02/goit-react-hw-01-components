import Profile from './componenst/Profile/Profile';
import Statistics from 'componenst/Statistics/Statistics';
import Friend from 'componenst/FriendList/FriendList';
import TransactionHistory from 'componenst/TransactionHistory/TransactionHistory';
import user from './componenst/Profile/user.json';
import data from './componenst/Statistics/data.json';
import friends from './componenst/FriendList/friends.json';
import transactions from './componenst/TransactionHistory/transactions.json'

export default function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      <Friend friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
