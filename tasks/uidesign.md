
# 🧠 History Sense — UI / Backlog 映射设计规范（AI可执行版）

---

# 0. 🔗 总体映射关系（核心）

这是最重要的一张“AI理解地图”：

```text id="map0"

BL-002 → Landing Page UI

BL-003 → Timeline Page + EraCard UI

BL-004 → Deep Dive Page + Tab Layout UI

BL-005 → Framework Page + View Switch UI

BL-006 → Recall Input UI (Mini Interaction)

BL-007 → Sequence Drag UI (Interaction Challenge)

BL-008 → Finish Page (Outcome UI)
```

👉 结论：

> **Backlog = 功能定义
> UI = 渲染方式**

---

# 1. 🏠 BL-002 Landing Page（UI映射）

## 📦 对应内容结构

```text id="lnd1"
docs/Material/01-overview.md
```

---

## 🎨 UI渲染规则

```text id="lnd2"
CENTER SCREEN

H1 ← 01-overview title

Subtitle ← overview summary

Button ← start learning
```

---

## 🧠 AI渲染规则

如果读取 BL-002：

* 只允许生成 1 screen
* 只能有 1 CTA
* 不允许导航

---

# 2. 🧭 BL-003 Timeline Mode（核心映射）

## 📦 数据来源

```text id="tl0"
docs/Material/02-era-overview.md
```

---

## 🧱 数据 → UI 映射规则（关键）

每个 Era 数据必须结构化为：

```text id="tl1"
Era {
  name
  timeRange
  summary
  keyIdeas[3]
  keywords[3]
  reflectionQuestion
}
```

---

## 🎨 UI映射

```text id="tl2"
Era → EraCard
EraCard → Timeline vertical list
```

---

## 📦 EraCard UI绑定规则

| 数据字段               | UI位置          |
| ------------------ | ------------- |
| name               | Title         |
| timeRange          | Subtitle      |
| summary            | Top paragraph |
| keyIdeas           | bullet list   |
| keywords           | tags          |
| reflectionQuestion | bottom prompt |

---

## 🧠 AI必须遵守

* 1 Era = 1 Card
* 不允许 merge Era
* 不允许压缩结构
* 必须 scroll-snap layout

---

# 3. 📖 BL-004 Deep Dive（结构化映射）

## 📦 数据来源

```text id="dl0"
docs/Material/03–13 era files
```

---

## 🧱 数据结构标准化

```text id="dl1"
DeepDive {
  background
  catalyst
  consequences
  legacy
}
```

---

## 🎨 UI映射规则

```text id="dl2"
DeepDive → Tab Layout UI

Tabs:
- Background
- Catalyst
- Consequences
- Legacy
```

---

## 📦 内容映射

| 数据           | UI    |
| ------------ | ----- |
| background   | Tab 1 |
| catalyst     | Tab 2 |
| consequences | Tab 3 |
| legacy       | Tab 4 |

---

## 🧠 AI规则

* 必须 Tab UI
* 不允许 single long page
* 默认打开 Background
* Tab = structure, not decoration

---

# 4. 🧠 BL-005 Framework Mode（认知映射）

## 📦 数据来源

```text id="fw0"
docs/Material/14–17
```

---

## 🧱 数据结构

```text id="fw1"
Framework {
  category: Technology | Power | Economy | Ideas
  concept
  explanation
  historicalExample
  insight
}
```

---

## 🎨 UI映射

```text id="fw2"
Framework → Category Switch UI
Category → View Mode
Concept → Card
```

---

## 🧠 UI规则（关键）

| category   | UI表现            |
| ---------- | --------------- |
| Technology | timeline flow   |
| Power      | hierarchy tree  |
| Economy    | block flow      |
| Ideas      | clustered cards |

---

👉 重点：

> 同一数据，不同视觉表达

---

# 5. ✍️ BL-006 Recall（输入映射）

## 📦 数据来源

```text id="rc0"
docs/Material/20
```

---

## 🎨 UI映射

```text id="rc1"
Prompt → Label
User input → textarea
Example → helper text
```

---

## 🧠 AI规则

* 必须 input-centered UI
* 不允许多组件干扰
* 必须 single focus screen

---

# 6. 🧩 BL-007 Sequence Challenge（交互映射）

## 📦 数据来源

```text id="sq0"
docs/Material/21
```

---

## 🎨 UI映射

```text id="sq1"
Events → draggable cards
Order → list state
Validation → result overlay
```

---

## 🧠 AI规则

* 必须 drag & drop
* 每个 event = card
* 不允许 text-only UI

---

# 7. 🎉 BL-008 Finish Page（结果映射）

## 📦 数据来源

```text id="fn0"
docs/Material/23
```

---

## 🎨 UI映射

```text id="fn1"
Stats → grid cards
Message → hero text
Actions → buttons
```

---

## 🧠 情绪设计规则

* soft fade-in
* centered layout
* low density
* no distraction

---

# 8. 🧠 全局 AI UI生成规则（最关键）

---

## 8.1 数据驱动 UI原则

AI生成UI必须遵循：

```text id="ai0"
IF input = BL-003
→ render Timeline Layout

IF input = BL-004
→ render Tab Layout

IF input = BL-005
→ render Switch View Layout
```

---

## 8.2 强制映射规则

| 输入             | 输出             |
| -------------- | -------------- |
| Era Data       | Card           |
| DeepDive Data  | Tabs           |
| Framework Data | Category Views |
| Recall Data    | Input UI       |
| Sequence Data  | Drag UI        |

---

## 8.3 UI不可自由发挥规则

AI禁止：

* 自由增加 layout
* 改变数据结构
* 合并章节
* 引入 dashboard UI

---