// src/app/App.tsx
import React from "react";
import { Page } from "./Page.js";

const Clock = {
	$$typeof: Symbol.for("react.client.reference"),
	$$id: "src/app/Clock.tsx",
	name: "Clock",
	chunks: ["pika", "chu"],
} as unknown as React.ComponentType;

export const App: React.FC = () => {
	return (
		<Page>
			<p>Hello, world!</p>
			<Clock />
		</Page>
	);
};
