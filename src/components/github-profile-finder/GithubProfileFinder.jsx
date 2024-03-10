
import { useEffect } from "react";
import { useState } from "react";
import User from "./User";
import './styles.css';

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("sangammukherjee");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchUserDataFromGithub = async () => {
    setIsLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setIsLoading(false);
      setUserName('');
      console.log(data);
    }

  };
  const handleSubmit = () => {
    fetchUserDataFromGithub();
  };
  useEffect(() => {
    fetchUserDataFromGithub();
  }, [])
  if (isLoading) {
    return (<h1>Loading... Please wait</h1>);
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter the username"
          name="search-by-username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <div>
        {userData !== null ? <User user={userData} /> : null}
      </div>
    </div>
  );
};

export default GithubProfileFinder;
