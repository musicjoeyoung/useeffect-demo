import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

/* -------------------------------------------------------------------------- */
/*                   Steps to get info and render it in JSX                   */
/* -------------------------------------------------------------------------- */
//0. npm install axios
//1. import useState, useEffect from 'react', import axios
//2. define some state (which will take on the value of the API data we get)
//3. define an Axios request (GET) function
//4. inside of that Axios request, use the state's setter function to set the state to response.data
//5. create a useEffect with EMPTY dependencies (which means it will run only on mount, one time)
//6. redner the data in JSX

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  const getProfiles = async () => {
    try {
      const response = await axios.get(
        "https://65afc92b2f26c3f2139bbec1.mockapi.io/users"
      );
      //console.log(response.data);
      setProfiles(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  //getProfiles();

  useEffect(() => {
    getProfiles();
  }, []);

  //console.log("Current state `profiles`: ", profiles);

  return (
    <>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <Link to={`/singleProfile/${profile.id}`}>
              {profile.firstName} {profile.lastName}
            </Link>
          </li>

          /*         <p key={profile.id}>
          {profile.firstName} {profile.lastName}
        </p> */
        ))}
      </ul>
    </>
  );
};

export default Profiles;
