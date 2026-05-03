export interface Board {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  createdBy: {
    _id: string;
    name: string;
    email: string;
    avatarUrl?: string;
  };
}
