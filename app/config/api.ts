// API 설정
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080",
  ENDPOINTS: {
    RAG_QUERY: "/api/v1/rag/query",
  },
} as const;

// 디버깅용 로그
if (typeof window !== 'undefined') {
  console.log('API BASE_URL:', API_CONFIG.BASE_URL);
}

// API 요청 헬퍼 함수
export const getApiUrl = (endpoint: string) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};
