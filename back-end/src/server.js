const { PORT = 5001 } = process.env.PORT;

const app = require("./app");

app.listen(PORT, () => {
  console.log(`Listening here, baby: ${PORT}`);
});
