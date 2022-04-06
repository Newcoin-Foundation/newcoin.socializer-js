export interface GetTableRowsPayload {
  json: boolean;
  code: string;
  scope: string;
  table: string;
  table_key?: string | undefined;
  lower_bound?: string;
  upper_bound?: string;
  key_type?: string;
  index_position?: string;
  encode_type?: string;
  limit?: number;
  reverse?: boolean;
  show_payer?: boolean;
}

