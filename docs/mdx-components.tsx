import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Sandpack } from "@codesandbox/sandpack-react";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    Sandpack,
    Video: (props: any) => (
      <video controls>
        <source src={props.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    LiveExample: (props: any) => (
      <iframe
        src={props.src}
        style={{ width: "100%", height: "500px", border: "none" }}
        title="Live Example"
      />
    ),
  };
}
