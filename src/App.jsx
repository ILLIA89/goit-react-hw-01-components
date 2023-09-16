import { Profile }  from './components/comp_profile/Profile';
import user from './path/user';

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



