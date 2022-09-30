import PropTypes from 'prop-types';

export default function Friend(props) {
    const { friends } = props

    const friendsList = friends.map((friend) =>
        < li className="item" key={friend.id}>
            <span className="status">{friend.isOnline}</span>
            <img className="avatar__friend" src={friend.avatar} alt={friend.name} width="48" />
            <p className="name">{friend.name}</p>
        </li >
    )

    return (
        <div>
            <ul>
                {friendsList}
            </ul>
        </div>
    )
}

PropTypes.friend = {
    friends: PropTypes.array,
}