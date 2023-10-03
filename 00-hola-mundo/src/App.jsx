import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const formatUserName = (userName) => `@${userName}`;
  const unFollowedUser = useState();
  const [alert, setAlert] = useState('');
  const [fadeOut, setFadeOut] = useState(true);
  const unFollow = (userName) => {
    unFollowedUser[1](userName);
    setFadeOut(false);
    setAlert(<span>
      You have unfollowed <b>{formatUserName(userName)}</b>
    </span>)
    setTimeout(() => {
      setFadeOut(true);
    },3000);
  };

  const users = [
    {
      name: "Alex Ruiz",
      userName: "alexRuiz222",
      isFollowing: true,
    },
    {
      name: "Miguel Ángel Durán",
      userName: "midudev",
      isFollowing: false,
    },
    {
      name: "Manz Dev",
      userName: "manzdev",
      isFollowing: false,
    },
    {
      name: "Dominicode",
      userName: "domini-code",
      isFollowing: true,
    },
    {
      name: "Gentleman-Programming",
      userName: "gentleman-programming",
      isFollowing: false,
    },
  ];

  return (
    <section className="App">
      {users.map(({ name, userName, isFollowing }) => (
        <TwitterFollowCard
          className="tw-followCard"
          key={userName}
          formatUserName={formatUserName}
          userName={userName}
          initialIsFollowing={isFollowing}
          unFollow={unFollow}
        >
          {name}
        </TwitterFollowCard>
      ))}
      <div className={`alert ${fadeOut? "fade-out" : ""}`}>{alert}</div>
    </section>
  );
}
