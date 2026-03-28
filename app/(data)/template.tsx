export const TEMPLATE_LIST = [
  {
    id: 1,
    name: "Blog Title",
    desc: "An AI Tool that generate blog title depends on your blog content",
    category: "Blog",
    icon: "",
    aiPromt:
      "Give me a 5 topic idea in bullt wise based on given niche & outline topic and give me result in rich text format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your Blog Niche",
        type: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter your Blog Outline",
        type: "textarea",
        name: "outline",
      },
    ],
  },
];
