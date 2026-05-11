/** Transfer Requests Model */

export interface TransferRequest {
  _id: string;
  member: {_id: string; name: string; avatarUrl?: string; email?: string};
  fromLead: {_id: string; name: string; avatarUrl?: string; email?: string};
  toLead: {_id: string; name: string; avatarUrl?: string; email?: string};
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt?: string;
}

