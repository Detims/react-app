import { useParams } from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import Clock from "./Clock";
import Person from "./Person";

const Profile = () => {
  const { name } = useParams()

  return (
    <div>
      <h1>Placeholder profile page</h1>
      <p>Placeholder bottom percent</p>
      {name === "clock" ? (
        <Clock />
      ) : name === "person" ? (
        <Person />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};
  
  export default Profile;