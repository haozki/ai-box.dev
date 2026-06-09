# AIBOX - AI导航站

## 规则

- **修改前必须确认**：任何对代码、数据、样式的修改，必须先向用户说明修改方案，获得明确同意后才能执行。
- **数据更新流程**：获取数据 → 展示给用户确认 → 确认后再写入文件。禁止静默修改。
- **备份意识**：修改 index.html 前，先备份原文件。
- **自动提交**：每次修改完成后，自动 `git add -A && git commit`，提交信息描述本次改动内容，确保可回退。
- **自动更新 Git History**：每次有实质性 git commit 后，立刻重新生成 `dist/git-history.html`，不等到会话结束。
- **会话结束自动部署**：每次会话结束前，将 `dist/` 目录推送到 GitHub `gh-pages` 分支（`origin gh-pages`），使用 `git subtree split --prefix=dist` + `git push` 方式。

单文件静态站点，无需构建，无依赖。使用 git 做版本管理。

## 结构

- `dist/` — 部署目录（直接上传到网站服务器）
  - `dist/index.html` — 完整应用（HTML + CSS + JS 合并在一个文件中）
  - `dist/git-history.html` — Git 变更历史查看页
- `assets/` — 参考数据源（markdown 格式的榜单资料，不被页面直接引用）
- `.workbuddy/` — 项目记忆和规则
- `AGENTS.md` — 项目级规则文件

## 命令

无构建、无测试、无 lint。直接在浏览器中打开 `dist/index.html` 预览。

## 数据更新

数据以 JS 数组嵌入在 `dist/index.html` 底部 `<script>` 块中：
- `modelsData` / `cnModelsData` / `imageModelsData` / `videoModelsData` — 热门模型榜单
- `projectsData` + 9 个分类数据 — 热门项目榜单

更新榜单时直接编辑对应数组。`assets/*.md` 是上游参考数据，可作为编辑依据。

## 设计要点

- CSS 变量在 `:root` 中定义（--cyan, --magenta, --amber 等），改色改量即可
- 深色渐变背景 + 毛玻璃导航栏 + 网格/噪点纹理
- 排名前三使用金/银/铜渐变（.top-1/.top-2/.top-3）
- 四个标签页通过 `switchPage()` JS 函数切换，无路由
- 响应式断点：1024px / 768px / 480px
- 字体：Google Fonts（Space Grotesk, JetBrains Mono, Noto Sans SC）
