import React from "react";

import FullContainer from "./AppContainer.style";

const AppContainer = ({ children }: { children: React.ReactNode }) => {
	return <FullContainer>{children}</FullContainer>;
};

export default AppContainer;
