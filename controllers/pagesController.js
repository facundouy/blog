async function showContact(req, res) {
  res.render("contact");
}

async function showAbout(req, res) {
  res.render("about");
}

module.exports = {
  showContact,
  showAbout,
};
