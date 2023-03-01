import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { DashboardItem } from "../links";

const Dashboard = () => {
  const titleArray = [
    { title: "Energy", data: 8, comparison: 10, link: "/energy" },
    { title: "Exercise", data: 90, comparison: -10, link: "/exercise" },
    { title: "Emotion", data: 10, comparison: -20, link: "/emotion" },
    { title: "Eat", data: 80, comparison: 3, link: "/eat" },
  ];

  return (
    <SimpleGrid columns={[1, 1, 2, 2, 4]} gap={8}>
      {titleArray.map(({ title, data, comparison, link }, i) => (
        <DashboardItem
          key={i}
          text={title}
          subText={data}
          comparison={comparison}
          link={link}
        />
      ))}
    </SimpleGrid>
  );
};

export default Dashboard;
