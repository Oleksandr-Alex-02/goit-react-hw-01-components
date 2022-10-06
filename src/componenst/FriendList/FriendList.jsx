import PropTypes from 'prop-types';
import clsx from "clsx";
import css from './FriendList.module.css';

export default function Friend(props) {
    const { friends } = props

    const friendsList = friends.map((friend) => {

        return < li className={css.friends__item} key={friend.id} >

            <span className={clsx(css.friends__status, friend.isOnline ? css.friend__online : css.friend__ofOnline)}></span>
            <img className={css.friends__avatar} src={friend.avatar} alt={friend.name} width="48" />
            <p className={css.friends__name}>{friend.name}</p>
        </li >
    })

    return (
        <div className={css.friends}>
            <ul className={css.friends__list}>
                {friendsList}
            </ul>
        </div>
    )
}

Friend.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })),
}

// const frientStyle = `friends__status + ${style}`;