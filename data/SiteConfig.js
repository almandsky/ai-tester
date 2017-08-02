module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "AI Tester", // Site title.
  siteTitleAlt: "AI Tester", // Alternative site title for SEO.
  siteLogo: "/logos/ai-tester-logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://ai-tester.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteDescription: "You code, AI test your code", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1863270957324034", // FB Application ID for using app insights
  siteGATrackingID: "UA-32696506-1", // Tracking code ID for google analytics.
  disqusShortname: "ai-tester", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Sky Chen", // Username to display in the author segment.
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
  copyright: "Copyright © 2017. Sky Chen" // Copyright string for the footer of the website and RSS feed.
};
