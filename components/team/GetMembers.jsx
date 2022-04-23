import React from "react";
import Member from "./Member";

function GetMembers({ data }) {
  return (
    <div>
      {data.map((member) => {
        <Member data={member} />;
      })}
    </div>
  );
}

export default GetMembers;
