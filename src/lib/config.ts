export const siteConfig = {
  name: "FolsomChat",
  tagline: "Everything happening in Folsom. One place.",
  description:
    "Local news, events, businesses, community conversations, and trusted city resources—organized for Folsom residents.",
  url: "https://folsomchat.com",
  ogImage: "/og-image.svg",
};

export const navLinks = [
  { href: "/", label: "Home", icon: "Home" as const },
  { href: "/news", label: "News", icon: "Newspaper" as const },
  { href: "/events", label: "Events", icon: "Calendar" as const },
  { href: "/eat-drink", label: "Eat & Drink", icon: "UtensilsCrossed" as const },
  { href: "/parks-trails", label: "Parks & Trails", icon: "Trees" as const },
  { href: "/businesses", label: "Local Businesses", icon: "Building2" as const },
  { href: "/community", label: "Community", icon: "Users" as const },
  { href: "/city-resources", label: "City Resources", icon: "Landmark" as const },
] as const;

export const footerLinks = {
  platform: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/community-guidelines", label: "Community Guidelines" },
    { href: "/privacy", label: "Privacy" },
    { href: "/source-policy", label: "Source Policy" },
  ],
  business: [
    { href: "/contact", label: "Advertise" },
    { href: "/businesses", label: "Business Listings" },
  ],
} as const;

export const folsomTodayCards = [
  {
    id: "weather",
    title: "Weather",
    value: "72°F · Sunny",
    detail: "Light breeze from the southwest. High 78°F.",
    icon: "Sun" as const,
    badge: "Automated data placeholder",
  },
  {
    id: "traffic",
    title: "Road & Traffic Alerts",
    value: "No major closures",
    detail: "Routine maintenance on Folsom Blvd near Historic District until 3 PM.",
    icon: "Car" as const,
    badge: "Automated data placeholder",
  },
  {
    id: "city-update",
    title: "City Update",
    value: "Water main repair complete",
    detail: "Service restored in East Folsom. See city notice for details.",
    icon: "Landmark" as const,
    badge: "Automated data placeholder",
  },
  {
    id: "featured-event",
    title: "Today's Featured Event",
    value: "Thursday Night Market",
    detail: "Historic Folsom · 5–9 PM · Live music and local vendors.",
    icon: "Calendar" as const,
    badge: "Automated data placeholder",
  },
  {
    id: "weekend-preview",
    title: "Weekend Preview",
    value: "Lake day weather looks great",
    detail: "Saturday farmers market, Sunday trail cleanup at American River.",
    icon: "Sparkles" as const,
    badge: "Automated data placeholder",
  },
] as const;

export const sampleNews = [
  {
    id: "1",
    category: "City Services",
    source: "City of Folsom (sample)",
    time: "2 hours ago",
    headline: "Folsom Boulevard corridor improvements enter final phase",
    summary:
      "Lane restriping and pedestrian safety upgrades near the Historic District are scheduled to wrap up this month, with minimal overnight closures expected.",
  },
  {
    id: "2",
    category: "Community",
    source: "Folsom Telegraph (sample)",
    time: "4 hours ago",
    headline: "New shaded playground opens at Livermore Community Park",
    summary:
      "Families can enjoy updated play structures, picnic areas, and improved accessibility features at the popular east-side neighborhood park.",
  },
  {
    id: "3",
    category: "Events",
    source: "Folsom Live (sample)",
    time: "6 hours ago",
    headline: "Historic Folsom Thursday Night Market returns this week",
    summary:
      "Local vendors, food trucks, and live music return to Sutter Street with extended hours and a new kids activity zone.",
  },
  {
    id: "4",
    category: "Recreation",
    source: "Folsom Lake State Recreation Area (sample)",
    time: "Yesterday",
    headline: "Boat ramp hours extended for summer season",
    summary:
      "Beals Point and Brown's Ravine ramps will operate on expanded schedules through Labor Day. Arrive early on peak weekends.",
  },
  {
    id: "5",
    category: "Schools",
    source: "Folsom Cordova USD (sample)",
    time: "Yesterday",
    headline: "District announces fall community open house dates",
    summary:
      "Families are invited to meet teachers, tour campuses, and learn about enrichment programs at events across Folsom schools.",
  },
] as const;

