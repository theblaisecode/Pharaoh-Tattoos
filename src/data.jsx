import tony from "./img/home/artist1.png";
import greg from "./img/home/artist2.png";
import gwen from "./img/home/artist3.png";
import mj from "./img/home/artist4.png";
import keyce from "./img/home/artist5.png";
import ben from "./img/home/artist6.png";
import harley from "./img/home/artist7.png";
import fred from "./img/home/artist8.png";
import prevJob1 from "./img/home/previousJob1.png";
import prevJob2 from "./img/home/previousJob2.png";
import prevJob3 from "./img/home/previousJob3.png";
import prevJob4 from "./img/home/previousJob4.png";
import prevJob5 from "./img/home/previousJob5.png";
import prevJob6 from "./img/home/previousJob6.png";
import prevJob7 from "./img/home/previousJob7.png";
import prevJob8 from "./img/home/previousJob8.png";
import prevJob9 from "./img/home/previousJob9.png";
import prevJob10 from "./img/home/previousJob10.png";
import prevJob11 from "./img/home/previousJob11.png";
import prevJob12 from "./img/home/previousJob12.png";
import {
  FaPinterest,
  FaInstagram,
  FaTwitter,
  FaAngleRight,
} from "react-icons/fa6";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

export const artist = [
  {
    id: 1,
    name: "Tony",
    img: tony,
    style: "Black & grey realism",
  },
  {
    id: 2,
    name: "Greg",
    img: greg,
    style: "Traditional/Japanese",
  },
  {
    id: 3,
    name: "Gwen",
    img: gwen,
    style: "Illustrative/Anime/Fine line",
  },
  {
    id: 4,
    name: "Mj",
    img: mj,
    style: "Illustrative",
  },
  {
    id: 5,
    name: "Keyce",
    img: keyce,
    style: "Black & grey",
  },
  {
    id: 6,
    name: "Ben",
    img: ben,
    style: "Fine line",
  },
  {
    id: 7,
    name: "Harley",
    img: harley,
    style: "Piercing",
  },
  {
    id: 8,
    name: "Fred",
    img: fred,
    style: "Piercing (Apperentice)",
  },
];

export const prevJobs = [
  {
    id: 1,
    img: prevJob1,
  },
  {
    id: 2,
    img: prevJob2,
  },
  {
    id: 3,
    img: prevJob3,
  },
  {
    id: 4,
    img: prevJob4,
  },
  {
    id: 5,
    img: prevJob5,
  },
  {
    id: 6,
    img: prevJob6,
  },
  {
    id: 7,
    img: prevJob7,
  },
  {
    id: 8,
    img: prevJob8,
  },
  {
    id: 9,
    img: prevJob9,
  },
  {
    id: 10,
    img: prevJob10,
  },
  {
    id: 11,
    img: prevJob11,
  },
  {
    id: 12,
    img: prevJob12,
  },
];

export const testimonial = [
  {
    id: 1,
    author: "Samantha",
    testimony:
      "Absolutely amazing from start to finish! The artists are incredibly talented, and the atmosphere is welcoming. My custom piece from Alex turned out better than I imagined. For top-tier ink, this is the place!",
  },
  {
    id: 2,
    author: "Damian",
    testimony:
      "Hands down the best place to get a tattoo all over. Great service, great people. Dude they even give you snacks or burgers as you wait, Now that’s  just epiccc. My tattoo artist was Tony, really great guy. All in all, i really recommend",
  },
  {
    id: 3,
    author: "Jake",
    testimony:
      "I’ve been to a few tattoo parlors, but this one really stands out. The attention to detail and the creative energy in the studio are unmatched. Got my sleeve done by Rachel, and she nailed it. Definitely coming back for more!",
  },
  {
    id: 4,
    author: "Alyssa",
    testimony:
      "From the moment I walked in, I knew I was in good hands. The shop is clean, the staff are friendly, and the artists are true professionals. Mike did my first tattoo, and now I’m hooked. Best tattoo shop in town, hands down!",
  },
];

