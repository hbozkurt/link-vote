module.exports = {
  theme: {
    inset: {
      "0": 0,
      auto: "auto",
      "1/2": "50%",
      "1/4": "25%",
      "-2": "-0.5rem",
    },
    extend: {
      spacing: {
        "128": "32rem",
        "96": "24rem",
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      "transparent": "rgba(0,0,0, .5)",
    })
  }
}
