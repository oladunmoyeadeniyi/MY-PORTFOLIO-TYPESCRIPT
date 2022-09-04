import { Down_svg } from "./All.Types";

export const DownSVG = (props: Down_svg) => {
  const { linkTo, classes } = props;
  return (
    <a href={linkTo}>
      <svg
        className={classes}
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2001/svg"
      >
        <path
          stroke="var(--tds-icon--fill, #171a20)"
          strokeWidth="1.5"
          d="m19.5 12.5-4.5 4-4.5-4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
};
