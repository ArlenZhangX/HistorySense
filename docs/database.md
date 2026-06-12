# 数据库规范 (Database)

> **AI 必读**: 本文档定义数据库设计规范。任何数据库操作前请先阅读。

---

## 1. 基础规范

### 主键
- **统一使用 UUID v4**
- 不使用自增 ID

```typescript
// ✅ 正确
import { uuid } from 'drizzle-orm/pg-core';

const users = pgTable('user', {
  id: uuid('id').primaryKey().defaultRandom(),
});

// ❌ 错误
id: serial('id').primaryKey(),
```

### 表名
- **使用单数形式**
- 小写，下划线分隔

```typescript
// ✅ 正确
pgTable('user', {});
pgTable('product', {});
pgTable('order_item', {});

// ❌ 错误
pgTable('users', {});
pgTable('Products', {});
```

### 字段命名
- 小写，下划线分隔

```typescript
// ✅ 正确
{
  created_at: timestamp('created_at').defaultNow(),
  user_name: varchar('user_name', { length: 100 }),
  is_active: boolean('is_active').default(true),
}

// ❌ 错误
{
  createdAt: timestamp('createdAt'),
  userName: varchar('userName'),
  isActive: boolean('isActive'),
}
```

---

## 2. 时间处理

### 时区
- **所有时间统一使用 UTC**
- 存储时转换为 UTC
- 显示时转换为用户时区

```typescript
// ✅ 正确
const events = pgTable('event', {
  occurred_at: timestamp('occurred_at', { withTimezone: true }).notNull(),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
});
```

### 日期 vs 时间戳
- 使用 `date` 存储日期 (生日、纪念日)
- 使用 `timestamp` 存储时间点 (创建时间、更新时间)

---

## 3. 删除策略

### 物理删除
- **默认使用物理删除**
- 不实现逻辑删除

```typescript
// ✅ 正确 - 物理删除
await db.delete(users).where(eq(users.id, id));

// ❌ 错误 - 逻辑删除 (本项目不使用)
deleted_at: timestamp('deleted_at'), // 不要添加这个字段
```

### 关联删除
- 使用外键约束
- 明确定义删除行为

```typescript
// ✅ 正确
const orders = pgTable('order', {
  user_id: uuid('user_id')
    .references(() => users.id, { onDelete: 'cascade' }),
});
```

---

## 4. 索引规范

### 索引命名
- `idx_[表名]_[字段名]`

```typescript
// ✅ 正确
export const idxUserEmail = index('idx_user_email').on(users.email);
```

### 索引策略
- 外键字段必须索引
- 频繁查询的字段索引
- 选择性高的字段索引

---

## 5. 关系设计

### 一对一
```typescript
const userProfiles = pgTable('user_profile', {
  user_id: uuid('user_id')
    .primaryKey()
    .references(() => users.id, { onDelete: 'cascade' }),
});
```

### 一对多
```typescript
const users = pgTable('user', {
  id: uuid('id').primaryKey().defaultRandom(),
});

const orders = pgTable('order', {
  id: uuid('id').primaryKey().defaultRandom(),
  user_id: uuid('user_id').references(() => users.id),
});
```

### 多对多
```typescript
// 使用关联表
const orderProducts = pgTable('order_product', {
  id: uuid('id').primaryKey().defaultRandom(),
  order_id: uuid('order_id').references(() => orders.id, { onDelete: 'cascade' }),
  product_id: uuid('product_id').references(() => products.id, { onDelete: 'cascade' }),
}, (table) => ({
  unqOrderProduct: unique('unq_order_product')
    .on(table.order_id, table.product_id),
}));
```

---

## 6. 数据类型

### 字符串
```typescript
{
  // 短文本 (名称、标题)
  name: varchar('name', { length: 100 }).notNull(),
  
  // 长文本 (描述、内容)
  description: text('description'),
  
  // 枚举 (有限选项)
  type: varchar('type', { length: 50 }).notNull(),
}
```

### 数字
```typescript
{
  // 整数
  order: integer('order').default(0),
  
  // 大整数
  view_count: bigint('view_count', { mode: 'number' }).default(0),
}
```

### 布尔
```typescript
{
  is_public: boolean('is_public').default(true),
  is_active: boolean('is_active').default(true),
}
```

### JSON
```typescript
{
  // 存储灵活的元数据
  metadata: jsonb('metadata').default({}),
}
```

---

## 7. 迁移规范

### 迁移命名
- 描述性命名
- 格式: `YYYYMMDD_HHMMSS_description`

### 迁移原则
- 每个迁移只做一件事
- 保持迁移可回滚
- 测试迁移脚本

---

## 8. 查询规范

### 基本查询
```typescript
// ✅ 正确 - 使用关系查询
const ordersWithUser = await db.query.orders.findMany({
  with: {
    user: true,
    items: true,
  },
});

// ✅ 正确 - 使用条件查询
const activeUsers = await db.query.users.findMany({
  where: eq(users.isActive, true),
  orderBy: desc(users.createdAt),
  limit: 20,
});
```

### 分页
```typescript
// ✅ 正确 - 使用游标分页 (推荐)
const items = await db.query.items.findMany({
  where: cursor ? gt(items.id, cursor) : undefined,
  orderBy: asc(items.id),
  limit: pageSize + 1,
});

// ✅ 正确 - 使用偏移分页 (简单场景)
const items = await db.query.items.findMany({
  offset: (page - 1) * pageSize,
  limit: pageSize,
});
```

---

> **AI 提示**: 设计数据库时，请检查：
> 1. 主键是否使用 UUID？
> 2. 表名是否使用单数？
> 3. 时间字段是否使用 UTC？
> 4. 外键是否添加索引？
> 5. 是否使用物理删除？
