import { Profile } from './components/comp_profile/Profile';
import user from './path/user';

import { Statistics }  from './components/comp_statistics/Statistics';
import data from './path/data';


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

<>
<Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
        </>
  </>
  );
};



