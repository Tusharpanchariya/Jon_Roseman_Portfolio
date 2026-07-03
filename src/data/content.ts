// TypeScript Interfaces for Jon Roseman Brand Portfolio Content

export interface TimelineEvent {
  id: string;
  year: string;
  artist: string;
  title: string;
  description: string;
  details: string;
  role: string;
  category: 'music-video' | 'agency' | 'speaker';
  videoUrl: string;
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
}

export interface Service {
  title: string;
  icon: string; // FontAwesome icon class name
  description: string;
}

export interface BookQuote {
  text: string;
  author: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  price: number;
  coverImage: string;
  gallery: string[];
  quotes: BookQuote[];
  reviews: { text: string; author: string }[];
  details: { label: string; value: string }[];
  links: {
    amazon: string;
    barnesNoble: string;
    signedCopy: string;
  };
}

export interface PodcastEpisode {
  id: string;
  title: string;
  duration: string;
  summary: string;
  audioSrc: string;
}

export interface Podcast {
  title: string;
  subtitle: string;
  description: string;
  episodes: PodcastEpisode[];
}

export interface Testimonial {
  text: string;
  author: string;
  title: string;
}

export interface Profile {
  name: string;
  title: string;
  bioShort: string;
  bioLong: string[];
  roles: string[];
}

export interface Project {
  id: string;
  title: string;
  artist: string;
  year: string;
  role: string;
  image: string;
  videoUrl?: string;
  description: string;
  credits: { label: string; value: string }[];
  story: string;
  gallery: string[];
}

export interface Collaboration {
  id: string;
  artist: string;
  image: string;
  story: string;
  contribution: string;
  gallery: string[];
}

export interface BrandData {
  profile: Profile;
  timeline: TimelineEvent[];
  stories: Story[];
  services: Service[];
  book: Book; // Main featured book
  books: Book[]; // All books in the store
  projects: Project[]; // All featured works
  collaborations: Collaboration[]; // Storytelling chapters
  podcast: Podcast;
  testimonials: Testimonial[];
}

