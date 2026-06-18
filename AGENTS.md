# AIBOX - AI导航站

## 规则

- **修改前必须确认**：任何对代码、数据、样式的修改，必须先向用户说明修改方案，获得明确同意后才能执行。
- **自动提交**：每次修改完成后，自动 `git add -A && git commit`，提交信息描述本次改动内容，确保可回退。
- **会话结束自动部署**：每次会话结束前，执行 `npm run build` 构建，然后用 `git subtree split --prefix=dist -b gh-pages-deploy` + `git push origin gh-pages-deploy:gh-pages --force` 部署。

## 技术栈

- **框架**：Astro 5（静态站点生成器）
- **构建**：`npm run build` 生成 `dist/` 目录
- **部署**：本地构建 → 推送 `dist/` 到 `gh-pages` 分支

## 结构

```
D:\项目\AIBOX\
├── src/
│   ├── components/      # 可复用组件
│   ├── layouts/         # 页面布局模板
│   ├── pages/           # 页面（文件即路由）
│   └── styles/          # 全局样式
├── public/              # 静态资源（直接复制到输出）
├── dist/                # 构建输出（gitignore）
├── assets/              # 参考数据源（markdown 格式）
├── .workbuddy/          # 项目记忆和规则
├── astro.config.mjs     # Astro 配置
├── package.json
└── AGENTS.md            # 项目级规则文件
```

## 命令

```bash
# 开发
npm run dev

# 构建
npm run build

# 预览构建结果
npm run preview

# 部署到 gh-pages
npm run build && git subtree split --prefix=dist -b gh-pages-deploy && git push origin gh-pages-deploy:gh-pages --force && git branch -D gh-pages-deploy
```

## 设计要点

- CSS 变量在 `:root` 中定义（--cyan, --magenta, --amber 等），改色改量即可
- 深色渐变背景 + 毛玻璃导航栏 + 网格/噪点纹理
- 排名前三使用金/银/铜渐变（.top-1/.top-2/.top-3）
- Tab 切换使用 CSS `:target` 实现，零 JS
- 响应式断点：1024px / 768px / 480px
- 字体：Google Fonts（Space Grotesk, JetBrains Mono, Noto Sans SC）
