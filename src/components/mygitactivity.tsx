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
        blockSize={10}
        blockRadius={50}
        transformData={(contributions) => {
          const currentYear = new Date().getFullYear();
          const currentMonth = new Date().getMonth();
          const shownMonths = 6;

          return contributions.filter((activity) => {
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();

            return (
              date.getFullYear() === currentYear &&
              monthOfDay > currentMonth - shownMonths &&
              monthOfDay <= currentMonth
            );
          });
        }}
        hideColorLegend
        labels={{
          totalCount: "{{count}} contributions in the last half year",
        }}
      />
    </div>
  );
};

export default MyGitHubActivity;
