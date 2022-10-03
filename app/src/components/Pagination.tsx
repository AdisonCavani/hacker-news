import { Link } from "@solidjs/router";
import { Accessor, Component, Show } from "solid-js";

type Props = {
  currentPage: Accessor<number>;
};

const Pagination: Component<Props> = ({ currentPage }) => {
  return (
    <nav class="flex text-neutral-600 font-medium space-x-4">
      <Show
        when={currentPage() > 1}
        fallback={
          <button
            disabled
            class="cursor-not-allowed bg-neutral-200 flex border-2 border-neutral-300 rounded-md px-4 py-1"
          >
            Previous
          </button>
        }
      >
        <Link
          href={`/news?page=${currentPage() - 1}`}
          class="flex border-2 border-neutral-300 rounded-md px-4 py-1 hover:bg-neutral-200"
        >
          Previous
        </Link>
      </Show>
      <Show
        when={currentPage() < 29}
        fallback={
          <button
            disabled
            class="cursor-not-allowed bg-neutral-200 flex border-2 border-neutral-300 rounded-md px-4 py-1"
          >
            Next
          </button>
        }
      >
        <Link
          href={`/news?page=${currentPage() + 1}`}
          class="flex border-2 border-neutral-300 rounded-md px-4 py-1 hover:bg-neutral-200"
        >
          Next
        </Link>
      </Show>
    </nav>
  );
};

export default Pagination;
