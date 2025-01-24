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
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: "O(log n)",
  },
  {
    id: 2,
    question: "Which hook is used for side effects in React?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: "useEffect",
  },
  {
    id: 3,
    question: "What is closure in JavaScript?",
    options: [
      "A way to close browser windows",
      "A function that has access to variables in its outer scope",
      "A method to close database connections",
      "A way to end loops",
    ],
    correctAnswer: "A function that has access to variables in its outer scope",
  },
  {
    id: 4,
    question: "What is the purpose of the 'key' prop in React lists?",
    options: [
      "It's just for naming conventions",
      "To help React identify which items have changed",
      "To style list items",
      "To count list items",
    ],
    correctAnswer: "To help React identify which items have changed",
  },
  {
    id: 5,
    question: "What is the difference between 'let' and 'const'?",
    options: [
      "No difference",
      "'let' is block-scoped, 'const' is function-scoped",
      "'const' cannot be reassigned, 'let' can be",
      "'let' is faster than 'const'",
    ],
    correctAnswer: "'const' cannot be reassigned, 'let' can be",
  },
  {
    id: 6,
    question: "What is Redux used for?",
    options: [
      "Database management",
      "State management",
      "Server-side rendering",
      "API calls",
    ],
    correctAnswer: "State management",
  },
  {
    id: 7,
    question: "What is the virtual DOM?",
    options: [
      "A fake DOM that doesn't exist",
      "A lightweight copy of the actual DOM",
      "A DOM for virtual reality",
      "A backup of the DOM",
    ],
    correctAnswer: "A lightweight copy of the actual DOM",
  },
  {
    id: 8,
    question: "What is a Promise in JavaScript?",
    options: [
      "A guarantee to pay money",
      "An object representing eventual completion of an async operation",
      "A type of function",
      "A way to promise code will work",
    ],
    correctAnswer:
      "An object representing eventual completion of an async operation",
  },
  {
    id: 9,
    question: "What is the purpose of TypeScript?",
    options: [
      "To make JavaScript slower",
      "To add static typing to JavaScript",
      "To replace JavaScript",
      "To make websites prettier",
    ],
    correctAnswer: "To add static typing to JavaScript",
  },
  {
    id: 10,
    question: "What is a pure function?",
    options: [
      "A function written purely in JavaScript",
      "A function that always returns the same output for the same input",
      "A function without bugs",
      "A function that only uses pure JavaScript features",
    ],
    correctAnswer:
      "A function that always returns the same output for the same input",
  },
  {
    id: 11,
    question: "What is the purpose of useCallback in React?",
    options: [
      "To memoize functions",
      "To create callbacks",
      "To handle errors",
      "To manage state",
    ],
    correctAnswer: "To memoize functions",
  },
  {
    id: 12,
    question: "What is the difference between null and undefined?",
    options: [
      "They are exactly the same",
      "undefined means a variable is declared but not assigned, null is an assigned value",
      "null is used in TypeScript, undefined in JavaScript",
      "undefined is used in TypeScript, null in JavaScript",
    ],
    correctAnswer:
      "undefined means a variable is declared but not assigned, null is an assigned value",
  },
  {
    id: 13,
    question: "What is the purpose of useMemo in React?",
    options: [
      "To create memos",
      "To memoize values",
      "To remember user inputs",
      "To cache API responses",
    ],
    correctAnswer: "To memoize values",
  },
  {
    id: 14,
    question: "What is event bubbling?",
    options: [
      "Creating new events",
      "The process of event propagation from child to parent elements",
      "A way to prevent events",
      "A type of event handling",
    ],
    correctAnswer:
      "The process of event propagation from child to parent elements",
  },
  {
    id: 15,
    question: "What is the purpose of the useRef hook?",
    options: [
      "To create references to DOM elements",
      "To refer to other components",
      "To reference external libraries",
      "To create references to functions",
    ],
    correctAnswer: "To create references to DOM elements",
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