export const faq = [
  {
    faq1: [
      {
        id: 1,
        question: "How much do you charge?",
        answer:
          "It depends! Pricing will vary for every tattoo and piercing. We take into consideration the complexity of the design, the expected time for completion, the size and the placement of the tattoo. ",
        answer2:
          "For small - medium scale tattoos, the actual cost is not known until a design has been finalised, and the stencil has been printed. For this reason, we only provide estimates at the time of booking, and not fixed quotes. For large scale tattoos, we charge by the hour. The actual cost will very much depend on the design, actual size of the tattoo, and how well you sit for the tattoo. We can provide an estimate of cost for large scale tattoos. In doing so, we will provide an estimate of hours or sessions.",
      },
      {
        id: 3,
        question: "Does it hurt?",
        answer:
          "Pain is subjective. The level of pain will vary depending on the placement of your tattoo, but will also depend on how long your session is and whether you have eaten and are well rested. To manage your own expectations, always expect some level of pain or discomfort.",
      },
      {
        id: 5,
        question: "Do you take walk-ins?",
        answer:
          "Yes, subject to availability. However, we recommend contacting us beforehand as we do generally stay booked ahead.",
      },
      {
        id: 7,
        question: "Do you do cover ups?",
        answer:
          "Yes, we do! However, we ask that you be open minded, as our artists are limited to what is already on the skin. From time to time, we may recommend that you have laser removal for optimal results. To enquire further about cover ups, it is best to complete our booking form.",
      },
      {
        id: 9,
        question: "Information required to make a booking?",
        answer:
          "You can contact us through phone, email, or through our enquiry form. You can also contact the artist directly via their instagrams.",
      },
    ],
    faq2: [
      {
        id: 2,
        question: "How should I prep for an appointment?",
        answer: `We’ve compiled a list of all the things you should do to prepare for your appointment with us here: https://www.markdtattoo.com.au/preparing-for-your-appointment `,
      },

      {
        id: 4,
        question: "Do you do laser removal?",
        answer:
          "Yes, we offer laser tattoo removal services! Our experienced professionals use advanced technology to help you with the removal or lightening of existing tattoos. For the best results, we recommend a consultation where we can assess your needs and create a personalized removal plan. ",
      },

      {
        id: 6,
        question: "Can you recommend a tattoo for me?",
        answer: `Tattoos are art, and art is very subjective and personal. So, to recommend a tattoo for you would be like “throwing a dart in the dark”. Tattoos are on your body permanently, so we highly recommend doing your research before making an enquiry. Once we have an understanding of what you like, only then can we make design recommendations. Alternatively, some of our artists will have tattoo flash available for you to view on their instagram.`,
      },

      {
        id: 8,
        question: "Do you have a shop minimum?",
        answer:
          "$150 is our studio minimum. A studio minimum is in place to cover our time as the hygiene protocols are the same for every tattoo, now matter how big or small.",
      },

      {
        id: 10,
        question: "Do you only take cash?",
        answer:
          "Nope! We have EFTPOS facilities, and prefer payment by EFTPOS.",
      },
    ],
  },
];

export const navIcon = [
  {
    id: 1,
    icon: FaPinterest,
    link: "https://twitter.com/theblaisecode/",
  },
  {
    id: 2,
    icon: FaInstagram,
    link: "https://twitter.com/theblaisecode/",
  },
];

export const footerIcon = [
  {
    id: 1,
    icon: AiFillFacebook,
    link: "https://twitter.com/theblaisecode/",
  },
  {
    id: 2,
    icon: AiFillInstagram,
    link: "https://twitter.com/theblaisecode/",
  },
  {
    id: 3,
    icon: FaTwitter,
    link: "https://twitter.com/theblaisecode/",
  },
];

