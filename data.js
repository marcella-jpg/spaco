/**
 * Spatium Cogitationis — Content Database
 * Edit this file to add or modify website content day-to-day.
 */

const SITE_DATA = {
  profile: {
    brandName: "Spaco",
    subtitle: "Spatium Cogitationis",
    authorName: "Marcella", // Update to your preferred name/alias
    authorBio: "Undergraduate philosophy student exploring primary texts, phenomenology, aesthetic theory, and visual art.",
    email: "you@example.com",
    youtube: "https://www.youtube.com/@yourchannel",
    instagram: "https://www.instagram.com/yourhandle"
  },

  prompts: [
    {
      topic: "Epistemology",
      text: "Can philosophy ever fully answer our deepest questions, or does it exist to transform how we inhabit the questions themselves?"
    },
    {
      topic: "Aesthetics",
      text: "Is quietness merely an absence of noise, or a positive aesthetic presence that shapes how we process primary texts?"
    },
    {
      topic: "Phenomenology",
      text: "When pen touches a blank page, are we creating a new thought, or releasing an intuition that was already seeking form?"
    },
    {
      topic: "Metaphilosophy",
      text: "How does reading philosophy differ from reading fiction, and why does philosophical confusion feel like progress?"
    }
  ],

  featuredId: "essay-1",

  essays: [
    {
      id: "essay-1",
      title: "Can Philosophy Answer My Question?",
      category: "Metaphilosophy",
      readTime: "6 Min Read",
      date: "2026",
      summary: "Exploring expectation, curiosity, and how asking questions reshapes our relationship with wisdom.",
      content: `
        <span class="eyebrow">Metaphilosophy</span>
        <h1 style="font-size: 2.2rem; margin: 8px 0 12px; font-weight: 800; color: var(--color-dark);">Can Philosophy Answer My Question?</h1>
        <p style="color:var(--color-accent); font-weight: 600;">6 Min Read</p>
        <hr style="border:0; border-top:1px solid var(--border-subtle); margin: 20px 0;">
        <p class="prose-dropcap">When students first enter philosophy, they often carry a silent list of burning questions: What is the good life? How do I know I am not dreaming? What gives life meaning?</p>
        <p>We approach philosophical texts expecting clear answers. Yet, after hours spent wrestling with Kant, Plato, or Simone de Beauvoir, we often discover that instead of delivering a simple answer, philosophy reshapes the question itself.</p>
        <div class="pull-quote">
          "To ask whether philosophy can answer our question is to ask whether a lens can show us what to see—or teach us how to look."
        </div>
        <h2 style="font-size: 1.4rem; font-weight: 700; margin-top: 32px; color: var(--color-dark);">1. The Expectation of Finality</h2>
        <p>Philosophy differs from empirical science. In physics or biology, a question leads toward a verifiable explanation. In philosophy, answering a question reveals the hidden assumptions embedded within how the question was framed in the first place.</p>
      `
    },
    {
      id: "essay-2",
      title: "The Aesthetic Experience of Late-Night Study",
      category: "Aesthetics",
      readTime: "8 Min Read",
      date: "2026",
      summary: "Analyzing quiet spaces, marginalia notes, and the sensory world of midnight research.",
      content: `
        <span class="eyebrow">Aesthetics</span>
        <h1 style="font-size: 2.2rem; margin: 8px 0 12px; font-weight: 800; color: var(--color-dark);">The Aesthetic Experience of Late-Night Study</h1>
        <p style="color:var(--color-accent); font-weight: 600;">8 Min Read</p>
        <hr style="border:0; border-top:1px solid var(--border-subtle); margin: 20px 0;">
        <p class="prose-dropcap">There is a distinct phenomenological shift that occurs past midnight. The noisy demands of the daytime world recede, leaving behind a quiet sanctuary composed of a single desk light and open primary texts.</p>
      `
    }
  ],

  videos: [
    {
      id: "vid-1",
      title: "Can Philosophy Answer My Question?",
      category: "Video Essay",
      duration: "07:12",
      embedUrl: "https://www.youtube.com/embed/XCm-ZjQNKkGRdhLd",
      description: "Explore expectation and curiosity toward philosophy. How do we navigate primary texts when answers seem elusive?"
    },
    {
      id: "vid-2",
      title: "How to Read Primary Philosophy Texts",
      category: "Short Reel",
      duration: "01:30",
      embedUrl: "",
      description: "A quick 90-second guide to breaking down dense paragraphs without getting overwhelmed."
    }
  ],

  artworks: [
    {
      id: "art-1",
      title: "Shadows of Thought",
      year: "2026",
      medium: "Ink and Graphite on Parchment",
      image: "images/tate1.jpeg",
      note: "Exploring perceptual shadow play and Plato's cave allegory."
    },
    {
      id: "art-2",
      title: "Aesthetic Study II",
      year: "2026",
      medium: "Oil and Sand on Canvas",
      image: "images/tate2.jpeg",
      note: "A visual reflection on quiet study spaces and late-night focus."
    },
    {
      id: "art-3",
      title: "Metaphysical Horizon",
      year: "2026",
      medium: "Monotype Print on Linen",
      image: "images/tate3.jpeg",
      note: "Exploring the boundary where textual analysis transforms into intuition."
    }
  ]
};
