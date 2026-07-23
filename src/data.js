import { FaInstagram, FaTiktok } from "react-icons/fa";

export const navLinks = [
  {
    linkName: "Home",
    linkPath: "/",
  },
  {
    linkName: "Our Journey",
    linkPath: "/journey",
  },
  {
    linkName: "Our Work",
    linkPath: "/work",
  },
  {
    linkName: "Inquiries",
    linkPath: "/inquiries",
  },
];

export const socialLinks = [
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/lagravinesejewelry/?hl=en",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    link: "",
  },
];

export const footerData = [
  {
    id: "navigation",
    heading: "Site Links",
    links: [
      {
        linkName: "Home",
        linkPath: "/",
      },
      {
        linkName: "Our Journey",
        linkPath: "/journey",
      },
      {
        linkName: "Our Work",
        linkPath: "/work",
      },
      {
        linkName: "Inquiries",
        linkPath: "/inquiries",
      },
    ],
  },
  {
    id: "newsletter",
    heading: "Join Our Newsletter",
    input: {
      type: "email",
      placeholder: "Email Address",
      ariaLabel: "Email Address",
    },
    buttonText: "Subscribe",
  },
  {
    id: "social",
    heading: "Social Media",
    links: [
      {
        name: "Instagram",
        icon: FaInstagram,
        link: "https://www.instagram.com/lagravinesejewelry/?hl=en",
      },
      {
        name: "TikTok",
        icon: FaTiktok,
        link: "",
      },
    ],
  },
];

// images for headers
import homeImage1 from "../public/images/greenCoat.jpeg";
import homeImage2 from "../public/images/cosmos.jpeg";
import journeyImage1 from "../public/images/greenCoat.jpeg";
import journeyImage2 from "../public/images/cosmos.jpeg";
import workImage1 from "../public/images/greenCoat.jpeg";
import workImage2 from "../public/images/cosmos.jpeg";
import inquiriesImage1 from "../public/images/greenCoat.jpeg";
import inquiriesImage2 from "../public/images/cosmos.jpeg";

export const headerData = [
  {
    path: "/",
    name: "home",
    img1: homeImage1,
    img2: homeImage2,
    mainText: "LaGravinese",
    secondText: "Custom Jewelry",
  },
  {
    path: "/journey",
    name: "journey",
    img1: journeyImage1,
    img2: journeyImage2,
    mainText: "Our Journey",
    secondText: "A Family Legacy",
  },
  {
    path: "/work",
    name: "work",
    img1: workImage1,
    img2: workImage2,
    mainText: "Our Work",
    secondText: "Crafted with Precision",
  },
  {
    path: "/inquiries",
    name: "inquiries",
    img1: inquiriesImage1,
    img2: inquiriesImage2,
    mainText: "Inquiries",
    secondText: "Let's Create Together",
  },
];

// Home testimonials Section
export const testimonialsData = {
  heading: "Kind Words from Our Clients",

  testimonials: [
    {
      id: 1,
      clientImage: "images/eng-placeholder1.jpeg",
      clientImageAlt: "Engagement photo of Ethan & Jackie",

      jewelryImage: "images/ring-test-placeholder1.webp",
      jewelryImageAlt: "Custom engagement ring",

      testimonial:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor animi natus sint deleniti modi?",

      clientNames: "Ethan & Jackie",
    },

    {
      id: 2,
      clientImage: "images/eng-placeholder2.jpeg",
      clientImageAlt: "Engagement photo of Ethan & Jackie",

      jewelryImage: "images/ring-test-placeholder2.webp",
      jewelryImageAlt: "Custom engagement ring",

      testimonial:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor animi natus sint deleniti modi?",

      clientNames: "Ethan & Jackie",
    },

    {
      id: 3,
      clientImage: "images/eng-placeholder3.jpeg",
      clientImageAlt: "Engagement photo of Ethan & Jackie",

      jewelryImage: "images/ring-test-placeholder3.jpg",
      jewelryImageAlt: "Custom engagement ring",

      testimonial:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor animi natus sint deleniti modi?",

      clientNames: "Ethan & Jackie",
    },

    {
      id: 4,
      clientImage: "images/eng-placeholder4.jpeg",
      clientImageAlt: "Engagement photo of Ethan & Jackie",

      jewelryImage: "images/ring-test-placeholder4.jpeg",
      jewelryImageAlt: "Custom engagement ring",

      testimonial:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor animi natus sint deleniti modi?",

      clientNames: "Ethan & Jackie",
    },
  ],
};

// Home Process Section
export const homeContactData = {
  heading: "Let's Bring Your Vision to Life",

  process: [
    {
      id: 1,
      title: "Consultation",
      description:
        "Meet with us to discuss your vision, style, and budget. Whether you're searching for the perfect diamond or gemstone or already have a stone you'd like to use, we'll help create a design that's uniquely yours.",
    },
    {
      id: 2,
      title: "Design & Rendering",
      description:
        "We'll transform your ideas into a detailed digital rendering. You'll have the opportunity to review the design and request revisions before giving final approval.",
    },
    {
      id: 3,
      title: "Craftsmanship",
      description:
        "Once approved, your design is developed into a CAD (Computer-Aided Design) model. Your piece is then expertly crafted, set, polished, and carefully inspected to ensure it meets our highest standards.",
    },
    {
      id: 4,
      title: "Final Reveal",
      description:
        "Your finished piece is ready for pickup or secure shipping, complete with any applicable documentation or appraisal.",
    },
  ],

  cta: {
    text: "Start Your Project",
    path: "/inquiries",
  },

  images: [
    {
      id: 1,
      className: "img1",
      src: "images/proc1.jpg",
      alt: "Jewelry consultation",
    },
    {
      id: 2,
      className: "img2",
      src: "images/proc2.jpeg",
      alt: "Jewelry design rendering",
    },
    {
      id: 3,
      className: "img3",
      src: "images/proc3.webp",
      alt: "Jewelry craftsmanship",
    },
    {
      id: 4,
      className: "img4",
      src: "images/proc4.webp",
      alt: "Completed custom jewelry",
    },
  ],
};

