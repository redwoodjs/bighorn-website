export type RoadmapEntryStatus = 'done' | 'soon' | 'planned' | 'in-progress'
export type RoadmapEntry = {
  title: string
  description: string
  status: RoadmapEntryStatus
}

export const roadmap: RoadmapEntry[] = [
  {
    title: 'React Server Components, Server Side Cells (async)',
    description:
      'Implement efficient data fetching mechanisms on the server to retrieve and serve data to the client-side application, optimizing performance and reducing latency for a better user experience.',
    status: 'done',
  },
  {
    title: 'Integrate Server Side Rendering with React Server Components',
    description:
      'Seamlessly integrate Server Side Rendering (SSR) with React Server Components to enable dynamic content rendering on the server, improving load times and SEO while maintaining a rich interactive user experience.',
    status: 'soon',
  },
  {
    title: 'Server Side Routing',
    description:
      'Implement server-side routing to manage navigation and URL handling efficiently, improving user experience and enabling direct linking to specific content within the application.',
    status: 'done',
  },
  {
    title: 'Client Side Routing',
    description:
      'Maintain client-side routing to enable seamless, single-page application navigation without full page reloads, leveraging dynamic content loading for a smoother user experience.',
    status: 'soon',
  },
  {
    title: 'Client Side Cells (GraphQL)',
    description:
      'Maintain client-side cells that empower users to execute GraphQL calls directly from the client, facilitating real-time data interaction and updates within the application.',
    status: 'done',
  },
  {
    title: 'CSS Support',
    description:
      'Implement comprehensive CSS support to allow developers to style their applications with ease, supporting both traditional stylesheets and modern CSS-in-JS solutions for flexible, component-scoped styling.',
    status: 'done',
  },
  {
    title: 'ESM Support',
    description:
      'Provide full support for ECMAScript modules (ESM) to enable modern, efficient JavaScript development workflows, allowing for better code organization and compatibility with the latest web standards.',
    status: 'soon',
  },
  {
    title: 'External Resources',
    description:
      'Expand the framework to include external resource support, enabling seamless integration of SVGs and custom fonts to enhance visual design and typographic flexibility.',
    status: 'soon',
  },
  {
    title: 'New Create Redwood App',
    description:
      'Develop a Redwood Command Line Interface (CLI) tool to streamline development processes, offering commands for project scaffolding, code generation, and utility functions to enhance developer productivity.',
    status: 'planned',
  },
  {
    title: 'Deploying',
    description:
      'Facilitate a smooth deployment process for RedwoodJS applications, integrating with popular hosting services and providing clear documentation on best practices for deploying to production environments.',
    status: 'planned',
  },
  {
    title: 'DX',
    description:
      'Enhance the developer experience by implementing hot reloading features within the development environment, allowing immediate feedback and iteration on changes without needing to manually refresh the application.',
    status: 'in-progress',
  },
  {
    title: 'Server Actions and Mutations',
    description:
      'Asynchronous server-side functions designed to handle form submissions and data mutations across client and server components.',
    status: 'planned',
  },
]