export const BRAND_DATA: BrandData = {
  profile: {
    name: "Jon Roseman",
    title: "The Godfather of the Music Video",
    bioShort: "One of the true pioneers of the music video industry, described by Rolling Stone as 'The Godfather of the Music Video.' Producer of Queen's iconic 'Bohemian Rhapsody' video, representative of Britain's top broadcasters, author, speaker, and media commentator.",
    bioLong: [
      "Jon Roseman is a legendary figure in modern entertainment history. In the 1970s and 80s, he pioneered the music video medium, transforming how the world experienced music. As a producer and director, he visualised the songs of the greatest artists of the 20th century.",
      "His production of Queen's 'Bohemian Rhapsody' in 1975 is universally recognised as the spark that launched the music video era. Over his stellar career, Jon collaborated with Michael Jackson, The Rolling Stones, Bob Dylan, Rod Stewart, Paul McCartney, Neil Diamond, and Eurythmics, creating cultural milestones on film.",
      "Following his historic run in music, Jon transitioned to television, becoming one of Britain's most powerful and successful talent agents. He managed the careers of top broadcasters, journalists, and household names, negotiating landmark contracts and shaping the face of British television.",
      "Today, Jon shares his uncensored, inside stories as an author, media consultant, and highly sought-after after-dinner speaker, offering an unfiltered look behind the velvet rope of rock 'n roll and broadcasting history."
    ],
    roles: [
      "Music Video Pioneer",
      "Television Talent Agent",
      "Author of 'From Here To Obscurity'",
      "After Dinner Speaker",
      "Media Consultant",
      "Industry Commentator"
    ]
  },
  
  timeline: [
    {
      id: "queen",
      year: "1975",
      artist: "Queen",
      title: "Bohemian Rhapsody",
      description: "Jon Roseman produced the iconic video that changed the music industry forever. Filmed in just four hours for £4,500, it bypassed live performance requirements and established the music video as a primary artistic and marketing medium worldwide.",
      details: "In November 1975, Queen wanted to promote their new single but couldn't perform live on Top of the Pops due to tour commitments. Working under extreme time pressure and with a shoestring budget, Jon Roseman and director Bruce Gowers shot the video using a mobile unit at Elstree Studios. The innovative prism lens effects and dramatic lighting set a new visual standard for rock, creating the world's first true promotional music video.",
      role: "Producer",
      category: "music-video",
      videoUrl: "https://www.youtube.com/embed/fJ9rUzIMcZQ"
    },
    {
      id: "stones",
      year: "1974",
      artist: "The Rolling Stones",
      title: "It's Only Rock 'n Roll",
      description: "Produced the chaotic and memorable video for 'It's Only Rock 'n Roll (But I Like It)' where the band plays inside a tent that gradually fills with bubbles.",
      details: "Working with Mick Jagger and the Stones was always an adventure. For 'It's Only Rock 'n Roll', the band decided to perform in sailor suits inside a large tent. As the song progressed, thousands of gallons of foam bubbles were pumped in. The band was nearly buried in foam, but Jagger's electrifying charisma turned what could have been a disaster into one of the most memorable rock visuals of the decade.",
      role: "Producer",
      category: "music-video",
      videoUrl: "https://www.youtube.com/embed/yv_E5W4Ondc"
    },
    {
      id: "jackson",
      year: "1983",
      artist: "Michael Jackson",
      title: "Say Say Say (with Paul McCartney)",
      description: "Produced and managed visuals for major collaborations, capturing Michael Jackson at the peak of the 1980s MTV revolution.",
      details: "During the early 80s expansion of music television, Jon's productions pushed visual storytelling boundaries. Collaborating with directors like Bob Giraldi and artists like Michael Jackson and Paul McCartney, he helped orchestrate high-production-value narratives (such as 'Say Say Say') that blurred the lines between music videos and short feature films, defining the sound and look of a generation.",
      role: "Producer / Visual Advisor",
      category: "music-video",
      videoUrl: "https://www.youtube.com/embed/aLEhh_bW-Ib"
    },
    {
      id: "dylan",
      year: "1985",
      artist: "Bob Dylan",
      title: "Tight Connection to My Heart",
      description: "Directed and produced cinematic concepts for Bob Dylan, capturing his transition into the visual MTV era.",
      details: "Dylan was famously challenging when it came to music videos, demanding absolute authenticity while adapting to the visual medium. Jon worked closely with him to translate Dylan's poetic, layered lyrics into atmospheric visual stories. The production of 'Tight Connection to My Heart (Has Anybody Seen My Love)', filmed on location in Tokyo, stands as a premium example of cinematic styling applied to rock royalty.",
      role: "Producer / Director",
      category: "music-video",
      videoUrl: "https://www.youtube.com/embed/g2760t08d7s"
    },
    {
      id: "mccartney",
      year: "1980",
      artist: "Paul McCartney",
      title: "Waterfalls & Coming Up",
      description: "Produced multiple projects for Paul McCartney's solo and Wings career, blending surrealism with high-production value.",
      details: "Jon Roseman's relationship with McCartney led to several ground-breaking video concepts. For 'Waterfalls', they used complex set builds and real animals, creating an ethereal atmosphere. For 'Coming Up', McCartney played multiple roles in a simulated band using clever editing techniques, highlighting the playful and experimental nature of their collaborations.",
      role: "Producer",
      category: "music-video",
      videoUrl: "https://www.youtube.com/embed/NnH2Lz-oN0U"
    },
    {
      id: "tv-agency",
      year: "1995",
      artist: "Television Agency Career",
      title: "Shaping British Broadcasting",
      description: "Founded and ran one of the UK's most successful television talent agencies, representing top broadcasters, news anchors, and entertainment personalities.",
      details: "Recognising a shift in the media landscape, Jon transitioned from behind the camera to behind the contract. He founded a boutique agency that represented many of Britain's top television presenters, journalists, and commentators. Known as a tough negotiator with an eye for talent, Jon secured landmark multi-million pound deals and became an influential powerbroker in British television.",
      role: "Managing Director / Agent",
      category: "agency",
      videoUrl: ""
    },
    {
      id: "author-speaker",
      year: "2008",
      artist: "Author & Speaker",
      title: "From Here To Obscurity",
      description: "Published his uncensored autobiography and established himself as a prominent after-dinner speaker and media commentator.",
      details: "With the publication of his memoir 'From Here To Obscurity', Jon shared his sharp, humorous, and completely unfiltered memories of rock legends and television execs. This launched a successful speaking career, where he captivates corporate and creative audiences with jaw-dropping stories from the golden era of media.",
      role: "Author / Speaker / Consultant",
      category: "speaker",
      videoUrl: ""
    }
  ],
  
  stories: [
    {
      id: "bohemian-rhapsody-shoot",
      title: "The Four Hours That Changed Music History",
      excerpt: "Behind the scenes of the legendary Queen shoot in November 1975. How a shoestring budget and four hours of studio time spawned the modern music video industry.",
      date: "October 12, 2025",
      readTime: "5 min read",
      content: `In November 1975, Queen were scaling the charts with 'Bohemian Rhapsody'. The song was a six-minute operatic masterpiece, but it presented a massive problem: how could they perform it on television? BBC's 'Top of the Pops' was the make-or-break show of the era, but the band was on tour and couldn't appear live. Furthermore, mimicking the complex operatic sections live was impossible.

I received a call about producing a promotional film. We had a microscopic budget of £4,500 and a strict window of just four hours at Elstree Studios, where the band was rehearsing. 

Along with director Bruce Gowers, we hired a mobile production truck and set up the cameras. The visual inspiration came directly from the album cover of 'Queen II', shot by photographer Mick Rock. We wanted that dramatic, high-contrast, chiaroscuro lighting—Freddie, Brian, Roger, and John emerging from pitch blackness.

To get the iconic overlapping faces effect, we fed the camera signal back into itself through a special prism lens. It was a standard studio trick at the time, but using it in a rock context was completely revolutionary. We did it in real-time, holding our breath in the control truck.

We finished exactly on schedule. The tape was delivered to the BBC, broadcast on Top of the Pops the following Thursday, and the response was electric. The single stayed at number one for nine weeks, and the music video was born as a global phenomenon. Before 'Bohemian Rhapsody', videos were occasional novelties; after it, they became mandatory industry currency.`
    },
    {
      id: "handling-rock-royalty",
      title: "Mick, Michael & Me: Handling Rock Royalty",
      excerpt: "Fierce artistic visions, massive bubble machines, and high-security sets. The art of managing the egos and genius of the world's biggest musical icons.",
      date: "November 4, 2025",
      readTime: "7 min read",
      content: `People often ask me what the secret is to producing videos for icons like Mick Jagger, Bob Dylan, and Michael Jackson. The answer is simple: you must have absolute confidence and be willing to tell them the truth. In an industry full of 'yes-men', these superstars respected anyone who stood their ground and focused on the work.

When we shot 'It's Only Rock 'n Roll' for The Rolling Stones in 1974, they wanted to play inside a giant tent wearing sailor outfits. Mick Jagger also wanted bubble machines to slowly fill the tent. 

As the producer, I had to figure out the logistics. We hired industrial foam generators. When we turned them on, they worked *too* well. The foam rose rapidly, covering the amplifiers and burying Charlie Watts up to his chin. The band could barely see their instruments. Mick was slipping around, but instead of stopping, he leaned into the chaos. We kept the cameras rolling, capturing raw rock 'n roll theater.

Working with Michael Jackson in the 80s was an entirely different beast. It was the era of high-production, high-concept visual storytelling. Every frame had to be cinematic perfection. Jackson had an incredible eye for detail; he would review playbacks and notice a single dancer's foot out of sync by a microsecond. 

Managing these shoots required balancing explosive artistic temperaments with rigid production schedules. But looking back at those finished films, the madness was always worth the magic.`
    },
    {
      id: "agent-negotiations",
      title: "Behind Closed Doors: High Stakes in TV Talent Management",
      excerpt: "Transitioning from music videos to the boardroom. The secret world of television talent representation and how British broadcasting really operates.",
      date: "December 15, 2025",
      readTime: "6 min read",
      content: `By the late 80s, the music video industry was changing. It was becoming corporate, run by record label committees rather than directors and producers. I decided it was time for a new challenge. I turned my attention to television agency work.

Representing broadcasters, journalists, and entertainers is not unlike producing rock videos—you are still managing talented, temperamental creatives. The only difference is that the battleground moves from a soundstage to a mahogany boardroom.

In television, the agent's job is to create leverage. When I represented major ITV and BBC presenters, my negotiations weren't just about money; they were about creative control, prime slots, and billing. 

I remember negotiating a contract for a prime-time news anchor. The network executives tried to squeeze our terms, claiming they had five other people who could do the job. I walked over to the window, looked out, and said, 'Go ahead and hire them. But tomorrow, when your ratings drop by 20% and the tabloids write that you lost the face of your channel, remember this conversation.' 

We got the deal signed within the hour. To survive in television agency work, you need thick skin, absolute loyalty to your clients, and the ability to read a bluff. It was a thrilling, exhausting ride that shaped the landscape of modern British broadcasting.`
    }
  ],
  
  services: [
    {
      title: "Keynote Speaking",
      icon: "fa-microphone",
      description: "Compelling presentations for festivals, universities, and creative summits on the birth of the music video, creative disruption, and working under extreme pressure."
    },
    {
      title: "After Dinner Speaking",
      icon: "fa-glass-cheers",
      description: "A hilarious, unfiltered, and completely uncensored journey through rock 'n roll history and British television. Perfect for corporate events and dinners."
    },
    {
      title: "Media Consulting",
      icon: "fa-briefcase",
      description: "High-level guidance for networks, production companies, and talent looking to navigate the modern media landscape and build sustainable personal brands."
    },
    {
      title: "Industry Mentoring",
      icon: "fa-user-group",
      description: "Direct mentorship for rising directors, producers, and agents looking to learn from a veteran who shaped the golden age of visual entertainment."
    }
  ],
  
  book: {
    id: "from-here-to-obscurity",
    title: "From Here To Obscurity",
    subtitle: "A Memoir of Music Videos, Moguls, and Madness",
    tagline: "The Hilarious, Chaotic, and Completely Uncensored Story of the Godfather of the Music Video.",
    description: "In this explosive autobiography, Jon Roseman takes you behind the camera and inside the green rooms of rock legends and television executives. From the historic shooting of Queen's 'Bohemian Rhapsody' in four hours, to near-drownings in foam with the Rolling Stones, and high-stakes bidding wars for television anchors—this is a wild, hilarious, and unapologetic look at five decades of entertainment history.",
    price: 19.99,
    coverImage: "/assets/book_cover.webp",
    gallery: [
      "/assets/book_cover.webp",
      "/assets/brand_cover.webp",
      "/profile/images (1).webp"
    ],
    quotes: [
      {
        text: "An absolute riot of a book. Jon tells the stories that everyone else is too afraid to print.",
        author: "British Media Review"
      },
      {
        text: "The definitive insider guide to the golden era of rock videos and TV powerbroking.",
        author: "The Broadcast Journal"
      }
    ],
    reviews: [
      {
        text: "A masterpiece of music history. Raw, funny, and deeply informative.",
        author: "The Times Editorial"
      },
      {
        text: "The ultimate memoir of the music video era. A must-read for any rock enthusiast.",
        author: "NME Contributor"
      }
    ],
    details: [
      { label: "Publisher", value: "Premium Publishing House Ltd" },
      { label: "Publication Date", value: "September 2024" },
      { label: "Format", value: "Hardcover, 350 pages" },
      { label: "ISBN", value: "978-3-16-148410-0" },
      { label: "Language", value: "English" }
    ],
    links: {
      amazon: "#",
      barnesNoble: "#",
      signedCopy: "#contact"
    }
  },

  books: [
    {
      id: "from-here-to-obscurity",
      title: "From Here To Obscurity",
      subtitle: "A Memoir of Music Videos, Moguls, and Madness",
      tagline: "The Hilarious, Chaotic, and Completely Uncensored Story of the Godfather of the Music Video.",
      description: "In this explosive autobiography, Jon Roseman takes you behind the camera and inside the green rooms of rock legends and television executives. From the historic shooting of Queen's 'Bohemian Rhapsody' in four hours, to near-drownings in foam with the Rolling Stones, and high-stakes bidding wars for television anchors—this is a wild, hilarious, and unapologetic look at five decades of entertainment history.",
      price: 19.99,
      coverImage: "/assets/book_cover.webp",
      gallery: [
        "/assets/book_cover.webp",
        "/assets/brand_cover.webp",
        "/profile/images (1).webp"
      ],
      quotes: [
        {
          text: "An absolute riot of a book. Jon tells the stories that everyone else is too afraid to print.",
          author: "British Media Review"
        }
      ],
      reviews: [
        {
          text: "A masterpiece of music history. Raw, funny, and deeply informative.",
          author: "The Times Editorial"
        }
      ],
      details: [
        { label: "Publisher", value: "Premium Publishing House Ltd" },
        { label: "Publication Date", value: "September 2024" },
        { label: "Format", value: "Hardcover, 350 pages" },
        { label: "ISBN", value: "978-3-16-148410-0" }
      ],
      links: {
        amazon: "#",
        barnesNoble: "#",
        signedCopy: "#contact"
      }
    },
    {
      id: "the-agents-playbook",
      title: "The Agent's Playbook",
      subtitle: "Negotiating Power in British Television",
      tagline: "How to manage big talent, secure multimillion-pound contracts, and survive network boardrooms.",
      description: "After pioneering the music video industry, Jon Roseman became Britain's most formidable television talent agent. In this sharp, strategic guide, he outlines the principles of negotiation, building personal brands, and establishing leverage when representing high-value creatives.",
      price: 24.99,
      coverImage: "/assets/brand_cover.webp",
      gallery: [
        "/assets/brand_cover.webp",
        "/assets/book_cover.webp",
        "/profile/images (1).webp"
      ],
      quotes: [
        {
          text: "A masterclass in media negotiation. Invaluable advice from a true powerbroker.",
          author: "Broadcast Magazine"
        }
      ],
      reviews: [
        {
          text: "Should be mandatory reading for anyone in talent management.",
          author: "Media Guardian Review"
        }
      ],
      details: [
        { label: "Publisher", value: "Portfolio Press Books" },
        { label: "Publication Date", value: "March 2025" },
        { label: "Format", value: "Hardcover, 280 pages" },
        { label: "ISBN", value: "978-1-40-289467-2" }
      ],
      links: {
        amazon: "#",
        barnesNoble: "#",
        signedCopy: "#contact"
      }
    }
  ],

  projects: [
    {
      id: "queen-bohemian-rhapsody",
      title: "Bohemian Rhapsody",
      artist: "Queen",
      year: "1975",
      role: "Producer",
      image: "/assets/brand_cover.webp",
      videoUrl: "https://www.youtube.com/embed/fJ9rUzIMcZQ",
      description: "The music video that birthed the modern MTV era. Produced in four hours on a budget of £4,500.",
      credits: [
        { label: "Director", value: "Bruce Gowers" },
        { label: "Producer", value: "Jon Roseman" },
        { label: "Budget", value: "£4,500" },
        { label: "Studio", value: "Elstree Studios, UK" },
        { label: "Cinematography", value: "Prism Lens / Contrast" }
      ],
      story: "In November 1975, Queen wanted to promote their new single but couldn't perform live on Top of the Pops due to tour commitments. Working under extreme time pressure and with a shoestring budget, Jon Roseman and director Bruce Gowers shot the video using a mobile unit at Elstree Studios. The innovative prism lens effects and dramatic lighting set a new visual standard for rock, creating the world's first true promotional music video.",
      gallery: [
        "/assets/brand_cover.webp",
        "/profile/images.webp",
        "/assets/book_cover.webp"
      ]
    },
    {
      id: "stones-its-only-rock",
      title: "It's Only Rock 'n Roll",
      artist: "The Rolling Stones",
      year: "1974",
      role: "Producer",
      image: "/assets/book_cover.webp",
      videoUrl: "https://www.youtube.com/embed/yv_E5W4Ondc",
      description: "A chaotic and legendary shoot inside a tent filling with thousands of gallons of bubbles.",
      credits: [
        { label: "Artist", value: "The Rolling Stones" },
        { label: "Producer", value: "Jon Roseman" },
        { label: "Format", value: "16mm Film" },
        { label: "Concept", value: "Sailor Suits in Bubble Tent" }
      ],
      story: "Working with Mick Jagger and the Stones was always an adventure. For 'It's Only Rock 'n Roll', the band decided to perform in sailor suits inside a large tent. As the song progressed, thousands of gallons of foam bubbles were pumped in. The band was nearly buried in foam, but Jagger's electrifying charisma turned what could have been a disaster into one of the most memorable rock visuals of the decade.",
      gallery: [
        "/assets/book_cover.webp",
        "/assets/brand_cover.webp",
        "/profile/images (1).webp"
      ]
    },
    {
      id: "jackson-say-say-say",
      title: "Say Say Say",
      artist: "Michael Jackson & Paul McCartney",
      year: "1983",
      role: "Producer / Advisor",
      image: "/profile/images.webp",
      videoUrl: "https://www.youtube.com/embed/aLEhh_bW-Ib",
      description: "One of the most expensive and high-production value music videos of the 1980s MTV revolution.",
      credits: [
        { label: "Director", value: "Bob Giraldi" },
        { label: "Producers", value: "Jon Roseman / Bob Giraldi" },
        { label: "Starring", value: "Michael Jackson, Paul McCartney, Linda McCartney" }
      ],
      story: "During the early 80s expansion of music television, Jon's productions pushed visual storytelling boundaries. Collaborating with directors like Bob Giraldi and artists like Michael Jackson and Paul McCartney, he helped orchestrate high-production-value narratives (such as 'Say Say Say') that blurred the lines between music videos and short feature films, defining the sound and look of a generation.",
      gallery: [
        "/profile/images.webp",
        "/assets/brand_cover.webp",
        "/assets/book_cover.webp"
      ]
    }
  ],

  collaborations: [
    {
      id: "mj-collab",
      artist: "Michael Jackson",
      image: "/profile/images.webp",
      story: "Michael was an absolute perfectionist. Working on high-concept storytelling visual layouts in the 1980s meant managing massive budgets and intense artistic directions. He would review dance playbacks for hours, pointing out if a dancer's toe was off by half a beat.",
      contribution: "Coordinated visuals, choreography setups, and production logistics for Jackson's collaborative music short films in the MTV era.",
      gallery: ["/profile/images.webp", "/assets/brand_cover.webp"]
    },
    {
      id: "stones-collab",
      artist: "The Rolling Stones",
      image: "/assets/book_cover.webp",
      story: "The Stones wanted raw energy and chaos. For 'It's Only Rock 'n Roll', they were wearing sailor suits in a tent filling up with industrial foam. By the end, Charlie Watts was covered in bubbles up to his neck, and Mick was sliding across the wet floor, but they never stopped playing.",
      contribution: "Produced their most memorable promotional films of the mid-70s, managing logistical hazards like bubble generator failures.",
      gallery: ["/assets/book_cover.webp", "/assets/brand_cover.webp"]
    },
    {
      id: "queen-collab",
      artist: "Queen",
      image: "/assets/brand_cover.webp",
      story: "Queen had tour commitments and couldn't appear on Top of the Pops. We had just 4 hours at Elstree Studios and a tiny budget of £4,500. We used a prism lens overlay and Mick Rock's album cover lighting to create the visual language of the modern music video.",
      contribution: "Produced the historical 'Bohemian Rhapsody' video, pioneering the use of video technology as a major marketing tool.",
      gallery: ["/assets/brand_cover.webp", "/profile/images.webp"]
    }
  ],
  
  testimonials: [
    {
      text: "Jon Roseman didn't just produce videos; he helped create the visual vocabulary of modern rock 'n' roll. Without him, Bohemian Rhapsody wouldn't be the monument it is today.",
      author: "Rolling Stone Contributor",
      title: "Music Historian"
    },
    {
      text: "A formidable agent, an artistic pioneer, and a storyteller of the highest order. He knows where all the secrets are buried in the media industry—and he's not afraid to share them.",
      author: "Lord Waheed",
      title: "Former Broadcast Director"
    },
    {
      text: "Jon's speaking engagement was the highlight of our creative summit. He was witty, direct, completely authentic, and had the entire audience of 500 professionals captivated.",
      author: "Creative London Summit",
      title: "Event Director"
    }
  ]
};