// home About section
export const homeAboutData = {
  image: {
    src: "images/siblings.jpg",
    alt: "The LaGravinese family",
  },

  heading: "Our Journey",

  paragraphs: [
    "For four generations, the LaGravinese name has been rooted in the jewelry industry through craftsmanship, integrity, and a passion for helping people celebrate life's most meaningful moments.",

    "Today, we're honored to continue that legacy by combining traditional values with a personalized approach to jewelry. We believe jewelry should be as meaningful as it is beautiful. Every piece tells a story of love, family, celebration, remembrance, or a new beginning.",

    "Whether you're choosing your first meaningful piece, redesigning a treasured heirloom, or creating something entirely new, we're here to guide you with honesty, education, and genuine care.",
  ],

  button: {
    text: "Learn More",
    path: "/journey",
    className: "page-link white",
  },
};

// home collections section
export const collections = {
  header: "What We Create",
  items: [
    {
      title: "Necklaces",
      image: "/images/necklace-placeholder.png",
      alt: "Custom necklace",
      link: "/collections/necklaces",
    },
    {
      title: "Rings",
      image: "/images/ring-placeholder.png",
      alt: "Custom ring",
      link: "/collections/rings",
    },
    {
      title: "Earrings",
      image: "/images/earing-placeholder.png",
      alt: "Custom earrings",
      link: "/collections/earrings",
    },
    {
      title: "Bands",
      image: "/images/band-placeholder.jpeg",
      alt: "Wedding bands",
      link: "/collections/bands",
    },
    {
      title: "Bracelets",
      image: "/images/bracelet-placeholder.jpg",
      alt: "Custom bracelet",
      link: "/collections/bracelets",
    },
  ],
};

export const faqData = [
  {
    category: "Orders & Custom Design",
    questions: [
      {
        question: "Do you have jewelry available for immediate purchase?",
        answer:
          "Our collections are thoughtfully made to order. Rather than carrying large inventories, we focus on creating pieces specifically for each client, ensuring exceptional craftsmanship and attention to detail. For custom bridal appointments, you'll also have the opportunity to explore a curated selection of sample rings and bands to help inspire your final design.",
      },
      {
        question:
          "I have an idea or inspiration for a piece. Can you create it?",
        answer:
          "Absolutely. Whether you have a sketch, a photograph, a design you've admired, or simply a vision in mind, we're here to bring it to life. Every custom project begins with a conversation about your style, preferences, and budget. From there, we'll guide you through selecting diamonds, gemstones, and precious metals before refining the design into a piece that's uniquely yours. Whether inspired by a family heirloom, a classic style, or a favorite design, every piece is thoughtfully crafted with the same care, precision, and attention to detail.",
      },
      {
        question: "How long will my order take?",
        answer:
          "Each piece is made specifically for you, so production times vary depending on the project. Custom Bridal pieces typically require 4–6 weeks, while Custom Collection pieces are generally completed in 3–4 weeks. We'll keep you informed throughout the process so you'll always know what to expect.",
      },
    ],
  },
  {
    category: "Shipping & Pickup",
    questions: [
      {
        question: "Do you offer shipping?",
        answer:
          "Yes. We proudly ship nationwide. Every order is carefully packaged, fully insured, and shipped with signature confirmation to ensure your jewelry arrives safely and securely.",
      },
      {
        question: "Do you offer local pickup?",
        answer:
          "Yes. We are based in Scottsdale, Arizona, and are happy to coordinate local pickup by appointment.",
      },
    ],
  },
  {
    category: "Appraisals & Insurance",
    questions: [
      {
        question: "Do you offer appraisals?",
        answer:
          "Yes. Every bridal purchase includes a complimentary professional appraisal completed by Tom LaGravinese, Graduate Gemologist (GG). This appraisal may be used to obtain jewelry insurance through the provider of your choice. Professional appraisals are also available for custom pieces and other jewelry at a preferred client rate.",
      },
      {
        question: "Do you provide warranties or insurance?",
        answer:
          "While we do not provide jewelry insurance directly, we strongly encourage insuring valuable pieces against loss, theft, or accidental damage. If questions arise regarding craftsmanship, sizing, or adjustments, please contact us. We stand behind the quality of our work and will always do our best to provide a thoughtful and fair solution.",
      },
    ],
  },
  {
    category: "Returns & Adjustments",
    questions: [
      {
        question: "What is your return policy?",
        answer:
          "Because each piece is custom made or specially ordered, all sales are considered final. However, our relationship with you doesn't end once your jewelry is delivered. If you have concerns about your piece, we encourage you to contact us. We'll carefully review each situation individually and work with you to determine the best available solution. When appropriate, we may also be able to assist with services such as ring resizing or other minor adjustments. Our goal is for you to enjoy your jewelry with confidence for many years to come.",
      },
      {
        question: "Do you work with heirloom jewelry?",
        answer:
          "We love helping clients breathe new life into treasured family pieces. Whether you'd like to redesign an inherited ring, incorporate existing gemstones, or preserve the sentimental value of an heirloom, we'll guide you through the process with care and respect.",
      },
      {
        question: "Can I use my own diamonds or gemstones?",
        answer:
          "Absolutely. We love incorporating meaningful diamonds and gemstones into new designs whenever possible. During your consultation, we'll carefully examine your stones, discuss your vision, and guide you through the best options for creating a beautiful piece that honors both your story and the integrity of the materials.",
      },
    ],
  },
];
