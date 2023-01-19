import axios from "axios";
import { JSDOM } from "jsdom";

// return array of sub urls from a given url
export async function getSubURLs(url) {
  try {
    const suburls = [];
    const page = await axios.get(url);
    const dom = new JSDOM(page.data, {
      url: url,
      contentType: "text/html",
    });
    // getting all the links from the page
    const links = dom.window.document.querySelectorAll("a");
    // filtering links that belong to website of given url
    links.forEach((link) => {
      if (link.href.includes(url)) suburls.push(link.href);
    });
    return suburls;
  } catch (err) {
    console.log(err);
  }
}
