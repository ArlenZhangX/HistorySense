# 编码规范 (Coding Style)

> **AI 必读**: 本文档确保代码风格一致性。生成代码前请先阅读。

---

## 1. 命名规范

### 变量命名
- 使用 `camelCase`
- 布尔变量使用 `is`, `has`, `should` 前缀

```typescript
// ✅ 正确
const userName = 'John';
const isActive = true;
const hasPermission = false;

// ❌ 错误
const user_name = 'John';
const active = true;
```

### 函数命名
- 使用 `camelCase`
- 动词开头，描述动作
- 查询函数使用 `get`, `find`, `fetch` 前缀

```typescript
// ✅ 正确
function getUserById(id: string) {}
function findItemsInList() {}
function isValidInput() {}

// ❌ 错误
function user() {}
function get_data() {}
```

### 组件命名
- 使用 `PascalCase`
- 描述组件功能

```typescript
// ✅ 正确
function UserProfile() {}
function DataTable() {}
function SearchInput() {}
```

### 常量命名
- 使用 `UPPER_SNAKE_CASE`

```typescript
// ✅ 正确
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = 'https://api.example.com';
```

### 类型/接口命名
- 使用 `PascalCase`
- 接口不使用 `I` 前缀

```typescript
// ✅ 正确
interface User {
  id: string;
  name: string;
}

type Status = 'active' | 'inactive' | 'pending';
```

---

## 2. 代码结构

### 函数长度
- **最大 50 行**
- 超过则拆分为多个函数

### 嵌套层级
- **最大 3 层嵌套**
- 使用 early return 减少嵌套

```typescript
// ✅ 正确 - early return
function processUser(user: User | null) {
  if (!user) return null;
  if (!user.isActive) return null;
  
  return processActiveUser(user);
}

// ❌ 错误 - 深层嵌套
function processUser(user: User | null) {
  if (user) {
    if (user.isActive) {
      // ...
    }
  }
}
```

### 文件组织
```typescript
// 1. imports
// 2. types/interfaces
// 3. constants
// 4. helper functions
// 5. main component/function
// 6. exports
```

---

## 3. TypeScript 规范

### 类型定义
- 优先使用 `interface` 定义对象类型
- 使用 `type` 定义联合类型、工具类型
- 避免使用 `any`

```typescript
// ✅ 正确
interface User {
  id: string;
  name: string;
}

type Status = 'active' | 'inactive' | 'pending';
```

### 函数签名
- 明确返回类型
- 使用对象参数（超过 2 个参数时）

```typescript
// ✅ 正确
function createUser(params: {
  name: string;
  email: string;
  age?: number;
}): Promise<User> {
  // ...
}
```

### 空值处理
- 使用 `null` 表示空值
- 使用可选链 `?.` 和空值合并 `??`

```typescript
// ✅ 正确
const userName = user?.name ?? 'Anonymous';

// ❌ 错误
const userName = user && user.name ? user.name : 'Anonymous';
```

---

## 4. React 规范

### 组件定义
- 使用函数组件
- 明确 Props 类型

```typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({ children, onClick, disabled }: ButtonProps) {
  return <button onClick={onClick} disabled={disabled}>{children}</button>;
}
```

### Hooks 使用
- 遵循 Hooks 规则
- 使用自定义 Hooks 封装重复逻辑

---

## 5. 注释规范

### 函数注释
```typescript
/**
 * 功能描述
 * @param params 参数说明
 * @returns 返回值说明
 */
async function getData(params: Params): Promise<Result> {
  // ...
}
```

### 行内注释
- 解释"为什么"而不是"是什么"

```typescript
// ✅ 正确 - 解释原因
// 使用 UTC 避免时区问题
const timestamp = Date.now();

// ❌ 错误 - 显而易见的注释
// 设置用户名为 John
const userName = 'John';
```

---

## 6. 导入规范

### 导入顺序
1. React/Next.js 内置
2. 第三方库
3. 项目内部绝对路径导入 (`@/`)
4. 相对路径导入
5. 样式文件

```typescript
// 1. React/Next.js
import React from 'react';

// 2. 第三方
import { clsx } from 'clsx';

// 3. 项目内部 (@/)
import { Button } from '@/components/ui';

// 4. 相对路径
import { utils } from './utils';
```

### 路径别名
- 使用 `@/` 前缀表示项目根目录

---

> **AI 提示**: 生成代码时，请检查：
> 1. 命名是否符合规范？
> 2. 函数是否超过 50 行？
> 3. 嵌套是否超过 3 层？
> 4. 是否使用了 early return？
