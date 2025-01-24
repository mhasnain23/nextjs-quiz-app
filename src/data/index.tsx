// export const quizzes = [
//   {
//     id: 1,
//     question:
//       "What is the default rendering method for components in Next.js 15 App Router?",
//     options: [
//       "Client-side rendering",
//       "Server-side rendering (SSR)",
//       "Static site generation (SSG)",
//       "Server Components",
//     ],
//     answer: "Server Components",
//   },
//   {
//     id: 2,
//     question: "How do you specify dynamic routes in the App Router?",
//     options: [
//       "pages/[dynamic].tsx",
//       "app/[dynamic]/page.tsx",
//       "routes/[dynamic].js",
//       "dynamic/[dynamic].jsx",
//     ],
//     answer: "app/[dynamic]/page.tsx",
//   },
//   {
//     id: 3,
//     question:
//       "What function should you use in Next.js 15 to handle 404 pages in the App Router?",
//     options: ["getStaticProps", "notFound()", "render404()", "useNotFound()"],
//     answer: "notFound()",
//   },
//   {
//     id: 4,
//     question:
//       "Which of the following is used to define metadata in Next.js 15 App Router?",
//     options: [
//       "useMetadata",
//       "<Head> component",
//       "metadata object in layout.tsx or page.tsx",
//       "getServerSideProps",
//     ],
//     answer: "metadata object in layout.tsx or page.tsx",
//   },
//   {
//     id: 5,
//     question: "What is the primary purpose of the `next/font` module?",
//     options: [
//       "To import fonts from third-party libraries",
//       "To optimize font loading and improve performance",
//       "To preload all fonts during the build phase",
//       "To disable font subsetting",
//     ],
//     answer: "To optimize font loading and improve performance",
//   },
//   {
//     id: 6,
//     question:
//       "What is the default caching behavior of `fetch` in a Next.js server component?",
//     options: [
//       "No cache",
//       "Cache on the client only",
//       "Cache on the server only",
//       "Cache first (server cache)",
//     ],
//     answer: "Cache first (server cache)",
//   },
//   {
//     id: 7,
//     question:
//       "Which directive in the `next.config.js` is used to configure image optimization?",
//     options: ["images", "optimize", "next/image", "media"],
//     answer: "images",
//   },
//   {
//     id: 8,
//     question:
//       "What does ISR (Incremental Static Regeneration) enable in Next.js?",
//     options: [
//       "Dynamic rendering of client-side pages",
//       "Periodic regeneration of static pages",
//       "Real-time database synchronization",
//       "On-demand API call caching",
//     ],
//     answer: "Periodic regeneration of static pages",
//   },
//   {
//     id: 9,
//     question:
//       "Which command is used to build and export a Next.js app as a static site?",
//     options: [
//       "next export",
//       "next static",
//       "npm run build-static",
//       "next build --static",
//     ],
//     answer: "next export",
//   },
//   {
//     id: 10,
//     question: "How can you define a loading state in a server component route?",
//     options: [
//       "Create a `loading.tsx` file in the route directory",
//       "Use a `useLoading()` hook",
//       "Add a `loading` function in `next.config.js`",
//       "Use `suspense` in the component",
//     ],
//     answer: "Create a `loading.tsx` file in the route directory",
//   },
//   {
//     id: 11,
//     question:
//       "What is the purpose of the `generateStaticParams` function in a dynamic route?",
//     options: [
//       "To fetch data for all static paths at build time",
//       "To render fallback content during navigation",
//       "To generate client-side routes dynamically",
//       "To optimize API calls on the server",
//     ],
//     answer: "To fetch data for all static paths at build time",
//   },
//   {
//     id: 12,
//     question: "What are React Server Components (RSC) used for in Next.js?",
//     options: [
//       "To reduce client-side JavaScript bundle size",
//       "To manage client-side state efficiently",
//       "To enable real-time communication between server and client",
//       "To create standalone server-side APIs",
//     ],
//     answer: "To reduce client-side JavaScript bundle size",
//   },
//   {
//     id: 13,
//     question: "Which method is used for middleware in Next.js 15?",
//     options: [
//       "pages/middleware.js",
//       "middleware.ts",
//       "app/middleware.ts",
//       "api/middleware.js",
//     ],
//     answer: "middleware.ts",
//   },
//   {
//     id: 14,
//     question:
//       "Which of the following is NOT a valid method for fetching data in Next.js?",
//     options: [
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is a key feature introduced in Next.js 14?",
    options: [
      "Support for Server Actions",
      "Automatic TypeScript Setup",
      "Built-in Redux Integration",
    ],
    correctAnswer: "Support for Server Actions",
  },
  {
    id: 2,
    question:
      "What is the purpose of the `Server Actions` feature in Next.js 14?",
    options: [
      "To handle client-side routing",
      "To simplify server-side logic within React components",
      "To enable caching for static assets",
    ],
    correctAnswer: "To simplify server-side logic within React components",
  },
  {
    id: 3,
    question:
      "Which file structure is now used by default in Next.js 14 for routing?",
    options: ["Pages directory", "App directory", "API directory"],
    correctAnswer: "App directory",
  },
  {
    id: 4,
    question:
      "What does the `next/font` package introduced in Next.js 14 enable?",
    options: [
      "Dynamic font imports from external sources",
      "Improved font optimization and automatic loading",
      "Automatic font caching on the client side",
    ],
    correctAnswer: "Improved font optimization and automatic loading",
  },
  {
    id: 5,
    question: "What major upgrade in Next.js 15 optimizes edge rendering?",
    options: [
      "Streaming support for SSR",
      "On-demand Incremental Static Regeneration",
      "Middleware integration with Edge API Routes",
    ],
    correctAnswer: "Streaming support for SSR",
  },
  {
    id: 6,
    question:
      "What is the default data fetching strategy in the `app` directory in Next.js 14?",
    options: [
      "Static Site Generation (SSG)",
      "Server-side Rendering (SSR)",
      "React Server Components",
    ],
    correctAnswer: "React Server Components",
  },
  {
    id: 7,
    question: "How can you enable TurboPack in Next.js 14?",
    options: [
      "Set `turbo: true` in `next.config.js`",
      "Run `next dev --turbo`",
      "It is enabled by default",
    ],
    correctAnswer: "Run `next dev --turbo`",
  },
  {
    id: 8,
    question:
      "Which of the following features is NOT supported in the `app` directory?",
    options: [
      "Client components",
      "Middleware",
      "Dynamic routing using `[param]`",
    ],
    correctAnswer: "Middleware",
  },
  {
    id: 9,
    question:
      "What is the purpose of the `generateStaticParams` function in Next.js 14?",
    options: [
      "To define dynamic routes for static generation",
      "To fetch data at runtime for client components",
      "To optimize static file imports",
    ],
    correctAnswer: "To define dynamic routes for static generation",
  },
  {
    id: 10,
    question:
      "What command is used to enable experimental features in Next.js 15?",
    options: [
      "Add `experimental` config in `next.config.js`",
      "Run `next build --experimental`",
      "Add a `.experimental` file to the root directory",
    ],
    correctAnswer: "Add `experimental` config in `next.config.js`",
  },
  {
    id: 11,
    question:
      "What caching mechanism does Next.js 15 use by default for Edge Routes?",
    options: [
      "No-store caching",
      "Stale-while-revalidate (SWR)",
      "On-demand caching",
    ],
    correctAnswer: "Stale-while-revalidate (SWR)",
  },
  {
    id: 12,
    question:
      "What improvement was introduced in the `next/image` component in Next.js 14?",
    options: [
      "Native lazy loading",
      "Enhanced WebP support",
      "Automatic handling of AVIF format",
    ],
    correctAnswer: "Automatic handling of AVIF format",
  },
  {
    id: 13,
    question: "What new API in Next.js 15 enhances SEO performance?",
    options: [
      "Static Metadata API",
      "Dynamic Metadata API",
      "Headless Metadata API",
    ],
    correctAnswer: "Static Metadata API",
  },
  {
    id: 14,
    question:
      "How can you transition between server and client components in the `app` directory?",
    options: [
      "Using the `useClient` directive",
      "By wrapping with a special `<ServerOnly>` component",
      "By nesting components inside `pages/api`",
    ],
    correctAnswer: "Using the `useClient` directive",
  },
  {
    id: 15,
    question:
      "What new feature in Next.js 15 improves analytics and monitoring?",
    options: [
      "Native telemetry support",
      "Built-in Sentry integration",
      "New `Analytics.js` package",
    ],
    correctAnswer: "Native telemetry support",
  },
  {
    id: 16,
    question: "What is the purpose of the `middleware.js` file in Next.js 15?",
    options: [
      "To define middleware for API routes",
      "To add custom logic before rendering or routing",
      "To cache assets dynamically",
    ],
    correctAnswer: "To add custom logic before rendering or routing",
  },
  {
    id: 17,
    question:
      "What is a significant feature of the `app` directory compared to `pages`?",
    options: [
      "Support for layouts and nested routing",
      "Automatic TypeScript integration",
      "Direct database connection support",
    ],
    correctAnswer: "Support for layouts and nested routing",
  },
  {
    id: 18,
    question: "How does Next.js 14 handle streaming data?",
    options: [
      "Using React Suspense and Server Components",
      "With a dedicated streaming API",
      "By enabling WebSocket support",
    ],
    correctAnswer: "Using React Suspense and Server Components",
  },
  {
    id: 19,
    question: "What is a key advantage of the `app` directory?",
    options: [
      "Full support for server-only components",
      "Backward compatibility with older Next.js versions",
      "Improved compatibility with CSS-in-JS libraries",
    ],
    correctAnswer: "Full support for server-only components",
  },
  {
    id: 20,
    question: "What is the role of `React Server Components` in Next.js 14+?",
    options: [
      "To replace static site generation",
      "To enable faster server-side rendering",
      "To allow server-rendered components within React applications",
    ],
    correctAnswer:
      "To allow server-rendered components within React applications",
  },
];

