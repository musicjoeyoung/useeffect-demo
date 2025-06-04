import "./SingleProfile.scss";

import { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

const SingleProfile = () => {
  const { profileId } = useParams();
  const [singleProfile, setSingleProfile] = useState(null);

  const fetchSingleProfile = async () => {
    try {
      const response = await axios.get(
        `https://65afc92b2f26c3f2139bbec1.mockapi.io/users/${profileId}`
      );
      //console.log(response.data);
      setSingleProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleProfile();
  }, []);

  if (!singleProfile) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <>
        <h2>Single Profile</h2>
        <div>
          <p>
            <strong>Name: </strong>
            {singleProfile.firstName} {singleProfile.lastName}
          </p>
          <p>
            <strong>Phone: </strong>
            {singleProfile.phoneNumber}
          </p>
          <p>
            <strong>Address: </strong>
            {singleProfile.address}
          </p>
          <img src={singleProfile.image} alt="profile photo" />
          {/*           <img
            src="https://ca-times.brightspotcdn.com/dims4/default/a512eed/2147483647/strip/true/crop/3000x2000+0+0/resize/1200x800!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fe8%2Fb4%2F22556fcd4c969025824b7c45a85f%2Fmusic-beyonce-20322.jpg"
            alt="Bey"
          /> */}
        </div>
      </>
    );
  }
};

export default SingleProfile;
