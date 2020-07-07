const express = require("express"), app = express(),
 homeController = require("./controllers/homeController"),
 layouts = require("express-ejs-layouts");

app.set("view engine","ejs");


app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.set("port", process.env.PORT||3000);
app.use(layouts);
app.get("/", (req,res) => {
  res.send("Welcome to Confetti Cuisine!");
});

app.get("/courses", homeController.showCourse);
app.get("/contact", homeController.showSignup);
app.post("/contact", homeController.postedContactForm);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
