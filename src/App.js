import Profile from "./componenst/Profile.react/Profile";
import user from "./user.json";

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
      ;
    </div>
  );
}
