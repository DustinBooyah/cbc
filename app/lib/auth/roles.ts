// Role-based access control configuration for MILogin user types

export type UserRole = 'admin' | 'state_user' | 'third_party' | 'viewer';

export type Permission = 
  | 'view_dashboard'
  | 'create_reports' 
  | 'edit_reports'
  | 'delete_reports'
  | 'manage_users'
  | 'view_analytics'
  | 'export_data'
  | 'admin_access';

// Map MILogin user types to application roles
export const USER_TYPE_ROLE_MAP: Record<string, UserRole> = {
  'State User': 'state_user',
  'Third Party': 'third_party',
  'Administrator': 'admin',
  'Viewer': 'viewer',
  // Add more mappings as needed based on your MILogin user types
};

// Define permissions for each role
export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  admin: [
    'view_dashboard',
    'create_reports',
    'edit_reports', 
    'delete_reports',
    'manage_users',
    'view_analytics',
    'export_data',
    'admin_access'
  ],
  state_user: [
    'view_dashboard',
    'create_reports',
    'edit_reports',
    'delete_reports',
    'view_analytics',
    'export_data'
  ],
  third_party: [
    'view_dashboard',
    'create_reports',
    'edit_reports',
    'view_analytics'
  ],
  viewer: [
    'view_dashboard',
    'view_analytics'
  ]
};

// Helper functions
export function getUserRole(micamusertype: string): UserRole {
  return USER_TYPE_ROLE_MAP[micamusertype] || 'viewer';
}

export function hasPermission(role: UserRole, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) || false;
}

export function hasAnyPermission(role: UserRole, permissions: Permission[]): boolean {
  return permissions.some(permission => hasPermission(role, permission));
}

export function hasAllPermissions(role: UserRole, permissions: Permission[]): boolean {
  return permissions.every(permission => hasPermission(role, permission));
}