export const footerContent = [
  {
    id: 1,
    title: "Open Hours",
    details: {
      info1: "Mon - Sat",
      info2: "10:30 AM - 6:00 PM",
    },
    details2: {
      info3: "Sunday",
      info4: "Closed",
    },
  },
  {
    id: 2,
    title: "Contact Us",
    details: {
      info1: "Email",
      info2: "pharaohtattoos@gmail.com",
    },
    details2: {
      info3: "Phone",
      info4: "+234 812 345 6789",
    },
  },
  {
    id: 3,
    title: "Location",
    details: {
      info1: "132 Code St, Blaise Ave, Millsboro, USA",
    },
    details2: {
      info3: (
        <Link
          to="/appointment"
          className="btn"
          aria-label="Book an appointment">
          Book an appointment
          <span>
            <FaAngleRight />
          </span>
        </Link>
      ),
    },
  },
];

export const afterCareInfo = [
  {
    tattooAftercare: [
      {
        id: 1,
        heading: "Immediate Aftercare",
        directions: [
          {
            id: 1,
            title: "Cling Wrap",
            instructions: [
              {
                id: 1,
                description:
                  "If your  new tattoo is covered with cling wrap, it is best to leave this on for at least 1 hour, but no longer than 4 hours.",
              },
              {
                id: 2,
                description:
                  "Once you remove the wrap, gently wipe it down with a clean wet paper towel or wash it in the shower.",
              },
              {
                id: 3,
                description:
                  "After showering, pat the area dry with a clean towel.",
              },
              {
                id: 4,
                description:
                  "Proceed to use a tattoo aftercare product on the new tattoo until fully healed. We recommend Bepanthen or Dr Pickles.",
              },
            ],
          },
          {
            id: 2,
            title: "Second Skin",
            instructions: [
              {
                id: 1,
                description:
                  "If your artist has applied a second skin, leave it on for 5 to 10 days.",
              },
              {
                id: 2,
                description:
                  "There will be blood, leftover ink and plasma that will build up under the second skin. This causes pooling under the second skin and on top the tattoo, resulting in bubbling of the second skin. This is completely normal and will subside.",
              },
              {
                id: 3,
                description:
                  "Upon removal of the second skin, you may notice an imprint of the tattoo on the second skin. This looks like a part of the tattoo has come off. It is excess ink sitting on the top layer of your skin, and is not the tattoo itself.",
              },
              {
                id: 4,
                description:
                  "If any irritation occurs at any time with the second skin, please remove it. You can proceed to use an aftercare cream.",
              },
            ],
          },
          {
            id: 3,
            title: "Aftercare Cream",
            instructions: [
              {
                id: 1,
                description:
                  "When using an aftercare product, please only use a thin layer.",
              },
              {
                id: 2,
                description:
                  "If you experience any redness or irritation from the cream, please stop using it immediately.",
              },
              {
                id: 3,
                description: "Ensure you keep the tattoo clean at all times.",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        heading: "Later Aftercare",
        directions: [
          {
            id: 1,
            title: "While Healing",
            instructions: [
              {
                id: 1,
                description:
                  "Healing can take up to 14 days. However, everyone is different and the timing may vary.",
              },
              {
                id: 2,
                description:
                  "While the tattoo is healing, please refrain from swimming, baths, saunas, etc. It is best to keep the tattoo dry.",
              },
              {
                id: 3,
                description:
                  "When showering, keep showers to under 15 minutes and adjust the temperature so that is comfortable for the tattooed skin.",
              },
              {
                id: 4,
                description: "Stay out of the sun.",
              },
              {
                id: 5,
                description: "Refrain from fake tanning products.",
              },
              {
                id: 6,
                description:
                  "Avoid any tight clothing or accessories which may rub the newly tattooed area.",
              },
              {
                id: 7,
                description:
                  "You can exercise as normal, but remember to keep the tattoo clean. If exercising makes the new tattoo feel uncomfortable, we recommend refraining from the activity until you feel comfortable to do so.",
              },
              {
                id: 8,
                description:
                  "No scratching and picking the tattoo. Itching is normal and is a good sign of healing!",
              },
            ],
          },
          {
            id: 2,
            title:
              "Remember, your new tattoo is an open wound, and it should be treated as such.",
            head: "If you have any concerns, please contact us or your artist.",
          },
        ],
      },
    ],
    piercingsAftercare: [
      {
        id: 1,
        heading: "Immediate Aftercare",
        directions: [
          {
            id: 1,
            title: "Mouth",
            instructions: [
              {
                id: 1,
                description:
                  "Gargle with salt water after every meal (do not swallow). Don’t use any mouthwash contains alcohol or chemicals ingredients/strong minty flavors.",
              },
              {
                id: 2,
                description:
                  "Ibuprofen, Naproxen sodium also an option to eases down the irritation and swollen piercing. (Ice water does the trick too)",
              },
            ],
          },
          {
            id: 2,
            title: "Belly",
            instructions: [
              {
                id: 1,
                description:
                  "Belly button tends to takes up 1 or 2 years in order to heal completely and properly.",
              },
              {
                id: 2,
                description:
                  "Avoid wearing high waist jeans, tight pants that could possibly rub onto the piercing area.",
              },
              {
                id: 3,
                description:
                  "Skip the exercise related to the belly as long as possible.",
              },
              {
                id: 4,
                description:
                  "Dry your belly button after every shower by using a Q-tips or cotton balls.",
              },
            ],
          },
          {
            id: 3,
            title: "Nipples",
            instructions: [
              {
                id: 1,
                description:
                  "Wear strapless bra or loose sport bra around 2 – 3 months.",
              },
              {
                id: 2,
                description:
                  "Sexual inter course is NOT an option during the healing process.",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        heading: "Side Note",
        head: "What could possibly happens during the process",
        directions: [
          {
            id: 1,
            title: "During The Process",
            instructions: [
              {
                id: 1,
                description:
                  "Your piercing will swell for the first 1 or 3 weeks, depends on individual skin.",
              },
              {
                id: 2,
                description:
                  "When it’s healing : itchiness, pain, irritation or yellow liquid might dries up around piercing area. (Please clean them when you see them)",
              },
            ],
          },
          {
            id: 2,
            title: "What To Avoid",
            head: "If any cases you would like to change the jewelry anytime sooner, please check up with your piercer or nearest piercing parlor for advice.",
            instructions: [
              {
                id: 1,
                description:
                  "Food such as : water spinach or morning glory, beef, sticky rice and chicken’s skin.",
              },
              {
                id: 2,
                description:
                  "Changing the jewelry too soon once you got them pierced.",
              },
            ],
          },
          {
            id: 3,
            title: "Essentials",
            instructions: [
              {
                id: 1,
                description:
                  "For complicated or heavy jewelry, it’s best to wait for a year",
              },
              {
                id: 2,
                description:
                  "A piercing will heal from the outside slowly to the inside, it might seems like it’s already healed at the surface but any touch, activities can causes it to swell or worse, infection. Therefore, be patient with your piercings, avoid any contacts or exercise.",
              },
              {
                id: 3,
                description:
                  "Other elements such as : weather, environment, skin types, aftercare or even your health condition can also affects onto the piercing. A healthy lifestyle will be the best option above all for a good behaved piercing.",
              },
              {
                id: 4,
                description:
                  "Side notes : with a pierced area up-to 1 year, can closed up anytime if you don’t have any jewelry in for a while.",
              },
              {
                id: 5,
                description:
                  "DON’T USE : Betadine, Hibiclens, alcohol, Hydro Peroxide or any soap contains triclosan, they will destroy your skin cells. Ointment will block the air way of your piercing and slow down the healing process.",
              },
              {
                id: 6,
                description:
                  "If you wish to remove your piercing, remember to continue to clean them for the next 3-5 days after.",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const tattooOptions = [
  "Ankle",
  "Foot",
  "Full leg",
  "Stomach",
  "Chest",
  "Shoulder",
  "Arm",
  "Hand",
  "Wrist",
  "Finger",
  "Head",
  "Neck/Throat",
  "Back",
  "Other",
];

export const piercingOptions = [
  "Ear",
  "Eyebrow",
  "Cheek",
  "Tongue",
  "Belly Button",
  "Nipples",
  "Genitals",
];
