import { Template } from "./TemplateList";

const TemplateCard = ({ item }: { item: Template }) => {
  return (
    <div className="flex flex-col gap-3 p-5 shadow-md rounded-md border bg-white cursor-pointer">
      <h2 className="text-lg font-medium">{item?.name}</h2>
      <p className="text-gray-500 line-clamp-3">{item?.desc}</p>
    </div>
  );
};

export default TemplateCard;
