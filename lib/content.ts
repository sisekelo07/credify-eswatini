export const brand = {
  name: "Credify Eswatini",
  tagline: "Building Better Homes, Together.",
  logo: "/images/credify-logo.png",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  contact: {
    phone: process.env.NEXT_PUBLIC_CREDIFY_PHONE || "To be supplied by Credify",
    email: process.env.NEXT_PUBLIC_CREDIFY_EMAIL || "To be supplied by Credify",
    address: process.env.NEXT_PUBLIC_CREDIFY_ADDRESS || "To be supplied by Credify"
  }
};

// Every key below maps to its own unique photo file — no image is reused
// across two different sections anywhere on the site.
export const images = {
  homeHero: "/images/hero-family.jpg",
  goalBuy: "/images/family-kitchen-loft.jpg",
  goalBuild: "/images/construction-women.jpg",
  goalImprove: "/images/family-kitchen-gather1.jpg",
  homeCommunitySplit: "/images/friends-community.jpg",

  aboutHero: "/images/family-porch.jpg",
  aboutWhatWeDo: "/images/construction-worker.jpg",
  aboutWhy: "/images/family-kitchen-gather2.jpg",

  visionHero: "/images/neighborhood-sunset.jpg",
  visionSplit: "/images/two-dads-couch.jpg",

  packagesHero: "/images/mom-kids-house.jpg",
  packagesCompareSplit: "/images/couple-laptop.jpg",
  // Detail-page hero for each plan (/packages/[slug]) — distinct from both card sets below.
  packageStarter: "/images/package-starter.jpg",
  packageBuilder: "/images/construction-portrait.jpg",
  packageImprovement: "/images/renovation-kitchen.jpg",
  // Homepage "Choose Your Property Plan" teaser cards — distinct from the /packages listing cards.
  homeTeaserStarter: "/images/home-package-starter.jpg",
  homeTeaserBuilder: "/images/home-package-builder.jpg",
  homeTeaserImprovement: "/images/home-package-improvement.jpg",
  // /packages listing page cards — distinct from the homepage teaser and detail hero.
  listingStarter: "/images/listing-package-starter.jpg",
  listingBuilder: "/images/listing-package-builder.jpg",
  listingImprovement: "/images/listing-package-improvement.jpg",

  homeImprovementHero: "/images/renovation-painting.jpg",
  homeImprovementSplit: "/images/family-rustic-kitchen.jpg",

  howItWorksHero: "/images/family-five-floor.jpg",
  howItWorksSplit: "/images/laptop-two-women.jpg",

  membershipRequirementsHero: "/images/id-badge.jpg",

  benefitsHero: "/images/teens-porch.jpg",
  benefitsSplit: "/images/family-embrace.jpg",

  faqSplit: "/images/member-support.jpg",

  contactHero: "/images/office-meeting.jpg",
  contactSplit: "/images/professional-woman-badge.jpg",

  testimonialsHero: "/images/family-balloons.jpg",

  applyHero: "/images/documents-application.jpg",
  loginSplit: "/images/couple-keys.jpg",

  newsFinancialEducation: "/images/financial-planning.jpg",
  newsHomeImprovement: "/images/woman-laptop-bed.jpg",
  newsCredifyNews: "/images/team-meeting.jpg",

  logo: "/images/credify-logo.png"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Membership", href: "/membership-requirements" },
  { label: "Resources", href: "/faqs" },
  { label: "Contact", href: "/contact" }
];

export const packages = [
  {
    slug: "starter-home",
    title: "Starter Home Plan",
    eyebrow: "First step",
    bestFor: "First-time home buyers and young professionals.",
    focus: "Property savings goal",
    description:
      "A practical starting point for members who want an affordable, structured way to begin saving towards homeownership.",
    image: images.packageStarter,
    features: [
      "Affordable monthly contributions",
      "Flexible payment options",
      "Property savings goal",
      "Online member portal"
    ]
  },
  {
    slug: "home-builder",
    title: "Home Builder Plan",
    eyebrow: "Build ahead",
    bestFor: "Individuals planning to build their dream home.",
    focus: "Construction and long-term property planning",
    description:
      "Designed for members preparing for a future build and needing disciplined long-term property savings support.",
    image: images.packageBuilder,
    features: ["Higher contribution options", "Long-term savings", "Property development focus"]
  },
  {
    slug: "home-improvement",
    title: "Home Improvement Plan",
    eyebrow: "Improve now",
    bestFor: "Members looking to renovate, extend or improve an existing home.",
    focus: "Renovation savings",
    description:
      "A renovation-focused plan for members who already have a home and want to improve it with structure and support.",
    image: images.packageImprovement,
    features: ["Renovation-focused savings", "Flexible contribution amounts", "Easy application process"]
  }
];

export const steps = [
  ["01", "Register", "Create your Credify account and start your online application."],
  ["02", "Choose", "Select the property savings package aligned to your goal."],
  ["03", "Apply", "Complete your details and upload the required documents."],
  ["04", "Contribute", "Make the applicable joining payment and begin monthly contributions."],
  ["05", "Track", "Monitor membership, documents and savings through the secure portal."],
  ["06", "Achieve", "Work steadily towards buying, building or improving your home."]
];

export const values = [
  ["Integrity", "We do what we say, and keep membership rules and processes consistent for every member."],
  ["Trust", "Members put their savings and personal documents in our care — we treat that as a serious responsibility."],
  ["Accountability", "Every contribution and application status is recorded and visible, not left to memory."],
  ["Transparency", "Clear communication about membership status, requirements and progress, with no hidden steps."],
  ["Innovation", "A digital-first membership experience that makes structured saving practical for everyday life."],
  ["Excellence", "We hold our platform and our service to a standard worthy of members' long-term goals."],
  ["Community", "Rooted in stokvel tradition — members working toward property goals together, not alone."],
  ["Financial Empowerment", "Helping members build lasting equity and security through their own disciplined saving."]
];

