import Profile from './componenst/Profile/Profile';
import Statistics from 'componenst/Statistics/Statistics';
import user from './componenst/Profile/user.json';
import data from './componenst/Statistics/data.json';

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
      <Statistics stats={data} />;
    </div>
  );
}
