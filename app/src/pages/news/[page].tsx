import { useRouteData } from "@solidjs/router";
import { Accessor, Component, For, Show } from "solid-js";
import Pagination from "../../components/Pagination";
import StoryComponent from "../../components/Story";
import StorySkeleton from "../../components/StorySkeleton";
import { Story } from "../../lib/types";

type RouteDataProps = {
  page: Accessor<number>;
  stories: Accessor<Array<Story>>;
};

const News: Component = () => {
  const { page, stories } = useRouteData<RouteDataProps>();

  return (
    <main class="flex flex-col items-center my-12 space-y-10">
      <article class="flex flex-col border-2 rounded-lg border-neutral-200 max-w-5xl mx-6 bg-white overflow-hidden">
        <Show when={!stories()} fallback={<StorySkeleton />}>
          <For each={stories()}>
            {(story, index) => (
              <StoryComponent {...story} index={index} page={page} />
            )}
          </For>
        </Show>
      </article>

      <Pagination currentPage={page} />
    </main>
  );
};

export default News;
