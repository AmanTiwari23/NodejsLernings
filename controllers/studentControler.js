const homePage = (req, res) => {
  res.send("this is home page");
};

const aboutPage = (req, res) => {
  res.send("this is about page");
};

const service = (req, res) => {
  res.send("this is servic page");
};

const coursePage = (req, res) => {
  res.send("this is course page");
};

const contactPage = (req, res) => {
  res.send("this is contact page");
};

module.exports = { homePage, contactPage, service, coursePage, aboutPage };
