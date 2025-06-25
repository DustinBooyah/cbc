"use client";

// import { CognitoAuthProvider } from "@/app/api/auth/provider-auth";
import DashboardLayout from "../(components)/Dashboard/DashboardLayout";
import { ProtectedPage } from "../(components)/ProtectedPage/ProtectedPage";

export default function DashboardShellLayout({ children }: { children: React.ReactNode }) {
  return (
    // <CognitoAuthProvider>
      <ProtectedPage>
        <DashboardLayout>{children}</DashboardLayout>
      </ProtectedPage>
    //  </CognitoAuthProvider>
  );
}