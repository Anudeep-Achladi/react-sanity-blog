export default {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    {
      name: "person_name",
      title: "Name",
      type: "string",
    },

    {
      name: "bio",
      title: "Your details",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
    {
      name: "interests",
      title: "Interests",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "image",
      title: "Your image here",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "social_media",
      title: "Github link",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "person_name",
      type: "image",
    },
  },
};
