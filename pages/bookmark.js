import React from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import BookmarkPostList from "../components/post/BookmarkPostList";

const Bookmark = ({ data }) => {

	return (
		<>
			<Head>
				<meta name="google" content="notranslate" />
			</Head>

			<Layout>
				{/* main section */}
				<main class="bg-white dark:bg-black">
					<div class="max-w-25xl mx-auto py-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
						<div class="px-4 py-2 sm:px-0 bg-white dark:bg-black">
							<div class="h-100">
								<BookmarkPostList />
							</div>
						</div>
					</div>
				</main>
			</Layout>
		</>
	);
};

export default Bookmark;