//       "getStaticProps",
//       "getServerSideProps",
//       "getClientSideProps",
//       "fetch in server components",
//     ],
//     answer: "getClientSideProps",
//   },
//   {
//     id: 15,
//     question: "How do you define an API route in Next.js?",
//     options: [
//       "app/api/[route]/page.ts",
//       "api/[route]/index.js",
//       "pages/api/[route].js",
//       "routes/api/[route].tsx",
//     ],
//     answer: "pages/api/[route].js",
//   },
//   {
//     id: 16,
//     question: "What is the purpose of `next/link`?",
//     options: [
//       "To prefetch and navigate between pages",
//       "To lazy load external scripts",
//       "To render server-side links",
//       "To dynamically create routes",
//     ],
//     answer: "To prefetch and navigate between pages",
//   },
//   {
//     id: 17,
//     question:
//       "What environment variable is used to distinguish between dev and production mode?",
//     options: ["NEXT_PUBLIC_ENV", "NODE_ENV", "NEXT_ENV", "BUILD_ENV"],
//     answer: "NODE_ENV",
//   },
//   {
//     id: 18,
//     question: "What does the `unstable_cache` function do in Next.js 15?",
//     options: [
//       "Caches dynamic API calls on the server",
//       "Enables caching for static pages only",
//       "Caches client-side JavaScript bundles",
//       "Enables cache invalidation via ISR",
//     ],
//     answer: "Caches dynamic API calls on the server",
//   },
//   {
//     id: 19,
//     question: "What is the purpose of `useRouter` in a client component?",
//     options: [
//       "To fetch server-side data",
//       "To manage URL and navigation programmatically",
//       "To render dynamic layouts",
//       "To initialize client-side APIs",
//     ],
//     answer: "To manage URL and navigation programmatically",
//   },
//   {
//     id: 20,
//     question:
//       "Which protocol does `next/image` use for image optimization by default?",
//     options: ["HTTP", "HTTPS", "Image CDN", "AVIF"],
//     answer: "Image CDN",
//   },
// ];
