"use client";

import { Hydrate as RQHydrate, HydrateProps } from "@tanstack/react-query";

// custom Hydrate component to solve react-query problems
function Hydrate(props: HydrateProps) {
  return <RQHydrate {...props} />;
}

export default Hydrate;
