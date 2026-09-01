// Site structure. Add a page here and it appears in the nav automatically.
module.exports = {
  title: "SkillUp",
  tagline: "Agent Skills, from zero to advanced",
  baseUrl: "/skillup/",
  repo: "https://github.com/aprildunnam/skillup",
  sections: [
    {
      id: "100",
      slug: "100-foundations",
      label: "Foundations",
      level: "100",
      blurb: "What a skill is and why you'd want one.",
      pages: [
        ["index", "Skills in ninety seconds"],
        ["anatomy", "Anatomy of a SKILL.md"],
        ["how-it-fires", "How the agent decides to use it"],
        ["which-is-which", "Skill, instruction, knowledge, or tool"],
        ["where-they-live", "Where skills live"],
        ["checkpoint", "Checkpoint"]
      ]
    },
    {
      id: "200",
      slug: "200-authoring",
      label: "Authoring",
      level: "200",
      blurb: "Writing one that actually fires.",
      pages: [
        ["index", "The authoring mindset"],
        ["descriptions", "The description is the whole ballgame"],
        ["naming", "Naming rules that aren't optional"],
        ["body-structure", "Body structure that works"],
        ["examples", "Show, don't tell"],
        ["failure-modes", "The five ways skills fail"],
        ["rewrites", "Before and after"],
        ["testing", "The tightening loop"]
      ]
    },
    {
      id: "300",
      slug: "300-shipping",
      label: "Shipping",
      level: "300",
      blurb: "Getting it running everywhere.",
      pages: [
        ["index", "One file, many shelves"],
        ["copilot-studio", "Copilot Studio"],
        ["m365", "M365 Copilot and SharePoint"],
        ["github-copilot", "GitHub Copilot and VS Code"],
        ["portability", "The portability matrix"],
        ["sharing", "Sharing and packaging"]
      ]
    },
    {
      id: "400",
      slug: "400-advanced",
      label: "Advanced",
      level: "400",
      blurb: "Skills at scale.",
      pages: [
        ["index", "What changes at scale"],
        ["tokens", "The token economy"],
        ["skills-plus-tools", "Skills that drive tools"],
        ["bundles", "Bundled assets"],
        ["skill-sets", "Designing a skill set"],
        ["evals", "Evaluating skills"],
        ["governance", "Versioning and governance"]
      ]
    },
    {
      id: "scenarios",
      slug: "scenarios",
      label: "Scenarios",
      blurb: "Five end to end builds at April's Acoustic Cafe.",
      pages: [
        ["index", "The showcase"],
        ["crate-to-shelf", "Crate to shelf"],
        ["open-mic", "Open mic night"],
        ["consignment", "Consignment intake"],
        ["lesson-studio", "The lesson studio"],
        ["counter-service", "Counter service"]
      ]
    },
    {
      id: "samples",
      slug: "samples",
      label: "Samples",
      blurb: "Six annotated skills you can read end to end.",
      pages: [
        ["index", "Six annotated skills"],
        ["vinyl-condition-grading", "vinyl-condition-grading"],
        ["used-record-pricing", "used-record-pricing"],
        ["open-mic-runsheet", "open-mic-runsheet"],
        ["consignment-intake", "consignment-intake"],
        ["lesson-recap-note", "lesson-recap-note"],
        ["shop-site-review", "shop-site-review"]
      ]
    },
    {
      id: "lab",
      slug: "lab",
      label: "Lab",
      blurb: "Three tools. Build one, test it, find out what broke.",
      pages: [
        ["index", "The lab"],
        ["forge", "Skill Forge"],
        ["decide", "Should this be a skill?"],
        ["ideas", "Skill idea generator"]
      ]
    },
    {
      id: "resources",
      slug: "resources",
      label: "Resources",
      blurb: "Where to get skills once you know how to write them.",
      standalone: true,
      pages: [["index", "Resources"]]
    }
  ]
};
