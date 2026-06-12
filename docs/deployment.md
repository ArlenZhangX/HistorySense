# 部署文档 (Deployment)

> **AI 必读**: 本文档定义部署流程和环境配置。部署前请先阅读。

---

## 1. 部署架构

### 环境划分
```
Development (本地开发)
    ↓
Staging (预发布环境)
    ↓
Production (生产环境)
```

### 基础设施
| 服务 | 提供商 | 用途 |
|------|--------|------|
| 应用托管 | Vercel | Next.js 应用部署 |
| 数据库 | Neon / Local SQLite | PostgreSQL / 本地开发 |
| 认证 | Clerk / Auth.js | 用户认证 |

---

## 2. 环境变量

### 必需变量
```bash
# 数据库
DATABASE_URL="postgresql://user:pass@host/db?sslmode=require"
# 或本地开发
DATABASE_URL="file:./dev.db"

# 认证 (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"

# 或 (Auth.js)
AUTH_SECRET="your-secret-key"

# 支付 (Stripe)
STRIPE_SECRET_KEY=""
STRIPE_PUBLISHABLE_KEY=""
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=""
STRIPE_WEBHOOK_SECRET=""
```

### 环境变量文件
```
.env.local          # 本地开发 (不提交)
.env.development    # 开发环境
.env.production     # 生产环境
```

---

## 3. 部署流程

### 自动部署
- **main 分支** → 自动部署到 Production
- **develop 分支** → 自动部署到 Staging
- **Pull Request** → 生成预览部署

### 手动部署
```bash
# 部署到生产环境
./scripts/deploy.sh production

# 部署到预发布环境
./scripts/deploy.sh staging
```

### 部署检查清单
- [ ] 所有测试通过
- [ ] 代码检查通过
- [ ] 构建成功
- [ ] 环境变量已配置
- [ ] 数据库迁移已执行
- [ ] 功能在 Staging 验证通过

---

## 4. 数据库管理

### 迁移执行
```bash
# 生成迁移
npx drizzle-kit generate

# 执行迁移
npx drizzle-kit migrate

# 生产环境迁移 (谨慎)
npx drizzle-kit migrate --config=drizzle.config.prod.ts
```

### 备份策略
- **自动备份**: Neon 每日自动备份
- **手动备份**: 重大变更前手动备份

---

## 5. 域名配置

### 自定义域名
```
# Vercel 设置
1. 添加域名: your-domain.com
2. 配置 DNS: CNAME -> cname.vercel-dns.com
3. 等待 SSL 证书自动配置
```

### 环境对应域名
| 环境 | 域名 |
|------|------|
| Production | https://your-domain.com |
| Staging | https://staging.your-domain.com |
| Preview | https://*.vercel.app |

---

## 6. CI/CD 配置

### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main, develop]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 20
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: vercel/action-deploy@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

---

## 7. 故障排查

### 常见问题

#### 构建失败
```bash
# 本地模拟构建
npm run build
```

#### 数据库连接失败
- 检查 DATABASE_URL 格式
- 确认 IP 白名单配置 (远程数据库)
- 验证 SSL 设置

#### 环境变量缺失
```bash
# 检查环境变量
vercel env ls

# 添加环境变量
vercel env add DATABASE_URL production
```

### 日志查看
```bash
# Vercel 日志
vercel logs --all

# 实时日志
vercel logs --follow
```

---

> **AI 提示**: 部署时，请检查：
> 1. 环境变量是否全部配置？
> 2. 数据库迁移是否执行？
> 3. 构建是否成功？
