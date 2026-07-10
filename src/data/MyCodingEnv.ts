import type { BlogPost, BlogBlock } from "./ConnectingDots";

export const blogPosts: BlogPost[] = [
  {
    slug: "my-coding-setup",
    title: "The Setup That Changed How I Code",
    date: "10 July 2026",
    description:
      "my dev environment is a vibe. here's what i use and why i refuse to switch.",
    content: [
      {
        type: "subheading",
        text: "why do i even care about this",
      },
      {
        type: "paragraph",
        text: "idk i just like when things feel nice. a clean setup = brain happy. bad setup = brain sad. it's that simple. i've been tweaking this thing for more than a year now and now it's basically a part of my personality. here's the tour.",
      },
      { type: "subheading", text: "TL;DR" },
      {
        type: "paragraph",
        text: "arch linux (btw), ghostty, vs code, docker, brave, free ai models, and a concerning amount of time spent in the terminal. basically my setup is held together by duct tape and the github student dev pack.",
      },
      { type: "subheading", text: "os — arch linux (btw)" },
      {
        type: "paragraph",
        text: "yes i use arch. yes i'm telling you about it. the memes are real and i've become the thing i swore to destroy. but honestly? it's sick.",
        segments: [
          {
            type: "text",
            text: "yes i use arch. yes i'm telling you about it. ",
          },
          {
            type: "link",
            text: "the memes are real",
            href: "https://x.com/search?q=arch%20linux%20memes&src=typed_query&f=top",
          },
          {
            type: "text",
            text: " and i've become the thing i swore to destroy. but honestly? it's sick. you learn your system inside out, you get everything fresh always, and the ",
          },
          {
            type: "link",
            text: "arch wiki",
            href: "https://wiki.archlinux.org/",
          },
          {
            type: "text",
            text: " is basically the gita of linux. installing it the first time is a rite of passage — you suffer, you learn, you never shut up about it.",
          },
        ],
      },
      { type: "subheading", text: "terminal — ghostty" },
      {
        type: "paragraph",
        text: "i live in the terminal. like actually. my terminal is basically my favorite coworker. ghostty is fast, gpu-accelerated, crisp fonts, zero drama — exactly the kind of energy i need at 2am debugging a css bug.",
        segments: [
          {
            type: "text",
            text: "i live in the terminal. like actually. my terminal is basically my favorite coworker. ghostty is fast, gpu-accelerated, crisp fonts, ",
          },
          { type: "link", text: "zero drama", href: "https://www.youtube.com/watch?v=fx2Z5ZD_Rbo" },
          {
            type: "text",
            text: " — exactly the kind of energy i need at 2am debugging a css bug.",
          },
        ],
      },
      { type: "subheading", text: "package management — pacman & aur" },
      {
        type: "paragraph",
        text: "pacman goes brrr. it's fast, it's simple, it does the job. and when something isn't in the official repos, the AUR has your back. the arch community puts everything in there. it's like a flea market but for software and nobody's trying to sell you a broken lamp.",
        segments: [
          {
            type: "text",
            text: "pacman goes brrr. it's fast, it's simple, it does the job. and when something isn't in the official repos, ",
          },
          { type: "link", text: "the AUR", href: "https://aur.archlinux.org/" },
          {
            type: "text",
            text: " has your back. the arch community puts everything in there. it's like a flea market but for software and nobody's trying to sell you a broken lamp.",
          },
        ],
      },
      { type: "subheading", text: "version management — asdf" },
      {
        type: "paragraph",
        text: "remember when you needed like 5 different version managers for different languages? yeah i don't either because asdf killed all of them. one tool. one .tool-versions file. infinite peace of mind. nvm, pyenv, rustup who? i don't know her.",
      },
      { type: "subheading", text: "editor — vs code" },
      {
        type: "paragraph",
        text: "basic? maybe. effective? absolutely. vs code just works. extensions for days, integrated terminal, git integration, and it doesn't yell at me. i keep it minimal though — good theme, essentials only, keyboard shortcuts i've memorized like a piano player. it's not the cool kid on the block anymore but frankly i don't care.",
      },
      { type: "subheading", text: "git — github cli" },
      {
        type: "paragraph",
        text: "gh is a cheat code. creating prs, reviewing code, checking issues — all from the terminal. i open my browser for youtube and stack overflow. everything else happens in the dark warm embrace of my terminal. feels like magic until a merge conflict ruins your whole day.",
      },
      { type: "subheading", text: "containers — docker" },
      {
        type: "paragraph",
        text: `i just started using docker and honestly it's already saving me. spin up a db in seconds, try stuff, break stuff, tear it down — no mess. still figuring it out but so far it's basically magic.`,
      },
      { type: "subheading", text: "browser — brave" },
      {
        type: "paragraph",
        text: 'no ads. like actually zero. i forgot the internet had ads until i used someone else\'s computer and felt physical pain. brave blocks everything, loads fast, and screams "i value my sanity". also chromium-based so devtools are chefs kiss. honestly this alone fixed my brain.',
      },
      { type: "subheading", text: "devtools" },
      {
        type: "paragraph",
        text: "the browser devtools are my emotional support panels. inspect element, network tab, console — i spend more time here than on my actual code. combined with eslint yelling at me, prettier fixing my mess, and typescript protecting me from myself, the feedback loop is tight.",
      },
      { type: "subheading", text: "ai — the free lunch" },
      {
        type: "paragraph",
        text: "ok so i'm broke but i still want ai to do half my job. enter: opencode.",
        segments: [
          { type: "text", text: "ok so i'm broke but i still want ai to do half my job. enter: " },
          { type: "link", text: "opencode", href: "https://opencode.ai" },
          {
            type: "text",
            text: ". it's my main squeeze — lives in my terminal, knows my projects, doesn't judge my commits. sometimes i use vs code's built-in ai too when i'm feeling fancy.",
          },
        ],
      },
      {
        type: "paragraph",
        text: "the github student dev pack is carrying me hard. here's my current arsenal of free models:",
      },
      {
        type: "list",
        items: [
          "DeepSeek V4 Flash — fast boi",
          "MiMo V2.5",
          "Big Pickle — my precious",
          "Nemotron 3 Ultra",
          "North Mini Code",
          "Hy3",
        ],
      },
      {
        type: "paragraph",
        text: "deepseek v4 flash and big pickle are my ride or dies. fast, smart, and they don't ask for my credit card. earlier i used minimax 2.5 a lot until it went paid — that one hurt.",
      },
      {
        type: "paragraph",
        text: "at one point the student pack gave me claude opus 4.7, sonnet 4.7, gpt 5.4, and some haiku thing. they were so good it makes me wonder how fable 5 would be. but then they vanished. probably back to the ai realm where they came from. i've never paid a single rupee for ai and honestly? that's my flex. maybe someday i'll buy one but today is not that day.",
      },
      {
        type: "paragraph",
        text: "if you know any cracked free models or use something cool on opencode / cursor / whatever — lmk. drop a suggestion or something. i'm always hunting for the next big free thing.",
      },
      { type: "subheading", text: "productivity — notion & excalidraw" },
      {
        type: "paragraph",
        text: "notion is my second brain. actually it's my first brain. the one in my skull is on backup duty. project plans, daily notes, random thoughts at 3am — it all goes there. excalidraw is for when i need to draw messy boxes and arrows to understand what i'm building. hand-drawn energy >>> perfect diagrams.",
      },
      {
        type: "paragraph",
        text: "and that's the whole circus. my setup changes every few months when i find something shinier.",
        segments: [
          { type: "text", text: "and that's " },
          { type: "link", text: "the whole circus", href: "#" },
          {
            type: "text",
            text: ". my setup changes every few months when i find something shinier. the real goal isn't having the most tools — it's having ",
          },
          {
            type: "link",
            text: "the ones that don't get in your way",
            href: "#",
          },
          {
            type: "text",
            text: ". or at least that's what i tell myself while installing my 47th vs code extension.",
          },
        ],
      },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
