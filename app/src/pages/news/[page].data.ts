import { useParams } from "@solidjs/router";
import { createResource } from "solid-js";
import fetchAPI from "../../lib/api";

const mapStories = {
  top: "news",
  new: "newest",
  show: "show",
  ask: "ask",
  job: "jobs",
};

export default function NewsData({ location, params }) {
  const page = () => +(location.query.page || 1),
    type = () => params.stories || "top",
    [stories] = createResource(
      () => `${mapStories[type()]}?page=${page()}`,
      fetchAPI
    );

  return { type, stories, page };
}
