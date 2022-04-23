import { useRouter } from "next/router";
import React from "react";

export default function Song({}) {
  const router = useRouter();
  return (
    <div data-theme="mytheme">
      <p>SONG</p>
    </div>
  );
}
