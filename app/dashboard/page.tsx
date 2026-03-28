"use client";
import { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateList from "./_components/TemplateList";

const Dashboard = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>("");
  const onSearchInput = (value: string) => {
    setUserSearchInput(value);
  };
  return (
    <div>
      {/* Search Section */}
      <SearchSection onSearchInput={onSearchInput} />
      {/* Template Section */}
      <TemplateList userSearchInput={userSearchInput} />
    </div>
  );
};

export default Dashboard;
