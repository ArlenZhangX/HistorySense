# 待办清单 (Backlog)

> **AI 必读**: 本文档记录未来计划实现的功能。按优先级排序。

---

## 高优先级 (High Priority)

### BL-001: 项目基础设施搭建
**描述**: 完成 Next.js 项目的基础配置，包括样式、路由和数据模型

**功能列表**:
- [ ] 配置 Tailwind CSS 3
- [ ] 配置全局样式和主题
- [ ] 创建数据模型（Era、DeepDive、Framework）
- [ ] 创建 11 个时代的内容数据

**相关文件**:
- `src/data/eras.ts`
- `src/data/frameworks.ts`
- `tailwind.config.js`

---

### BL-002: Landing Page (登录页)
**描述**: 创建极简风格的登录页面，包含标题、副标题和开始按钮

**功能列表**:
- [ ] 实现 Hero 区域：标题 + 副标题 + 开始按钮
- [ ] 添加响应式设计
- [ ] 添加平滑滚动和过渡动画

**相关文件**:
- `src/app/page.tsx`
- `docs/Material/01-overview.md`

---

### BL-003: Timeline Mode (时间线模式)
**描述**: 实现默认学习体验，展示 11 个时代的卡片序列

**功能列表**:
- [ ] 创建 EraCard 组件（时代名称、日期范围、一句话总结、三个关键思想、三个关键词、反思问题）
- [ ] 实现时间线布局（垂直滚动）
- [ ] 添加前进/后退导航
- [ ] 记录学习进度

**相关文件**:
- `src/components/EraCard.tsx`
- `src/app/timeline/page.tsx`
- `docs/Material/02-era-overview.md`

---

### BL-004: Deep Dive Mode (深入模式)
**描述**: 用户可以打开任意时代查看详细内容

**功能列表**:
- [ ] 创建 DeepDive 组件
- [ ] 实现四个部分：背景(Background)、催化剂(Catalyst)、结果(Consequences)、遗产(Legacy)
- [ ] 添加展开/收起动画
- [ ] 支持从 Timeline 跳转

**相关文件**:
- `src/components/DeepDive.tsx`
- `docs/Material/03-ancient-civilizations.md`
- `docs/Material/04-axial-age.md`
- `docs/Material/05-classical-empires.md`
- `docs/Material/06 Middle Ages`
- `docs/Material/07 Age of Exploration`
- `docs/Material/08 Enlightenment & Revolutions`
- `docs/Material/09 Industrial Revolution`
- `docs/Material/10 World Wars`
- `docs/Material/11 Cold War`
- `docs/Material/12 Globalization`
- `docs/Material/13 AI Era`

---

### BL-005: Framework Mode (框架模式)
**描述**: 从四个维度重新审视历史

**功能列表**:
- [ ] 创建 FrameworkView 组件
- [ ] 实现技术视角 (Technology)
- [ ] 实现权力视角 (Power)
- [ ] 实现经济视角 (Economy)
- [ ] 实现思想视角 (Ideas)
- [ ] 添加视角切换导航

**相关文件**:
- `src/components/FrameworkView.tsx`
- `src/app/frameworks/page.tsx`
- `docs/Material/14 Technology`
- `docs/Material/15 Power`
- `docs/Material/16 Economy`
- `docs/Material/17 Ideas`

---

## 中优先级 (Medium Priority)

### BL-006: One-Sentence Recall (一句话总结练习)
**描述**: 在每个时代结束时提示用户用一句话总结该时代

**功能列表**:
- [ ] 创建 RecallPrompt 组件
- [ ] 实现文本输入框
- [ ] 添加提交和重置功能
- [ ] 显示示例答案参考

**相关文件**:
- `src/components/RecallPrompt.tsx`
- `docs/Material/20 生成一句话总结练习`

---

### BL-007: Sequence Challenge (时间排序练习)
**描述**: 偶尔邀请用户将事件按时间顺序排列

**功能列表**:
- [ ] 创建 SequenceChallenge 组件
- [ ] 实现拖拽排序功能
- [ ] 添加验证逻辑
- [ ] 显示正确顺序反馈

**相关文件**:
- `src/components/SequenceChallenge.tsx`
- `docs/Material/21 生成时间排序练习`

---

### BL-008: 结束页面 (End Page)
**描述**: 学习完成后的结束页面，展示鼓励性文案

**功能列表**:
- [ ] 创建结束页面组件
- [ ] 显示学习完成统计
- [ ] 添加鼓励性文案
- [ ] 提供重新开始选项

**相关文件**:
- `src/app/finish/page.tsx`
- `docs/Material/23 生成结束页文案`

---

## 低优先级 (Low Priority)

### BL-009: 响应式设计优化
**描述**: 确保所有页面在移动端和桌面端都有良好体验

**功能列表**:
- [ ] 优化移动端布局
- [ ] 调整触控目标大小
- [ ] 优化平板端体验

---

### BL-010: 动画和交互效果
**描述**: 添加微动画提升用户体验

**功能列表**:
- [ ] 卡片进入动画
- [ ] 滚动视差效果
- [ ] 按钮悬停效果
- [ ] 页面过渡动画

---

### BL-011: 进度保存功能
**描述**: 保存用户学习进度到本地存储

**功能列表**:
- [ ] 实现 localStorage 存储
- [ ] 自动保存阅读进度
- [ ] 页面加载时恢复进度

---

## 技术债务 (Technical Debt)

### BL-012: 中英文国际化切换
**描述**: 实现全站中英文双语切换功能，用户可自由切换界面语言

**功能列表**:
- [ ] 安装并配置 react-i18next 国际化库
- [ ] 创建中英文翻译资源文件
- [ ] 更新数据模型支持双语字段（titleEn/titleZh, summaryEn/summaryZh等）
- [ ] 创建语言切换组件（LanguageSwitcher）
- [ ] 实现语言切换状态管理
- [ ] 更新所有页面组件使用翻译函数
- [ ] 支持URL参数或Cookie持久化语言偏好
- [ ] 确保SEO元数据随语言变化

**相关文件**:
- `src/i18n/index.ts`
- `src/i18n/locales/en.json`
- `src/i18n/locales/zh.json`
- `src/components/LanguageSwitcher.tsx`
- `src/data/eras.ts`（需添加英文字段）
- `src/hooks/useLanguage.ts`

**备注**: 采用"静态文案翻译 + 数据双语字段"方案，UI文案使用i18next翻译，动态内容（时代名称、描述等）使用双语字段存储

---

### TD-001: 代码组织优化
- [ ] 整理组件目录结构
- [ ] 提取公共组件
- [ ] 优化数据文件结构

### TD-002: 测试覆盖
- [ ] 添加组件单元测试
- [ ] 添加集成测试
- [ ] 添加 E2E 测试

### TD-003: 文档完善
- [ ] 更新 README.md
- [ ] 添加组件文档
- [ ] 更新架构文档

---

## 如何添加新任务

当有新功能需求时，按以下格式添加：

```markdown
### BL-XXX: 任务标题
**描述**: 简短描述

**功能列表**:
- [ ] 功能 1
- [ ] 功能 2

**相关文件**:
- `specs/xxx.md`

**备注**: 其他说明
```

---

> **AI 提示**: 从 Backlog 选择任务时，请考虑：
> 1. 当前迭代的容量
> 2. 任务的依赖关系
> 3. 用户价值优先级