var ghpages = require("gh-pages")

ghpages.publish(
  "__sapper__/export/missions.pe",
  {
    branch: "master",
    repo: "https://github.com/jbtis/missions.pe.git",
    user: {
      name: "Mariano Bello",
      email: "social@missions.pe",
    },
  },
  () => {
    console.log("Deploy Complete!")
  },
)
