import Fuse from "fuse.js";
import { projInfo } from "./paperInfo.js";

function searchProjects(query) {
  const options = {
    keys: ["title", "tags", "acceptedTo"],
    threshold: 0.4,
  };

  const fuse = new Fuse(projInfo, options);
  const results = fuse.search(query);

  return results.map((result) => result.item);
}

export default searchProjects;
