import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/aymaan-shabbir")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);
  const data = useLoaderData();
  return (
    <div className="bg-gray-600 text-center text-3xl p-4 text-white m-3">
      Github Followers :{data.followers}
      <img className="" src={data.avatar_url} alt="Git picture" width={200} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/aymaan-shabbir");
  return response.json();
};
