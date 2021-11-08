type headingPrps = {
  children: string;
};
export const Heading = (props: headingPrps) => {
  return <h2>{props.children}</h2>;
};
