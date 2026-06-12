# AGENTS.md - AI 员工手册

> **这是整个项目最重要的文件**
> 
> 它是 README + 开发规范 + 团队知识库 + AI 员工手册

---

## 1. 项目目标 (Product)

### 项目概述
[项目简介 - 描述项目是做什么的]

### 目标用户
- [目标用户群体 1]
- [目标用户群体 2]
- [目标用户群体 3]

### 核心目标
- [核心目标 1]
- [核心目标 2]
- [核心目标 3]

---

## 2. 技术栈 (Stack)

### 前端
- **Framework**: Next.js

### 后端
- **API**: Next.js Server Actions + API Routes

### 数据库
- **Database**: memorycache 即可
- **ORM**: Drizzle

### 认证
- **Auth**: Clerk 或 Auth.js

### 支付
- **Payment**: Stripe

### 部署
- **Platform**: Vercel

---

## 3. 强制规则 (Rules)

### 技术约束
- ❌ 不要引入新的 ORM
- ❌ 不要使用 Prisma
- ❌ 不要使用 Redux
- ❌ 不要使用 Zustand
- ✅ 优先使用 Server Components
- ✅ 所有数据库操作使用 Drizzle

### 代码规范
- 函数长度不超过 50 行
- 优先使用 early return
- 禁止嵌套超过 3 层
- 变量命名使用 camelCase
- 组件命名使用 PascalCase
- 常量命名使用 UPPER_SNAKE_CASE

### 架构约束
```
禁止: Controller -> Database

必须: Controller
       ↓
     Service
       ↓
    Repository
```

### 数据库规范
- 主键统一使用 UUID
- 表名使用单数形式
- 所有时间统一使用 UTC
- 禁止逻辑删除 (使用物理删除)

---

## 4. 工作流程 (Workflow)

### 开发流程
1. 读取 `tasks/todo.md` 了解当前任务
2. 读取相关 `specs/` 文件了解需求
3. 实现代码
4. 运行验证脚本
5. 提交代码

### 完成任务的检查清单
```bash
# 1. 代码检查
./scripts/lint.sh

# 2. 测试
./scripts/test.sh

# 3. 构建
./scripts/build.sh

# 4. 全部通过后才能提交
```

### 提交规范
- 使用清晰的提交信息
- 格式: `[类型] 简短描述`
- 类型: feat, fix, docs, style, refactor, test, chore

---

## 5. 项目结构

```
project/
├── AGENTS.md          # 本文件 - AI 员工手册
├── docs/              # 项目文档
│   ├── product.md     # 产品定位
│   ├── architecture.md # 架构设计
│   ├── coding-style.md # 编码规范
│   ├── database.md    # 数据库规范
│   └── deployment.md  # 部署文档
├── specs/             # 功能规格
│   ├── auth.md
│   ├── billing.md
│   └── ...
├── tasks/             # 任务管理
│   ├── todo.md        # 当前迭代
│   ├── backlog.md     # 待办清单
│   └── completed/     # 已完成任务
├── scripts/           # 工具脚本
│   ├── test.sh
│   ├── lint.sh
│   ├── build.sh
│   └── deploy.sh
├── src/               # 源代码
└── tests/             # 测试代码
```

---

## 6. 快速参考

### 常用命令
```bash
# 开发
npm run dev

# 验证
./scripts/lint.sh
./scripts/test.sh
./scripts/build.sh

# 部署
./scripts/deploy.sh
```

### 重要文件位置
- 产品文档: `docs/product.md`
- 架构文档: `docs/architecture.md`
- 当前任务: `tasks/todo.md`
- 功能规格: `specs/`

---

## 7. AI 协作指南

### 上下文保持
- 每次开始工作前阅读本文件
- 不确定时查阅 `docs/` 目录
- 遵循已建立的规范和模式

### 决策原则
- 保持技术栈一致性
- 优先简单解决方案
- 有疑问时询问而不是假设

### 代码生成
- 生成代码前阅读相关 spec
- 遵循现有代码风格
- 确保通过所有验证脚本

---

> **记住**: 这个项目的成功依赖于 Human + AI 的高效协作。
> 保持沟通，遵循规范，持续改进。
