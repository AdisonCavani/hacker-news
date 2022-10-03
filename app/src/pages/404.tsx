import { Link } from "@solidjs/router";
import { Component } from "solid-js";

const NotFound: Component = () => {
  return (
    <div class="py-10 px-6">
      <div class="mb-10 text-center text-9xl font-black text-neutral-200">
        404
      </div>
      <h1 class="text-center text-4xl font-black">
        You have found a secret place.
      </h1>
      <p class="m-auto my-8 max-w-lg text-center text-lg text-gray-600">
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </p>
      <div class="flex justify-center">
        <Link href="/">
          <button class="rounded-md px-4 py-3 font-semibold text-orange-500 hover:bg-orange-100">
            Take me back to home page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
