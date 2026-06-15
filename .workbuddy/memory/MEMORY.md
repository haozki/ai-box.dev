# AIBOX 项目长期记忆

## 项目概况

- AI 科技导航站，单文件静态站点，无构建依赖
- 部署地址：https://haozki.github.io/ai-trends/
- GitHub 仓库：https://github.com/haozki/ai-trends.git（gh-pages 分支）

## 目录结构

- `dist/` — 部署目录（index.html, git-history.html, v1/, v2/）
- `assets/` — 参考数据（models.md, projects.md, coding-agents.md, companies.md）
- `ProjectsCollection/` — AI项目资料库（10个项目，面向公众号文章素材，每个含info.md+asset/）
- `AGENTS.md` — 项目级规则

## 数据来源

- 大模型排名：Chatbot Arena (openlm.ai)，Elo 评分
- 文生图模型：arena.ai，Elo 评分
- 文生视频模型：magichour.ai，共识评分
- AI 项目：GitHub API，按 Stars 排名
- 厂商 Logo：models.dev/logos/{id}.svg，CSS filter 反色显示

## 页面结构

- 热门模型：二级导航（默认/国产/生图/生视频）
- 热门项目：二级导航（默认 + 9 大分类）
- 热门 Agent：待更新

## 部署流程

1. `git subtree split --prefix=dist -b gh-pages-deploy`
2. `git push origin gh-pages-deploy:gh-pages --force`
3. `git branch -D gh-pages-deploy`
