var ghpages = require("gh-pages")

ghpages.publish(
  "__sapper__/export",
  {
    branch: "masters",
    repo: "https://github.com/jbtis/missions.pe",
    user: {
      name: "Mariano Bello",
      email: "social@missions.pe",
    },
  },
  () => {
    console.log("Deploy Complete!")
  },
)
