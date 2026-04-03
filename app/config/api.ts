// API 설정
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080",
  ENDPOINTS: {
    RAG_QUERY: "/api/v1/rag/query",
  },
} as const;

// API 요청 헬퍼 함수
export const getApiUrl = (endpoint: string) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};