export const whatsHappeningTabs = [
  {
    id: "today",
    label: "Today",
    items: [
      "Thursday Night Market on Sutter Street",
      "Sunset yoga at Folsom Community Center",
      "Library story hour at 10 AM",
    ],
  },
  {
    id: "weekend",
    label: "This Weekend",
    items: [
      "Folsom Farmers Market — Saturday 8 AM",
      "Lake Natoma paddle clinic — Saturday morning",
      "Historic Folsom walking tour — Sunday 11 AM",
    ],
  },
  {
    id: "family",
    label: "Family Activities",
    items: [
      "Shaded playground at Livermore Community Park",
      "Folsom Zoo Sanctuary morning visit",
      "Kids craft corner at the library",
    ],
  },
  {
    id: "meetings",
    label: "City Meetings",
    items: [
      "Planning Commission — Tuesday 6 PM",
      "Parks & Recreation Commission — Wednesday 5:30 PM",
      "City Council study session — Thursday 4 PM",
    ],
  },
  {
    id: "sports",
    label: "Sports & Recreation",
    items: [
      "Adult softball league playoffs at Folsom Lake College",
      "American River Trail group ride — Saturday 7 AM",
      "Community pool lap swim — daily mornings",
    ],
  },
] as const;

export const exploreCards = [
  {
    title: "Restaurants",
    description: "Historic District gems, lakeside dining, and neighborhood favorites.",
    href: "/eat-drink",
    icon: "UtensilsCrossed" as const,
    gradient: "from-lake/20 via-lake/5 to-gold/10",
  },
  {
    title: "Events",
    description: "Markets, concerts, festivals, and community gatherings.",
    href: "/events",
    icon: "Calendar" as const,
    gradient: "from-gold/20 via-gold/5 to-lake/10",
  },
  {
    title: "Parks and Trails",
    description: "American River Trail, neighborhood parks, and lake access.",
    href: "/parks-trails",
    icon: "Trees" as const,
    gradient: "from-emerald-500/15 via-lake/10 to-emerald-500/5",
  },
  {
    title: "Local Businesses",
    description: "Shops, services, and professionals in your community.",
    href: "/businesses",
    icon: "Building2" as const,
    gradient: "from-lake/15 via-muted to-lake/5",
  },
  {
    title: "Schools",
    description: "Campus info, calendars, and district resources.",
    href: "/city-resources",
    icon: "GraduationCap" as const,
    gradient: "from-gold/15 via-muted to-lake/5",
  },
  {
    title: "City Services",
    description: "Permits, utilities, public safety, and civic information.",
    href: "/city-resources",
    icon: "Landmark" as const,
    gradient: "from-navy/10 via-lake/10 to-muted",
  },
  {
    title: "Historic Folsom",
    description: "Sutter Street, the railroad, and Gold Rush heritage.",
    href: "/city-resources",
    icon: "Train" as const,
    gradient: "from-gold/20 via-amber-500/10 to-gold/5",
  },
  {
    title: "Folsom Lake & Lake Natoma",
    description: "Boating, beaches, trails, and waterfront recreation.",
    href: "/parks-trails",
    icon: "Waves" as const,
    gradient: "from-lake/25 via-sky-500/10 to-lake/5",
  },
] as const;

export const askFolsomExamples = [
  "What can I do with my kids this weekend?",
  "Which parks have shaded playgrounds?",
  "What is happening in Historic Folsom tonight?",
  "Where are the best dog-friendly patios?",
] as const;

export const communitySections = [
  {
    title: "Recommendations",
    description: "Trusted picks from neighbors on restaurants, services, and hidden gems.",
    icon: "ThumbsUp" as const,
  },
  {
    title: "Local Ideas",
    description: "Suggestions for events, improvements, and community projects.",
    icon: "Lightbulb" as const,
  },
  {
    title: "Lost and Found",
    description: "Help reunite pets, keys, and belongings with their owners.",
    icon: "Search" as const,
  },
  {
    title: "Neighborhood Updates",
    description: "Block parties, safety notices, and hyperlocal announcements.",
    icon: "MapPin" as const,
  },
  {
    title: "Volunteer Opportunities",
    description: "Trail cleanups, food drives, and ways to give back locally.",
    icon: "Heart" as const,
  },
] as const;

export const trustedSources = [
  "City of Folsom official notices and meeting agendas",
  "Folsom Cordova Unified School District announcements",
  "Regional parks and recreation authorities",
  "Established local news outlets and event calendars",
  "Verified business and community organization listings",
] as const;
