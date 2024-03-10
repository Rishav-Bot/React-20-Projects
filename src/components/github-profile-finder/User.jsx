const User = ({ user }) => {
  const {
    avatar_url,
    created_at,
    followers,
    followings,
    name,
    login,
    public_repos,
  } = user;
  const createdDate = new Date(created_at);
  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt="User" className="avatar" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info">
        <div>
          <p>Public Repos:</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Followings:</p>
          <p>{followings}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
