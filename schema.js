var graphql = require ('graphql');

var Talks = [
  {
    "date_added": "15/11/2017 12:40:15",
    "title": "Treating documentation like code: a practical account",
    "speaker": "Jodie Putrino",
    "url": "http://www.writethedocs.org/conf/na/2017/videos/treating-documentation-like-code-a-practical-account-jodie-putrino/",
    "length": 24,
    "keywords": "docs, technical writing, documentation",
    "previously_watched": "No",
    "enthusiasm": 3,
    "conference": "Write the Docs in Portland 2017",
    "twitter_handle": "@j_putrino",
    "twitter_bio": "Sr Technical Writer, OpenStack & Container Service Integrations @F5Networks",
    "description": "In this presentation, I'll lay out how we create, test, build, and publish our documentation using agile methodologies, so others starting down the same road have a path to follow.",
    "slides_url": "https://www.slideshare.net/DenisRadin/jshtml-in-aircraft-and-shipbuilding-industries-or-airspace-is-closer-than-you-may-think"
  },
  {
    "date_added": "15/11/2017 14:42:41",
    "title": "Web Accessibility is not an option",
    "speaker": "Xavier Dutreilh",
    "url": "https://vimeo.com/133535000",
    "length": 48,
    "keywords": "accessibility, web design",
    "previously_watched": "Yes",
    "enthusiasm": 5,
    "conference": "DjangoCon Europe 2015, Cardiff",
    "twitter_handle": "@xavierdutreilh",
    "twitter_bio": "Software Engineer/ Technical Leader @ SFEIR",
    "description": "Web accessibility is not an option. We may think so but it’s not. And none of us are optional. So we should get back to work and fix this.",
    "slides_url": ""
  },
  {
    "date_added": "15/11/2017 14:46:27",
    "title": "YES, your site too can (and should) be accessible",
    "speaker": "Laura Carvajal",
    "url": "https://youtu.be/H4FzW9oFObs",
    "length": 26,
    "keywords": "accessibility, web design, javascript",
    "previously_watched": "No",
    "enthusiasm": 3,
    "conference": "JSConf EU 2017",
    "twitter_handle": "@lc512k",
    "twitter_bio": "Not that kind of doctor. She/her. Senior Developer at The Financial Times. Former accessibility Lead for [http://ft.com](http://ft.com).",
    "description": "In this talk I will go over how we went from being generally oblivious about accessibility (at FT.com) to making it a core part of our process across multiple divisions. I will share the roadblocks we found and the lessons we learned, along with tangible solutions you can integrate them into your own project today, regardless of available time, budget or support.",
    "slides_url": ""
  },
  {
    "date_added": "15/11/2017 14:48:55",
    "title": "Applying NASA coding standards to JavaScript",
    "speaker": "Denis Radin",
    "url": "https://youtu.be/z8hG-3Ak_b4",
    "length": 25,
    "keywords": "javascript, reliability",
    "previously_watched": "No",
    "enthusiasm": 3,
    "conference": "JSConf EU 2017",
    "twitter_handle": "@PixelsCommander",
    "twitter_bio": "Applying NASA coding guidelines to JavaScript since 2004, hosting @ReactAmsterdam, @AmsterdamJS. State of the art 3d games engineering at @Evoneering",
    "description": "Jet Propulsion Laboratory - scientific institution making research and development for NASA. Their portfolio includes such famous missions as Curiosity Mars rover and Voyager probe which left solar system after 25 years of flight and still providing scientific information. High level of automation and long duration of missions led to superior demands to software quality. As a result of JPL amazing experience a set of code guidelines was developed and published recently. Since demands to web-driven software constantly increase and more critical tasks are entrusted to JavaScript, lets apply NASA coding guidelines to JavaScript / HTML applications for higher performance, reliability and the better world.",
    "slides_url": ""
  },
  {
    "date_added": "15/11/2017 15:00:57",
    "title": "Evaluating Technology",
    "speaker": "Jeremy Keith",
    "url": "https://vimeo.com/241111231",
    "length": 37,
    "keywords": "Evaluating tools, high-level",
    "previously_watched": "No",
    "enthusiasm": 4,
    "conference": "SmashingConf Barcelona 2017",
    "twitter_handle": "@adactio",
    "twitter_bio": "An Irish web developer working with @Clearleft, playing music with @SalterCane, creator of @Huffduffer & @SessionUpdates. https://resilientwebdesign.com",
    "description": "This talk will help you evaluate tools and technologies in a way that best benefits the people who use the websites that we are designing and developing. Let's take a look at some of the hottest new web technologies and together we will dig beneath the hype to find out whether they will really change life on the web for the better.",
    "slides_url": ""
  },
  {
    "date_added": "20/11/2017 10:42:36",
    "title": "Rethinking Microservices with Stateful Streams",
    "speaker": "Ben Stopford",
    "url": "https://youtu.be/6lONG_F76To",
    "length": 40,
    "keywords": "Microservices, data stream, kafka",
    "previously_watched": "No",
    "enthusiasm": "",
    "conference": "GOTO Amsterdam 2017",
    "twitter_handle": "@benstopford",
    "twitter_bio": "Data Tech Specialist, Architect, Programmer, Writer, Husband, ex Thoughtworks & UK Finance, @ConfluentInc",
    "description": "In this talk we'll examine how Stateful Stream Processing can be used to build Event Driven Services, using a distributed log like Apache Kafka. In doing so this Data-Dichotomy is balanced with an architecture that exhibits demonstrably better scaling properties, be it increased complexity, team size, data volume or velocity.",
    "slides_url": "https://gotoams.nl/2017/sessions/148"
  },
  {
    "date_added": "22/11/2017 14:33:11",
    "title": "On left-pad and empathy: understanding human connection",
    "speaker": "Myles Borins",
    "url": "https://youtu.be/Iak7dspvrZ8",
    "length": 25,
    "keywords": "jsconf iceland 2016, people, empathy",
    "previously_watched": "Yes",
    "enthusiasm": "",
    "conference": "JSConf Iceland 2016",
    "twitter_handle": "@MylesBorins",
    "twitter_bio": "Artist, musician, developer, and maker / @nodejs TSC Director / developer advocate for @googlecloud / Opinions are potentially wrong, but definitely my own.",
    "description": "This talk will explore various ways in which developers can be more empathetic to the community, their co-workers, and themselves. The talk will also explore larger ways we as an industry can work together to improve empathy. We will then use these tools to examine the “left-pad” situation to find empathy for all those involved.",
    "slides_url": ""
  },
  {
    "date_added": "22/11/2017 14:36:09",
    "title": "A Cartoon Intro to WebAssembly",
    "speaker": "Lin Clark",
    "url": "https://youtu.be/HktWin_LPf4",
    "length": 30,
    "keywords": "jsconf eu 2017, webassembly",
    "previously_watched": "Yes",
    "enthusiasm": "",
    "conference": "JSConf EU 2017",
    "twitter_handle": "@linclark",
    "twitter_bio": "stuffing my head with code and turning it into @codecartoons. also, tinkering with WebAssembly, @ServoDev, and a little @rustlang at @mozilla",
    "description": "WebAssembly is fast. It’s being called “the future of the web”. It’s speed and potential have major browser vendors working together to make it a reality. And it’s on it’s way—the MVP hit multiple browsers in October of last year. But what makes it fast? Starting from the basics, this talk will walk you through what WebAssembly is, and then why it’s fast.",
    "slides_url": ""
  },
  {
    "date_added": "22/11/2017 14:37:05",
    "title": "JavaScript engines - how do they even?",
    "speaker": "Franziska Hinkelmann",
    "url": "https://youtu.be/p-iiEDtpy6I",
    "length": 25,
    "keywords": "jsconf eu 2017, javascript engines, low-level",
    "previously_watched": "Yes",
    "enthusiasm": "",
    "conference": "JSConf EU 2017",
    "twitter_handle": "@fhinkel",
    "twitter_bio": "Ph.D. software engineer working at Google on Chrome @v8js. Node.js TSC member. ❤️ JavaScript.",
    "description": "Want to know how JavaScript engines work? Why is JavaScript so fast? What is just-in-time compilation? We’ll look at basic concepts of compilers, challenges posed by modern JavaScript, and how to write compiler-friendly JavaScript.",
    "slides_url": ""
  },
  {
    "date_added": "22/11/2017 14:38:58",
    "title": "Let's go big (Big numbers in JavaScript)",
    "speaker": "Alexander Reardon",
    "url": "https://youtu.be/9SHOfZI_SsM",
    "length": 25,
    "keywords": "jsconf eu 2017, math, javascript",
    "previously_watched": "Yes",
    "enthusiasm": "",
    "conference": "JSConf EU 2017",
    "twitter_handle": "@alexandereardon",
    "twitter_bio": "JavaScript enthusiast",
    "description": "I will talk about how we can free numbers in JavaScript to represent values much larger than their natural constraints. The talk will navigate through increasingly creative techniques to represent numbers of ever increasing values - freeing numbers from their constraints as well as ourselves.",
    "slides_url": ""
  },
  {
    "date_added": "22/11/2017 14:41:00",
    "title": "What's new in Netscape Navigator 2.0",
    "speaker": "Marcin Szczepanski",
    "url": "https://youtu.be/Z-nXRZkge2U",
    "length": 25,
    "keywords": "jsconf eu 2017, prespective on browser evolution",
    "previously_watched": "Yes",
    "enthusiasm": "",
    "conference": "JSConf EU 2017",
    "twitter_handle": "@MarcinS",
    "twitter_bio": "Mostly frontend dev at @atlassian, Jira Cloud Frontend Platform. Formerly Bitbucket Server (nee Stash). Views are my own, etc.",
    "description": "How can we know how good we’ve got it without really understanding how good we used to have it? JavaScript was first released with Netscape Navigator 2.0 in September 1995 - can an application from today exist in the browsers of yesterday? In this talk I will answer those questions by implementing TodoMVC in some early browsers. When we’re through, we’ll leave with an appreciation of just how far the Web and Web development have come in the last 20 years.",
    "slides_url": ""
  },
  {
    "date_added": "22/11/2017 14:42:04",
    "title": "The Legacy of the JavaScript Community",
    "speaker": "Whitney Williams",
    "url": "https://youtu.be/h-QPx0sMvLQ",
    "length": 25,
    "keywords": "jsconf eu 2017, people, diversity, community",
    "previously_watched": "Yes",
    "enthusiasm": "",
    "conference": "JSConf EU 2017",
    "twitter_handle": "@whitneyhacks",
    "twitter_bio": "👩🏼‍💻Designer & front end dev fluent in #JavaScript #CSS & German 🇩🇪 From #yeahTHATGreenville. Currently exploring the #PNW 🌲",
    "description": "What does the word legacy mean? And how does it relate to JavaScript as a language and the community of people surrounding it? In this talk, we'll explore leadership, what it means to be a part of the community, and how you can shape the legacy of JavaScript.",
    "slides_url": "https://www.slideshare.net/Codemotion/the-legacy-of-the-javascript-community-whitney-williams-codemotion-amsterdam-2017"
  },
  {
    "date_added": "22/11/2017 14:43:12",
    "title": "CSS and the hierarchy problem: What makes a CSS developer?",
    "speaker": "Ivana McConnell",
    "url": "https://youtu.be/afAc75d02U0",
    "length": 30,
    "keywords": "cssconf eu 2017, people, develop hierarchy",
    "previously_watched": "Yes",
    "enthusiasm": "",
    "conference": "CSSconf EU Berlin 2017",
    "twitter_handle": "@IvanaMcConnell",
    "twitter_bio": "🏳️‍🌈 UX design @customerIO. Editorial assistant @OffscreenMag, runs @FacetsDigest and http://our-origins.com . Vancouver via Bosnia, Croatia, and Scotland.",
    "description": "This talk is about hierarchies: as CSS hurtles toward being object- and systems-oriented, the titles and responsibilities of designer and developer become much more fluid and yet, we continue to categorise. We draw lines between front and back end, between CSS and Javascript (“CSS isn’t real development”), and even between CSS disciplines, but why? Furthermore, we implicitly draw these lines between white male developers and everyone else. This results in damaging hierarchies that threaten to devalue the work we do in diversifying CSS — both as a language and as a community.",
    "slides_url": ""
  },
  {
    "date_added": "22/11/2017 14:44:08",
    "title": "Where does CSS come from?",
    "speaker": "Rachel Andrew",
    "url": "https://youtu.be/cYGOv2ToZjY",
    "length": 30,
    "keywords": "cssconf eu 2017, origin story, css",
    "previously_watched": "Yes",
    "enthusiasm": "",
    "conference": "CSSconf EU Berlin 2017",
    "twitter_handle": "@rachelandrew",
    "twitter_bio": "Web Developer, half of @grabaperch CMS, CSS Working Group Invited Expert. Smashing Mag Editor in Chief. Student pilot. Runner.",
    "description": "Understanding how CSS is developed is more than an academic exercise. It gives you a way of understanding why things are weird, which is a good starting point to avoiding or fixing weirdness. It can give you an early heads up as to what might be happening in the very near future. It also opens up an opportunity to be part of the process, to contribute to CSS - just like any open source project. Then once we have new CSS on the horizon, we can all be part of encouraging browser vendors to ship it!",
    "slides_url": ""
  },
  {
    "date_added": "22/11/2017 14:44:46",
    "title": "Getting Reactive with CSS",
    "speaker": "David Khourshid",
    "url": "https://youtu.be/4IRPxCMAIfA",
    "length": 30,
    "keywords": "cssconf eu 2017, css, reactive css",
    "previously_watched": "Yes",
    "enthusiasm": "",
    "conference": "CSSconf EU Berlin 2017",
    "twitter_handle": "@DavidKPiano",
    "twitter_bio": "Pianist and Web Developer, with a passion for CSS and JavaScript. Glimpse team @Microsoft. 🐐",
    "description": "As user interfaces evolve and become more interactive, design requirements become more complex. By combining CSS variables with reactive programming in JS, we can now express animations, styles, layout, and more in ways never before possible with CSS. In this talk, we’ll explore what functional reactive programming is, why it is incredibly useful, and how we can leverage the power of CSS variables to push the limits of styling the web.",
    "slides_url": ""
  },
  {
    "date_added": "22/11/2017 14:45:32",
    "title": "The road to styled components: CSS in component-based systems",
    "speaker": "Glen Maddern",
    "url": "https://youtu.be/MT4D_DioYC8",
    "length": 23,
    "keywords": "cssconf eu 2017, css, css-in-js, styled components",
    "previously_watched": "Yes",
    "enthusiasm": "",
    "conference": "CSSconf EU Berlin 2017",
    "twitter_handle": "@glenmaddern",
    "twitter_bio": "Local business owner and whipped papaya enthusiast. Creator of Front End Center. Co-creator of styled-components, CSS Modules. Emoji connoisseur 🦑",
    "description": "Building user interfaces on the web is hard, because the web, and thus CSS, was inherently made for documents. Because UIs fundamentally are not documents, we've seen a mindset shift towards building component-based system.",
    "slides_url": ""
  },
  {
    "date_added": "22/11/2017 14:46:21",
    "title": "Let's Build a CSS Game",
    "speaker": "Una Kravets",
    "url": "https://youtu.be/WmVH85G59Lk",
    "length": 30,
    "keywords": "cssconf eu 2017, fun, live coding, css game",
    "previously_watched": "Yes",
    "enthusiasm": "",
    "conference": "CSSconf EU Berlin 2017",
    "twitter_handle": "@Una",
    "twitter_bio": "Future bosslady. Sr UI Engineer @digitalocean. Community builder, tech writer, cohost @toolsday. Hand lettering & globetrotting: http://Instagram.com/unakravets",
    "description": "Let’s live code a game together using just CSS and HTML! This talk will demonstrate the power of CSS and will teach a few fun tips as tricks as we build a simple game. It’ll be based in Sass — using data structures like matrices and HTML counter-incrementing, and a little bit of web magic to tie it all together. This talk will inspire you to play with and create your own CSS games, pushing the boundaries of what’s expected from the language itself.",
    "slides_url": ""
  },
  {
    "date_added": "22/11/2017 14:51:17",
    "title": "The myth of the \"Real JavaScript Developer",
    "speaker": "Brenna O'Brien",
    "url": "https://youtu.be/Xt5qpbiqw2g",
    "length": 27,
    "keywords": "front-trends 2016, people, self-evaluation",
    "previously_watched": "No",
    "enthusiasm": "",
    "conference": "Front Trends 2016",
    "twitter_handle": "@brnnbrn",
    "twitter_bio": "tech speaker coach, front-end developer @useformat, photographer, feminist, spacewitch",
    "description": "In this talk, we'll debunk the myth of the “real JavaScript developer” - a magical creature who knows it all, writing perfect code in the hottest new framework without ever needed to stop and take a break. We'll look at simple strategies to help beginners on their journey learning JavaScript and also come up with a more realistic definition of what it means to be a successful JavaScript developer today.",
    "slides_url": ""
  },
  {
    "date_added": "23/11/2017 10:05:04",
    "title": "Learning Functional Programming with JavaScript",
    "speaker": "Anjana Vakil",
    "url": "https://youtu.be/e-5obm1G_FY",
    "length": 30,
    "keywords": "jsunconf 2016, functional programming",
    "previously_watched": "No",
    "enthusiasm": 3,
    "conference": "JSConf EU 2017",
    "twitter_handle": "@AnjanaVakil",
    "twitter_bio": "Wanderer and wonderer. Engineering + Learning at @Mapbox. @Mozilla TechSpeaker. Alumna of @Outreachy, @RecurseCenter, @Uni_Saarland, & @UCBerkeley",
    "description": "Functional programming has been gaining a lot of popularity in the JS community, and with good reason: rejecting side-effects and mutability - in-place changes to data - helps avoid a lot of headaches. But when you refuse to mutate objects, you have to create a whole new object each time something changes, which can slow things down and eat up memory, making functional programming seem inefficient.",
    "slides_url": ""
  },
  {
    "date_added": "07/12/2017 13:32:01",
    "title": "Adopting Continuous Delivery",
    "speaker": "Jez Humble",
    "url": "https://www.youtube.com/watch?v=6DeWOrmvhRM",
    "length": 35,
    "keywords": "CD",
    "previously_watched": "Yes",
    "enthusiasm": 4,
    "conference": "Lean IT Summit 2017",
    "twitter_handle": "@jezhumble",
    "twitter_bio": "Co-author of some books on software. CTO @devops_research, lecturer @UCBerkeley, ex-@18F, \"such a knob\" - @ranisanghera. PGP: https://keybase.io/jezhumble",
    "description": "How to reduce the risk of releases through implementing continuous integration and test and deployment automation?*",
    "slides_url": "https://slidr.io/vakila/learning-functional-programming-with-javascript"
  }
];

var Talk = new graphql.GraphQLObjectType({
    name: 'talk',
    fields: function() {
        return {
            title: {
                type: graphql.GraphQLString
            },
            speaker: {
                type: graphql.GraphQLString
            },
            url: {
                type: graphql.GraphQLString
            },
            length: {
                type: graphql.GraphQLInt
            },
            keywords: {
                type: graphql.GraphQLString
            },
            previously_watched: {
                // This should be a boolean!
                type: graphql.GraphQLString
            },
            enthusiasm: {
                type: graphql.GraphQLInt
            },
            conference: {
                type: graphql.GraphQLString
            },
            twitter_handle: {
                type: graphql.GraphQLString
            },
            twitter_bio: {
                type: graphql.GraphQLString
            },
            description: {
                type: graphql.GraphQLString
            },
            slides_url: {
                type: graphql.GraphQLString
            }
        }
    }
});

var queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: function () {
        return {
            talks: {
                type: new graphql.GraphQLList(Talk),
                resolve: function () {
                    return Talks;
                }
            }
        }
    }
});

module.exports = new graphql.GraphQLSchema({
    query: queryType
});
