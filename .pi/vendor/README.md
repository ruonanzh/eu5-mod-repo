# vendor/ — 第三方运行时（不是我们的代码）

## 放的是什么

| 路径 | 来源 |
|---|---|
| `plannotator/` | npm 包 `@plannotator/pi-extension@0.28.16`（上游仓库见它的 `package.json` 的 `repository` 字段） |
| `node_modules/` | 上面那个包在 Node 侧真正用到的依赖 |

**为什么内置**：这是游戏仓，玩家的 app 断网也要能用。内置后 `.pi/settings.json` 指本地路径，pi 不跑 npm、不联网。

## 我们改了什么

1. **删** `plannotator/review-editor.html`（17 MB，代码评审界面）。批注那条路不用它。上游自己也处理缺文件的情况：`index.ts:950` 会让 `/plannotator-review` 返回一句错误。
2. **删** `plannotator/**/*.test.ts`（上游测试，运行用不到）。
3. **改** `plannotator/generated/config.ts` 里 `AGENT_TOOL_DEFAULTS.pi`，`false` 改成 `true`。理由：pi 上 `plannotator` 工具默认关，开关只从 `~/.plannotator/config.json` 或环境变量读，而那个文件在玩家的主目录里，游戏仓发不了。所以只能在 vendored 副本里改默认值。

**升级时**：重新 `npm install @plannotator/pi-extension@<版本>`，再把上面三处做一遍。

## 许可

`@plannotator/pi-extension` 是 `MIT OR Apache-2.0`（该包 `package.json` 的 `license` 字段）。上游仓库地址在该包的 `repository` 字段。
本目录原样内置，只做上面三处删改，没有改任何其它源码。

## 依赖为什么只有这 5 个

上游声明了 7 个运行依赖，但扩展在 Node 侧真正 `import` 的只有 `chokidar`、`diff`、`parse5`、`turndown`，以及 `turndown` 用的 `@joplin/turndown-plugin-gfm`。

另外两个（`@plannotator/webtui`、`@pierre/diffs`）只服务代码评审那条路，却会连带拉进 `node-pty`（62 MB 原生模块）、`lucide-react`（42 MB）、`@xterm`、`shiki`。装了整棵树是 194 MB，裁剪后是 38 MB。

**验证方式**：用 pi 的真实加载器（jiti 加同款 alias）加载 `plannotator/index.ts`，扩展正常装起来并注册 3 个工具、4 个命令。
