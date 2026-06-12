# 架构文档 (Architecture)

> **AI 必读**: 本文档是 AI 的地图。修改代码前请先阅读，确保遵循架构约束。

---

## 1. 架构概述

### 架构风格
- **类型**: 分层架构 + 模块化设计
- **前端**: Next.js App Router + Server Components 优先
- **后端**: Next.js Server Actions + API Routes
- **数据流**: 单向数据流，明确的分层边界

### 核心原则
1. **关注点分离** - 每层只负责特定职责
2. **依赖倒置** - 高层不依赖低层实现
3. **显式优于隐式** - 明确的调用链，不隐藏逻辑

---

## 2. 目录结构

```
src/
├── app/                    # Next.js App Router
│   ├── (routes)/          # 路由分组
│   ├── api/               # API 路由
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
│
├── components/            # React 组件
│   ├── ui/               # 基础 UI 组件
│   ├── layout/           # 布局组件
│   └── features/         # 功能组件
│
├── domain/               # 领域层
│   ├── [module]/         # 业务模块
│   │   ├── entities/     # 实体定义
│   │   ├── services/     # 领域服务
│   │   ├── repositories/ # 仓库接口
│   │   └── dto/          # 数据传输对象
│
├── infrastructure/       # 基础设施层
│   ├── database/         # 数据库
│   │   ├── schema/       # Drizzle schema
│   │   ├── migrations/   # 迁移文件
│   │   └── client.ts     # 数据库客户端
│   └── external/         # 外部服务
│
├── lib/                  # 工具库
│   ├── utils/            # 通用工具
│   └── constants/        # 常量定义
│
└── types/                # 全局类型定义
```

---

## 3. 分层架构

### 3.1 表现层 (Presentation Layer)
**位置**: `app/`, `components/`

**职责**:
- 渲染 UI
- 处理用户交互
- 调用领域层服务

**约束**:
- 不包含业务逻辑
- 不直接访问数据库
- 使用 Server Components 优先

### 3.2 领域层 (Domain Layer)
**位置**: `domain/`

**职责**:
- 业务逻辑
- 领域规则
- 实体定义

**结构**:
```
domain/
├── [module-name]/
│   ├── entities/         # 实体类型定义
│   ├── services/         # 领域服务
│   ├── repositories/     # 仓库接口 (抽象)
│   └── dto/              # 数据传输对象
```

**约束**:
- 不依赖基础设施
- 定义仓库接口，不实现
- 纯业务逻辑，无副作用

### 3.3 基础设施层 (Infrastructure Layer)
**位置**: `infrastructure/`

**职责**:
- 数据库访问
- 外部 API 调用
- 文件系统操作

**约束**:
- 实现领域层定义的接口
- 包含所有技术细节
- 可替换的实现

---

## 4. 数据流规范

### 强制调用链
```
Component/Route
      ↓
  Service (领域层)
      ↓
Repository (领域接口 → 基础设施实现)
      ↓
   Database
```

### 禁止的调用
```
❌ Component → Database
❌ Component → Repository (直接)
❌ Service → Database (跳过 Repository)
```

---

## 5. 依赖规则

### 依赖方向
```
表现层 → 领域层 → 基础设施层
   ↑
 (依赖倒置 - 领域层定义接口)
```

### 依赖注入
使用工厂函数或依赖注入容器

---

## 6. 状态管理

### 服务端状态
- 使用 Server Components
- 数据获取在服务端完成
- 通过 props 传递给客户端组件

### 客户端状态
- 使用 React Hooks (useState, useReducer)
- 复杂状态使用 React Context
- ❌ 不使用 Redux, Zustand 等外部状态管理库

---

## 7. 错误处理

### 分层错误处理
- **领域层**: 抛出领域异常
- **表现层**: 捕获并显示友好错误信息
- **基础设施层**: 转换技术异常为领域异常

---

## 8. 性能优化

### 服务端优化
- 使用 Server Components 减少客户端 JS
- 数据库查询优化 (索引、分页)
- 使用 React.cache 缓存数据

### 客户端优化
- 组件懒加载
- 图片优化
- 合理的 revalidate 策略

---

> **AI 提示**: 修改代码时，请检查：
> 1. 是否遵循分层架构？
> 2. 是否通过正确的调用链访问数据？
> 3. 领域层是否保持纯净（无基础设施依赖）？
