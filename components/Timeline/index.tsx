import { useState } from "react";
import { ChildrenStringProps } from "lib/types";
import { COLOR_SPOTIFY_GREEN } from "lib/colorPalette";

import { DividerBorder, StepLi, MoreButton } from "components/Timeline/styles";

const Divider = () => <DividerBorder />;

const Year = ({ children }: ChildrenStringProps) => <h4>{children}</h4>;

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
      <Year>2019 - 2021</Year>
      <ul>
        <Step title="Masters @NITK Surathkal">
          I completed my Masters in Construction Technology and Management at
          NITK Surathkal.
        </Step>
      </ul>
      <Divider />
      <Year>2017 - 2019</Year>
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
      <Year>2013 - 2017</Year>
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
      <Year>2021 - Present</Year>
      <ul>
        <Step title="Joined needl.ai as a Full Stack Dev">
          I developed various complex features like Feed Creation, Channels to
          collaborate with people, Admin tool for organizations to manage their
          users, etc (both Frontend and Backend) in the application.
          <br />
          Technology Stack used: React JS, Node JS, PostgreSQL, Python, AWS
        </Step>
      </ul>
      <Divider />
      <Year>2020 - 2021</Year>
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
