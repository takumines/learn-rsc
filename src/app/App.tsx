import { Page } from "./Page.js"
import { Clock } from "./Clock.js"

export const App: React.FC = () => {
	return (
		<Page>
			<p>Hello, world!</p>
			<Clock />
		</Page>
	);
};
