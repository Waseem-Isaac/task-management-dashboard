import { TransferRequest } from "./transfer-requests.model";

// a record for statuses of the transfer request PENDING, APPROVED, REJECTED
export const TRANSFER_REQUEST_STATUS_LABELS: Record<TransferRequest['status'], string> = {
  PENDING: 'Pending',
  APPROVED: 'Approved',
  REJECTED: 'Rejected',
};
