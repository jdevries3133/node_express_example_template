const app = require("./stuffThatYouCanIgnore"); // take my word for it :)

app.get("/", (req, res) => {
  res.send(
    `<h1>Hello world!</h1>
    <p>
      Thanks for visiting! Your browser is
      <pre>${req.headers["user-agent"]}</pre>
      <p>Today's time is ${new Date().toLocaleTimeString()}</p>
    </p>`
  );
});

app.listen(3000);
