import { Profile }  from './components/Profile';
import user from './user';

export const App = () => {
  return (
    <div className="App">
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    </div>
  );
};



