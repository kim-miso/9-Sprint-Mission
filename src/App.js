import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/LoginPage/LoginPage";
import MarketPage from "./pages/MarketPage/MarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import CommunityFeedPage from "./pages/CommunityFeedPage/CommunityFeedPage";
import Header from "./components/Layout/Header";

function App() {
  return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />

				<div className="withHeader">
					<Routes>
						<Route index element={<HomePage />} />
						<Route path="login" element={<LoginPage />} />
						<Route path="items" element={<MarketPage />} />
						<Route path="additem" element={<AddItemPage />} />
						<Route path="community" element={<CommunityFeedPage />} />
					</Routes>
				</div>
			</BrowserRouter>
		</ThemeProvider>
  );
}

export default App;
