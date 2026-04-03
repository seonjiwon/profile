# VM 배포 가이드

## 사전 준비

VM에 다음이 설치되어 있어야 합니다:
- Node.js 18+ (`node -v`로 확인)
- npm 또는 yarn
- PM2 (프로세스 관리자)

```bash
# PM2 설치 (전역)
npm install -g pm2
```

## 배포 방법

### 1. 코드 업로드
VM에 프로젝트 파일을 업로드합니다:

```bash
# Git 사용 시
git clone <repository-url>
cd <project-directory>

# 또는 scp로 직접 업로드
scp -r ./* user@vm-ip:/path/to/project/
```

### 2. 환경 변수 설정
`.env.production` 파일을 수정하여 백엔드 주소를 설정합니다:

```bash
# .env.production
NEXT_PUBLIC_API_BASE_URL=http://your-vm-ip:8080
```

### 3. 배포 스크립트 실행

```bash
# 실행 권한 부여
chmod +x deploy.sh

# 배포 실행
./deploy.sh
```

또는 수동으로:

```bash
# 의존성 설치
npm ci

# 빌드
npm run build

# PM2로 시작
pm2 start ecosystem.config.js

# 또는 PM2 없이 직접 실행
npm start
```

### 4. PM2 명령어

```bash
# 상태 확인
pm2 status

# 로그 확인
pm2 logs portfolio

# 재시작
pm2 restart portfolio

# 중지
pm2 stop portfolio

# 삭제
pm2 delete portfolio

# 부팅 시 자동 시작 설정
pm2 startup
pm2 save
```

## Nginx 리버스 프록시 설정 (선택사항)

포트 80/443으로 서비스하려면 Nginx를 사용하세요:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Docker 배포 (대안)

Docker를 사용하려면:

```bash
# 이미지 빌드
docker build -t portfolio .

# 컨테이너 실행
docker run -d -p 3000:3000 --name portfolio portfolio
```

## 트러블슈팅

### 포트가 이미 사용 중
```bash
# 포트 사용 중인 프로세스 확인
lsof -i :3000

# 프로세스 종료
kill -9 <PID>
```

### 메모리 부족
`ecosystem.config.js`에서 `max_memory_restart` 값을 조정하세요.

### 빌드 실패
```bash
# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 모니터링

```bash
# PM2 모니터링 대시보드
pm2 monit

# 또는 웹 대시보드
pm2 plus
```
