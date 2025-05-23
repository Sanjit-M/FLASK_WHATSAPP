import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Chat from "./pages/Chat.jsx"
import NotFound from "./pages/NotFound.jsx"

import ProtectedRoute from "./ProtectedRoute.jsx"

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/chat"
					element={
						<ProtectedRoute>
							<Chat />
						</ProtectedRoute>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
