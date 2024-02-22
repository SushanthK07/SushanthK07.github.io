import { useState } from "react";
import { format, differenceInMonths, differenceInYears } from "date-fns";
import { ChildrenStringProps } from "lib/types";
import { COLOR_SPOTIFY_GREEN } from "lib/colorPalette";

import { DividerBorder, StepLi, MoreButton } from "components/Timeline/styles";

const Divider = () => <DividerBorder />;

const Year = ({ children }: ChildrenStringProps) => <h4>{children}</h4>;

const getTimeDifference = (startDate: Date, endDate: Date) => {
  let years = differenceInYears(endDate, startDate);
  let months = (differenceInMonths(endDate, startDate) % 12) + 1;

  if (months >= 12) {
    months -= 12;
    years += 1;
  }

  const formattedYears =
    years > 0 ? `${years} year${years === 1 ? "" : "s"}` : "";
  const formattedMonths =
    months > 0 ? `${months} month${months === 1 ? "" : "s"}` : "";

  return [formattedYears, formattedMonths].filter(Boolean).join(" ");
};

export const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  const Step = ({ title, children }: ChildrenStringProps) => (
    <StepLi>
      <div>
        <svg viewBox="0 0 24 24">
          <g
            fill="none"
            stroke={COLOR_SPOTIFY_GREEN}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <h5>{title}</h5>
      </div>
      <p>{children}</p>
    </StepLi>
  );

  const FullTimeline = () => (
    <>
      <Divider />
      <Year>
        July 2019 - April 2021 (
        {getTimeDifference(new Date(2019, 6), new Date(2021, 3))})
      </Year>
      <ul>
        <Step title="Masters @NITK Surathkal">
          I completed my Masters in Construction Technology and Management at
          NITK Surathkal.
        </Step>
      </ul>
      <Divider />
      <Year>
        July 2017 - July 2019 (
        {getTimeDifference(new Date(2017, 6), new Date(2019, 6))})
      </Year>
      <ul>
        <Step title="Worked as Planning Engineer @L&T">
          Performed Project Scheduling and Critical Path Analysis continuously
          and assigned work to a team based on the schedule, and monitored Work
          Progress for continuous Improvement.
          <br />
          Also handled the Client Invoice & Certification, Quantity surveying.
          Also played a vital role in the Client Management Review Meetings,
          Cost management and Client Correspondence
        </Step>
      </ul>
      <Divider />
      <Year>
        July 2013 - May 2017 (
        {getTimeDifference(new Date(2013, 6), new Date(2017, 4))})
      </Year>
      <ul>
        <Step title="Bachelors @VNIT Nagpur">
          I completed my Bachelors in Civil Engineering at VNIT Nagpur.
        </Step>
      </ul>
      <Divider />
    </>
  );

  return (
    <>
      <h3>Timeline</h3>
      <Year>
        April 2021 - Present ({getTimeDifference(new Date(2021, 3), new Date())}
        )
      </Year>
      <ul>
        <Step title="Currently working in needl.ai as a Senior Software Development Engineer">
          I developed various complex features like Feed Creation, Channels to
          collaborate with people, Admin tool for organizations to manage their
          users, etc in terms of both frontend UI and backend APIs using
          postgres database.
          <br />
          I also worked on the designing and building Notifications (both in app
          and email), designing and building the external APIs for our
          enterprise customers using swagger doc & OpenAPI specification
          <br />
          I also worked on fetching the listed companies data by scraping from
          wikipedia and other sources, and also worked on integrating Open AI's
          capabilities using their APIs to generate keywords for the companies
          for the feed creation
          <br />
          I'm currently leading the team of 5 developers and helping them in
          performing their tasks and also in resolving their queries. I'm also
          responsible for my team's sprint planning, code reviews, and
          deployments.
          <br />
          Technology Stack used: React JS, Node JS, PostgreSQL, Python, AWS,
          Docker, Kubernetes, Azure, Swagger, Material UI, Tailwind CSS, Radix
          UI, Reach UI, slate JS, Lottie Animations etc
        </Step>
      </ul>
      <Divider />
      <Year>
        December 2020 - April 2021 (
        {getTimeDifference(new Date(2020, 11), new Date(2021, 3))})
      </Year>
      <ul>
        <Step title="Full Stack Developer Trainee @Nxtwave">
          I joined Nxtwave as a Full Stack Developer Trainee. I learned
          programming & web development fundamentals and got trained to build
          efficient MERN stack applications end-to-end.
          <br />I also helped the fellow developers in clarifying their coding
          related doubts. Currently, I'm mentoring the naive developers and
          resolving their queries on career and coding.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <MoreButton type="button" onClick={() => showFullTimeline(true)}>
          See More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </MoreButton>
      )}
    </>
  );
};
