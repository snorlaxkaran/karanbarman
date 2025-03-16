"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";

// eslint-disable-next-line @next/next/no-async-client-component
const MyGitHubActivity = async () => {
  return (
    <div>
      <GitHubCalendar
        username="snorlaxkaran"
        colorScheme="light"
        blockSize={12}
        blockRadius={50}
        hideColorLegend
        labels={{
          totalCount: "{{count}} contributions in the last half year",
        }}
      />
    </div>
  );
};

export default MyGitHubActivity;
