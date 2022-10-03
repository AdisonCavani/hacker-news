import { Link } from "@solidjs/router";
import { Component } from "solid-js";

const Nav: Component = () => {
  return (
    <nav class="flex items-center bg-orange-500 p-1">
      <Link href="/" class="font-bold">
        <h2>Hacker News</h2>
      </Link>

      <div class="flex items-center mx-6 space-x-4 text-sm">
        <Link href="/newest">New</Link>
        <Link href="/front">Past</Link>
        <Link href="/ask">Ask</Link>
        <Link href="/show">Show</Link>
        <Link href="/jobs">Jobs</Link>
        <Link href="/submit">Submit</Link>
      </div>
    </nav>
  );
};

export default Nav;
