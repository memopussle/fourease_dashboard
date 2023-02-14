import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { DashboardItem } from "../links";

const Dashboard = () => {
  const titleArray = [
    { title: "Energy", data: 8, comparison: 10 },
    { title: "Exercise", data: 90, comparison: -10 },
    { title: "Emotion", data: 10, comparison: -20 },
    { title: "Eat", data: 80, comparison: 3 },
  ];

  return (
    <SimpleGrid columns={[1, 1, 2, 2, 4]} gap={8}>
      {titleArray.map(({ title, data, comparison }, i) => (
        <DashboardItem
          key={i}
          text={title}
          subText={data}
          comparison={comparison}
        />
      ))}
    </SimpleGrid>
  );
};

export default Dashboard;
