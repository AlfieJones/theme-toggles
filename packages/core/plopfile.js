export default function (plop) {
  plop.setGenerator("Story", {
    description: "Create a story for a toggle",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Toggle name: ",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/stories/toggles/{{dashCase name}}",
        base: `templates/story/`,
        templateFiles: "templates/story/**/*.hbs",
      },
    ],
  });
}
