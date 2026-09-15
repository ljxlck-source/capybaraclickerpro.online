# Capybara Clicker Pro

英文静态游戏网站，网站品牌为 Capybara Clicker Pro，实际嵌入的游戏为 Capybara Clicker Pro。

## 文件

- `index.html`：页面内容、SEO 元数据和游戏 iframe
- `styles.css`：奶油色、棕色与鼠尾草绿的响应式水豚主题
- `capybara.svg`：本地水豚插画，上传时必须一并保留
- `script.js`：全屏按钮

无需安装依赖或编译。将 HTML、CSS、JavaScript 和 SVG 文件放在同一目录，双击 `index.html` 可预览。外部游戏需要联网。

## 上传 GitHub

将本目录内的文件上传到 https://github.com/ljxlck-source/capybaraclickerpro.online 仓库根目录并提交。不要只上传 ZIP，也不要在外面再套一层目录。

## GitHub Pages

在仓库 Settings → Pages 中选择 Deploy from a branch，选择文件所在分支及根目录 `/ (root)`，保存后等待部署。页面使用相对资源路径，可放在项目子路径下。

## 域名

当前 canonical 和 Open Graph URL 为 `https://capybaraclickerpro.online/`，并不代表域名已注册、绑定或验证。初期若使用 GitHub Pages 地址作为正式地址，请同步修改这两处 URL。确定拥有域名后，再设置 GitHub Pages 自定义域名及 DNS。本包未预设 CNAME，避免误绑定域名。

## 游戏来源

介绍页：https://www.onlinegames.io/capybara-clicker-pro/

嵌入地址：https://www.onlinegames.io/games/2023/q2/capybara-clicker-pro/index.html

本仓库不包含第三方游戏源码。游戏由提供方加载，游戏内品牌、广告、服务可用性和移动端体验取决于提供方。上线时遵守提供方当前的嵌入使用条件。
