"use client";

import { useAuth } from "react-oidc-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader, Center } from "@mantine/core";

export function ProtectedPage({ children }: { children: React.ReactNode }) {
	const auth = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!auth.isLoading && !auth.isAuthenticated) {
			router.replace("/login");
		}
	}, [auth.isLoading, auth.isAuthenticated, router]);

	if (auth.isLoading) {
		return (
			<Center h="100vh">
				<Loader size="lg" />
			</Center>
		);
	}

	if (!auth.isAuthenticated) {
		return null;
	}

	return <>{children}</>;
}

// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";

// export function ProtectedPage({ children }: { children: React.ReactNode }) {
// 	const router = useRouter();
// 	const [status, setStatus] = useState<"loading" | "authed" | "login">("loading");

// 	useEffect(() => {
// 		const match = document.cookie.match(/ml_id_token=([^;]+)/);
// 		if (!match) return setStatus("login");

// 		try {
// 			const payload = jwtDecode<{ exp: number }>(match[1]);
// 			if (payload.exp * 1000 < Date.now()) return setStatus("login");
// 			setStatus("authed");
// 		} catch {
// 			return setStatus("login");
// 		}
// 	}, []);

// 	if (status === "loading") {
// 		return <div>Loading…</div>;
// 	}
// 	if (status === "login") {
// 		router.replace("/api/auth/login");
// 		return null;
// 	}
// 	return <>{children}</>;
// }