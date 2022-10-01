import PropTypes from 'prop-types';

export default function Friend(props) {
    const { friends } = props

    const friendsList = friends.map((friend) =>
        < li className="friends__item" key={friend.id}>
            <span className="friends__status">{friend.isOnline}</span>
            <img className="friends__avatar" src={friend.avatar} alt={friend.name} width="48" />
            <p className="friends__name">{friend.name}</p>
        </li >
    )

    return (
        <div className='friends'>
            <ul className='friends__list'>
                {friendsList}
            </ul>
        </div>
    )
}

PropTypes.friend = {
    friends: PropTypes.array,
}