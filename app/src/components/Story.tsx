import { Link } from "@solidjs/router";
import { Accessor, Component, Show } from "solid-js";
import { plural } from "../lib/plural";
import { Story } from "../lib/types";

interface Props extends Story {
  index: Accessor<number>;
  page: Accessor<number>;
}

const StoryComponent: Component<Props> = ({
  index,
  page,
  id,
  title,
  domain,
  url,
  time_ago: date,
  points: score,
  user,
  comments_count,
}) => {
  const offset = (page() - 1) * 30;

  return (
    <div
      class={`inline-flex pr-2 py-3 bg-white border-neutral-200 ${
        index() === 0 ? "" : "border-t-2"
      }`}
    >
      <div class="flex justify-center items-center px-4">
        <h3 class="text-neutral-500 font-bold text-lg">
          {index() + offset + 1}
        </h3>
      </div>
      <div class="flex flex-col justify-center">
        <h3 class="font-medium text-base sm:text-lg">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            class="mr-2 visited:text-neutral-500"
          >
            {title}
          </a>
          <Show
            when={url && !url.startsWith("item?id=")}
            fallback={<Link href={`/${id}`}>{title}</Link>}
          >
            <span class="font-normal text-xs sm:text-sm text-neutral-500">
              (
              <Link href={`/site/${domain}`} class="hover:underline">
                {domain}
              </Link>
              )
            </span>
          </Show>
        </h3>
        <div class="text-neutral-500 text-xs sm:text-sm">
          <p>
            {plural(score, "point")} by{" "}
            <Link href={`/user/${user}`} class="hover:underline">
              {user}
            </Link>{" "}
            | {date} |{" "}
            <Link href={`/post/${id}`} class="hover:underline">
              {comments_count > 0
                ? plural(comments_count, "comment")
                : "discuss"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryComponent;
