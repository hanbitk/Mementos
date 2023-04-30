import React from "react";
import { useParams } from "react-router-dom";
import { datas } from "../shared/datas";

function FeedDetail() {
  const params = useParams();

  const foundData = datas.find((data) => data.id === parseInt(params.id));

  return <div>
    <p>{foundData.description}</p>
  </div>;
}

export default FeedDetail;
