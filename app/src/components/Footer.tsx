import { Component, For } from "solid-js";

type FooterLinkProps = {
  href: string;
  label: string;
};

const links: Array<FooterLinkProps> = [
  {
    href: "https://news.ycombinator.com/newsguidelines.html",
    label: "Guidelines",
  },
  { href: "https://news.ycombinator.com/newsfaq.html", label: "FAQ" },
  { href: "https://github.com/HackerNews/API", label: "API" },
  { href: "https://news.ycombinator.com/security.html", label: "Security" },
  { href: "https://www.ycombinator.com/legal/", label: "Legal" },
  { href: "https://www.ycombinator.com/apply/", label: "Apply to YC" },
  { href: "https://github.com/AdisonCavani", label: "Contact" },
];

const Footer: Component = () => {
  return (
    <footer class="mx-auto mt-8 w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div class="border-t-2 border-neutral-200 py-10">
        <p class="text-center text-sm leading-6 text-slate-600">
          © {new Date().getFullYear()} Adison Cavani. All rights reserved.
        </p>
        <div class="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <For each={links}>
            {({ href, label }, index) => (
              <>
                <a href={href} target="_blank" rel="noreferrer">
                  {label}
                </a>
                {index() !== links.length - 1 && (
                  <div class="h-4 w-px bg-slate-500/50" />
                )}
              </>
            )}
          </For>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
