import "../styles/globals.css";
import React, { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function MyApp({ Component, pageProps }) {
	const [queryClient] = React.useState(() => new QueryClient());

	return (
		<RecoilRoot>
			<ThemeProvider defaultTheme="light" attribute="class">
				<QueryClientProvider client={queryClient}>
					<Hydrate state={pageProps.dehydratedState}>
						<SessionProvider session={pageProps.session}>
							<Component {...pageProps} />
						</SessionProvider>
					</Hydrate>
					<ReactQueryDevtools />
				</QueryClientProvider>
			</ThemeProvider>
		</RecoilRoot>
	);
}

export default MyApp;
