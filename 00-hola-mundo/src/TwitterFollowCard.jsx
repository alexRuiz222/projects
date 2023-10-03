import PropTypes from "prop-types";
import { useState } from "react";

// Parameters description
/*
 * @param {string} children - The children of the component
 * @param {function} formatUserName - The function to add @ to the username
 * @param {string} userName - The username of the user
 * @param {boolean} isFollowing - Whether the user is following
 */
export function TwitterFollowCard({
  children,
  formatUserName,
  userName,
  initialIsFollowing,
  unFollow
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const buttonText = isFollowing ? "Following" : "Follow";
  const buttonClassName = isFollowing ? "is-following" : "";

  const clickFollow = () => {
    setIsFollowing(!isFollowing);
    if(isFollowing){
      unFollow(userName);
    }
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          alt="alex"
          src={`https://unavatar.io/${userName}`}
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong> {children} </strong>
          <span>{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button
          className={`tw-followCard-button ${buttonClassName}`}
          onClick={clickFollow}
        >
          <span className="tw-followCard-button-follow">{buttonText}</span>
          <span className="tw-followCard-button-unFollow">Un follow</span>
        </button>
      </aside>
    </article>
  );
}

// Props validation
TwitterFollowCard.propTypes = {
  children: PropTypes.node.isRequired,
  formatUserName: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  initialIsFollowing: PropTypes.bool.isRequired,
  unFollow: PropTypes.func
};
