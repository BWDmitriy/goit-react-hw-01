const FriendListItem = (prop) => {
  return (
    <div>
<img src={prop.avatar} alt="Avatar" width="48" />
  <p>{prop.name}</p>
  <p>{prop.status}</p>
    </div>
);
}
export default FriendListItem;