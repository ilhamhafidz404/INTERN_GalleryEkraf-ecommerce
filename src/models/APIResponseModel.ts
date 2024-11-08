import { UMKM } from "./UMKMModel";

interface ApiResponse {
  code: string;
  message: string;
  result: ApiResponseResult;
}

interface ApiResponseResult {
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  data: UMKM[];
}

export default ApiResponse;
