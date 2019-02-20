const path = require("path");

module.exports = {
  styleguideDir: "docs/",
  skipComponentsWithoutExample: true,
  require: [path.join(__dirname, "styles/styleguidist.scss")],
  sections: [
    {
      //name: "Colors",
      content: "./styleguide/docs/colors.md",
      components: "./styleguide/components/ColorSample.js",
      exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
      usageMode: "collapse" // 'hide' | 'collapse' | 'expand'
    },
    {
      name: "Button MD",
      //content: "docs/ui.md",
      components: "./styleguide/components/ButtonMD.js",
      exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
      usageMode: "collapse" // 'hide' | 'collapse' | 'expand'
    },
    {
      name: "Tooltip",
      //content: "docs/ui.md",
      components: "./styleguide/components/Tooltip.js",
      exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
      usageMode: "collapse" // 'hide' | 'collapse' | 'expand'
    },
    {
      name: "Simple UI Components",
      //content: "docs/ui.md",
      components: "src/components/simple/*.js",
      exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
      usageMode: "expand" // 'hide' | 'collapse' | 'expand'
    },
    {
      name: "Advanced Components",
      //content: "docs/ui.md",
      components: ["src/components/advanced/*.js"],
      exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
      usageMode: "expand" // 'hide' | 'collapse' | 'expand'
    }
  ],
  assetsDir: ["styleguide/images", "styleguide/fonts"]
};
