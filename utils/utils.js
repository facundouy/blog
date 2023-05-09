const utils = {
  getFirstParagraph: (article) => {
    const match = article.match(/<p>(.*?)<\/p>/);
    if (!match) {
      return "";
    }
    return match[1].replace(/<\/?p>/g, "");
  },
  dateFormatter: (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
      timeZone: "America/Montevideo",
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    const formattedDate = formatter.format(date);
    return formattedDate;
  },
};

module.exports = utils;
