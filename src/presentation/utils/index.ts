export type Status = 'idle' | 'pending' | 'success' | 'error';

export function isStatusSuccess(status: Status) {
  return status === 'success';
}

export function isStatusLoading(status: Status) {
  return status === 'pending';
}

export function isStatusFailure(status: Status) {
  return status === 'error';
}