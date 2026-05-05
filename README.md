# moekoe-plugin-template-ts
使用 Typescript 编写 [MoeKoe Music](https://github.com/MoeKoeMusic/MoeKoeMusic) 插件！

### 使用本模板编写插件你将获得以下优势：
- [x] 自动生成 manifest.json
- [x] 完整的 Typescript 类型定义文件 ([chrome-types](https://npmx.dev/package/chrome-types), [@latedream/moekoe-plugin-utils](https://npmx.dev/package/@latedream/moekoe-plugin-utils))
- [x] Node.js 生态系统支持
- [x] 支持 public 目录
- [x] 支持 Github Actions 测试构建和发布到[插件市场](https://github.com/MoeKoeMusic/MoeKoeMusic-Plugins)
<sup>*如果是第一次发布则需要手动上架 (需要配置 PAT_TOKEN 密钥)*</sup>

### 使用
```bash
# 克隆仓库
git clone https://github.com/MoeKoeMusic/moekoe-plugin-template-ts.git
cd moekoe-plugin-template-ts

# 安装依赖
npm install # 或者用你喜欢的包管理器

# 构建插件
npm run build
# 插件将构建到 dist 目录
```
