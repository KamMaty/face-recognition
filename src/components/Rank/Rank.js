import React from "react";

const Rank = ({ username, userEntries }) => {
  return (
    <div>
      <div className="white f3">{`${username} your entry count is...`}</div>
      <div className="white f1">{userEntries}</div>
    </div>
  );
};

export default Rank;
