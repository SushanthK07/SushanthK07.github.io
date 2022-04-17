import type { NextApiRequest, NextApiResponse } from "next";
import { Data } from "lib/types";

const MY_POPULAR_REPOS = [
  "todoList",
  "wikiSearch",
  "QuoteGenerator",
  "MagicNotes",
  "Node-TwitterClone",
  "Node-TodoApp",
  "myBlog",
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const userReposResponse = await fetch(
        "https://api.github.com/users/SushanthK07/repos"
      );

      const repositories = await userReposResponse.json();

      const myPopularRepos = repositories.filter(
        (repo: Data) => !repo.fork && MY_POPULAR_REPOS.includes(repo.name)
      );

      const formattedRepos = myPopularRepos.map((repo: Data) => ({
        htmlUrl: repo.html_url,
        name: repo.name.substring(0, 65),
        stars: repo.stargazers_count,
        description: repo.description,
      }));

      const orderedRepos = formattedRepos.sort(({ name: a }: Data, { name: b}: Data) => {
        const indexOfA = MY_POPULAR_REPOS.indexOf(a);
        const indexOfB = MY_POPULAR_REPOS.indexOf(b);
        if (indexOfA < indexOfB) {
          return -1;
        } else if (indexOfA > indexOfB) {
          return 1;
        } else {
          return 0;
        }
      });

      res.setHeader(
        "Cache-Control",
        "public, s-maxage=1200, stale-while-revalidate=600"
      );

      return res.status(200).json({
        popular: orderedRepos,
      });
    }
  } catch (e: any) {
    return res.status(500).json({ message: e.message });
  }
}
