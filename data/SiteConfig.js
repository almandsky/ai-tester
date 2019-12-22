const config = {
  siteTitle: "AI Tester", // Site title.
  siteTitleShort: "AI Tester", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "AI Tester", // Alternative site title for SEO.
  siteLogo: "/logos/ai-tester-logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://ai-tester.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "You code, AI test your code", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1863270957324034", // FB Application ID for using app insights
  siteGATrackingID: "UA-32696506-2", // Tracking code ID for google analytics.
  disqusShortname: "ai-tester", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Sky Chen", // Username to display in the author segment.
  userEmail: "sky.t.x.chen@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "almandsky", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Bay Area, CA, United States", // User location to display in the author segment.
  userAvatar: "https://avatars1.githubusercontent.com/u/1797585?v=4&s=460", // User avatar to display in the author segment.
  userDescription:
    "Full stack developer, now interested in AI and Machine Learning.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/almandsky/ai-tester",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/almandsky",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:sky.t.x.chen@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. Sky Chen" // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
