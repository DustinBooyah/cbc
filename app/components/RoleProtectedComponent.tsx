'use client';

import { useAuth } from '@/app/hooks/useAuth';
import { type Permission } from '@/app/lib/auth/roles';

interface RoleProtectedComponentProps {
  permission: Permission;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function RoleProtectedComponent({ 
  permission, 
  children, 
  fallback = null 
}: RoleProtectedComponentProps) {
  const { checkPermission, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!checkPermission(permission)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

// Example usage in a component:
/*
export function DashboardPage() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome, {user?.firstname}!</h1>
      
      <RoleProtectedComponent permission="create_reports">
        <button>Create New Report</button>
      </RoleProtectedComponent>

      <RoleProtectedComponent 
        permission="admin_access"
        fallback={<p>Admin access required</p>}
      >
        <AdminPanel />
      </RoleProtectedComponent>
    </div>
  );
}
*/