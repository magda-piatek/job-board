import React, { useEffect } from "react";

import { fetchUser } from "../api/user-requests";

const Home = () => {
  useEffect(() => {
    const getUser = async () => {
      await fetchUser();
    };
    getUser();
  }, []);

  return <div>home</div>;
};

export default Home;
