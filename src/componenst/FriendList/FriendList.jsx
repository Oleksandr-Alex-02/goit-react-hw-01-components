import PropTypes from 'prop-types';
import clsx from "clsx";
import css from './FriendList.module.css';

export default function FriendList(props) {
    const { friends } = props

    return friends.map((friend) => {

        return <li className={css.friends__item} key={friend.id}>
            <span className={clsx(css.friends__status, friend.isOnline ? css.friend__online : css.friend__ofOnline)}></span>
            <img className={css.friends__avatar} src={friend.avatar} alt={friend.name} width="48" />
            <p className={css.friends__name}>{friend.name}</p>
        </li>
    })
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })),
}