import React, { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const { users, isLoading } = useContext(GithubContext);

  // NOTE: Get initial users (testing purpose)
  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  return (
    <div>
      {isLoading && <Spinner />}

      {!isLoading && (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md-grid-cols-2">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default UserResults;
