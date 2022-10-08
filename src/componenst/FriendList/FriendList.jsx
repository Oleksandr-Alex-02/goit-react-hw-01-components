import PropTypes from 'prop-types';
import clsx from "clsx";
import css from './FriendList.module.css';

export default function FriendList(props) {
    const { id, isOnline, avatar, name } = props

    return (<li className={css.friends__item} key={id}>
        <span className={clsx(css.friends__status, isOnline ? css.friend__online : css.friend__ofOnline)}></span>
        <img className={css.friends__avatar} src={avatar} alt={name} width="48" />
        <p className={css.friends__name}>{name}</p>
    </li>)
}

FriendList.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}