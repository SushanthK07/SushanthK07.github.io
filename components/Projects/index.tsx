import useSWR from "swr";
import fetcher from "lib/fetcher";
import { Flex } from "components/Layout/Container/styles";
import { Container, Item } from "components/Posts/styles";
import { Data, ProjectsProps } from "lib/types";

export const Projects = () => {
  const { data } = useSWR<Data>("/api/github", fetcher);

  return (
    <Container>
      <h3>Featured Projects</h3>
      {data?.message ? (
        <h4>Maximum rate limit reached.</h4>
      ) : (
        data?.popular.map((item: ProjectsProps, id: number) => {
          return (
            <a
              href={item.htmlUrl}
              target="_blank"
              className="color-black"
              key={id}
              rel="noopener noreferrer"
            >
              <Item>
                <Flex>
                  <Flex>
                    <span className="item-number">{`${id < 9 ? "0" : ""}${
                      id + 1
                    }`}</span>
                    <h4>{item.name}</h4>
                  </Flex>
                </Flex>
                <p>{item.description}</p>
              </Item>
            </a>
          );
        })
      )}
    </Container>
  );
};
