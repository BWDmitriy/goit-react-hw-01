import "./Profile.module.css";

const Profile = (prop) => {
  return (
    <div className="profile-wrap">
        <div>
            <img
                src={prop.image}
                alt="User avatar"
            />
            <p>{prop.name}</p>
            <p>@{prop.tag}</p>
            <p>{prop.location}</p>
        </div>

        <ul>
            <li>
                <span>Followers</span>
                <span>{prop.stats.followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span>{prop.stats.views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span>{prop.stats.likes}</span>
            </li>
        </ul>
    </div>
);
}

export default Profile;