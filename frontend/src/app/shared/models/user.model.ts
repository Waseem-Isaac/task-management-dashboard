export interface User {
  _id: string;
  name: string;
  email: string;
  active?: boolean;
  role: 'TEAM_LEAD' | 'MEMBER';
  avatarUrl?: string;
  managedBy?: {
    _id: string;
    name: string;
    avatarUrl?: string;
    email?: string;
  };
}

export interface UserFormData {
  name: string;
  email: string;
}