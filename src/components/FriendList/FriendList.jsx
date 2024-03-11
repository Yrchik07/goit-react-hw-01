import FriendListItem from '../FriendListItem/FriendListItem';
import css from '../FriendList/FriendList.module.css';
import clsx from 'clsx';
const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
        return (
          <>
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </>
        );
      })}
    </ul>
  );
};

export default FriendList;
