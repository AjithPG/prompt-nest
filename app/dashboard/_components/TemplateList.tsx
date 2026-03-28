"use client";
import { TEMPLATE_LIST } from "@/app/(data)/template";
import TemplateCard from "./TemplateCard";
import React, { useMemo } from "react";

export interface Template {
  id: number;
  name: string;
  desc: string;
  category: string;
  icon: string;
  aiPromt: string;
  slug: string;
}

export interface Form {
  label: string;
  type: string;
  name: string;
  required: boolean;
}

const TemplateList = ({ userSearchInput }: { userSearchInput: string }) => {
  const templateList = useMemo(() => {
    return TEMPLATE_LIST.filter((item: Template) =>
      item.name.toLowerCase().includes(userSearchInput?.toLowerCase() || ""),
    );
  }, [userSearchInput]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {templateList.map((item: Template) => (
        <TemplateCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default TemplateList;
