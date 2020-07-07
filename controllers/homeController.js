exports.showCourse = (req, res) => {
  res.render("courses");
};

exports.showSignup = (req, res) => {
  res.render("contact");
};

exports.postedContactForm = (req, res) => {
  res.render("thanks");
};