export const benefits = [
  ["Structured Property Savings", "Save consistently toward building, buying or improving a home."],
  ["Renovation Savings", "Use a plan designed for extensions, repairs and home improvement goals."],
  ["Secure Member Portal", "Access membership records, documents and contribution information online."],
  ["Transparent Contributions", "Keep visibility of your membership and savings journey."],
  ["Easy Online Application", "Register, apply and submit supporting documents from one flow."],
  ["Convenient Payments", "Support for online payment and EFT workflows once official details are configured."],
  ["Community Growth", "Use stokvel principles to turn disciplined saving into tangible property progress."],
  ["Professional Support", "Give members a clear route to help, FAQs and WhatsApp support."]
];

export const requirements = [
  ["At least 18 years old", "Membership is open to adults who can enter into a binding savings agreement in their own name."],
  ["Valid national identity document", "Used to verify your identity and confirm the details on your application match your official records."],
  ["Proof of residence", "A recent document confirming your current address, used for membership and correspondence records."],
  ["Proof of income or employment where applicable", "Helps confirm a contribution plan is realistic for your circumstances, where this information is required."],
  ["Agreement to membership terms and conditions", "You'll review and accept Credify's membership rules as part of the online application."],
  ["Completed online membership application", "All personal details, property goal and package selection completed through the application flow."]
];

export const documents = [
  "National ID",
  "Proof of Residence",
  "Proof of Income if applicable",
  "Passport-size Photograph optional",
  "Bank Confirmation Letter if required"
];

export const faqs = [
  ["What is Credify?", "Credify Eswatini is a property and housing stokvel helping members save towards building, buying and improving homes."],
  ["Who can join?", "Eligible individuals who meet the membership requirements may apply to become members."],
  ["How do I become a member?", "Start with the online application, provide the requested details and submit the required supporting documents."],
  ["Can I apply online?", "Yes. The application flow is designed for online registration, package selection and document uploads."],
  ["How are my contributions managed?", "The member portal is designed to show contribution status and savings progress. Final operating policies must be supplied by Credify."],
  ["What documents do I need?", "You will generally need a national ID, proof of residence and proof of income where applicable."],
  ["How do I make payments?", "The site supports payment interface screens, but official payment methods, bank details and gateway settings must be supplied by Credify."],
  ["Is my information secure?", "The platform is structured around protected member routes and secure document handling patterns. Production security must be completed with the final backend."],
  ["Can I contact someone if I need help?", "Yes. Phone, email and WhatsApp support are configurable once Credify supplies official contact details."]
];

export const demoTestimonials = [
  {
    name: "Demo Member — Manzini",
    quote:
      "Placeholder testimonial only. Replace this with an approved Credify member story before launch.",
    type: "Demo content"
  },
  {
    name: "Demo Member — Mbabane",
    quote:
      "Placeholder testimonial only. No real customer claim is being made on this website preview.",
    type: "Demo content"
  }
];

export const news = [
  {
    slug: "structured-saving-for-property-goals",
    category: "Financial Education",
    title: "Structured Saving for Property Goals",
    excerpt:
      "Demo article explaining how disciplined monthly contributions can support long-term home plans.",
    image: images.newsFinancialEducation
  },
  {
    slug: "planning-a-home-improvement-project",
    category: "Home Improvement",
    title: "Planning a Home Improvement Project",
    excerpt: "Demo guidance for preparing renovation documents, budgets and timelines.",
    image: images.newsHomeImprovement
  },
  {
    slug: "credify-member-portal-preview",
    category: "Credify News",
    title: "Credify Member Portal Preview",
    excerpt: "Demo update showing how members can track documents, contributions and goals.",
    image: images.newsCredifyNews
  }
];

export const applicationSteps = [
  "Personal Details",
  "Employment / Income",
  "Property Goal",
  "Select Package",
  "Upload Documents",
  "Review Application",
  "Payment",
  "Confirmation"
];

export const portalDemo = {
  memberName: "Demo Member",
  membershipNumber: "CRD-DEMO-001",
  status: "Active",
  package: "Home Builder Plan",
  goal: "Build My Home",
  target: "E 500,000",
  saved: "E 185,000",
  progress: 37,
  totalContributed: "E 185,000",
  monthlyContribution: "Demo amount",
  nextContribution: "Demo amount",
  activities: [
    "Application submitted",
    "Proof of residence pending review",
    "Monthly contribution recorded as demo data"
  ]
};

export const contributionRows = [
  ["10 Aug 2026", "Monthly contribution", "Demo amount", "Paid"],
  ["10 Jul 2026", "Monthly contribution", "Demo amount", "Paid"],
  ["10 Jun 2026", "Monthly contribution", "Demo amount", "Paid"]
];

export const adminMetrics = [
  ["New Applications", "24"],
  ["Pending Applications", "12"],
  ["Active Members", "Demo"],
  ["Pending Documents", "9"],
  ["Recent Payments", "Demo"]
];

export const adminRows = [
  ["CRD-APP-1042", "Demo Applicant", "Starter Home Plan", "Submitted"],
  ["CRD-APP-1041", "Demo Applicant", "Home Builder Plan", "Under Review"],
  ["CRD-APP-1040", "Demo Applicant", "Home Improvement Plan", "Documents Required"]
];
