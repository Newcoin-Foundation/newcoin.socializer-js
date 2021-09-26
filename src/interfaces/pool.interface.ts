export interface PoolPayload {
  id?: string;
  creator?: string;
  receiver?: string;
  description_sha256?: string;
}

export interface PowerUpPoolPayload {
  id?: string;
  creator?: string;
  receiver?: string;
  to?: string;
}
