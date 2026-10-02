# Lsw_BrowserSpeedTest

一个轻量级浏览器扩展，用于测量网页加载性能。

## 功能

Lsw_BrowserSpeedTest 可以测量当前网页导航过程中的主要加载时间，包括：

- DNS解析：域名解析所花费的时间
- 建立连接：建立网络连接所花费的时间
- 接收数据：接收网页主响应数据所花费的时间
- 页面完成：从开始加载到页面 `load` 完成所花费的总时间

扩展会在浏览器工具栏显示页面加载总时间，并可以通过弹出窗口查看详细数据。

## 支持

本项目采用 WebExtension / Manifest V3 设计，可用于支持相应扩展标准的浏览器。

## 安装

### 开发者模式安装

1. 下载或克隆本项目。
2. 打开浏览器的扩展管理页面。
3. 开启开发者模式。
4. 选择加载已解压的扩展。
5. 选择项目中的 `BrowserSpeedTest` 扩展目录。
6. 完成安装。

### 商店安装

正式发布后，将提供对应浏览器扩展商店的安装入口。

## 数据与隐私

Lsw_BrowserSpeedTest 使用浏览器提供的 Navigation Timing API 获取网页加载性能数据。

当前版本的测速结果保存在用户本地浏览器存储中。

当前版本没有将测速结果主动上传到开发者服务器。

详细信息请参阅：

[Privacy Policy](PRIVACY.md)

## 项目结构

```text
BrowserSpeedTest/
 manifest.json
 background.js
 content.js
 popup.html
 popup.css
 popup.js
 icons/
     a1.ico
版本

当前版本：

v1.0.0

许可证

本项目采用 MIT License。

版权所有：

Copyright (c) 2026 Lsw

详细许可证内容请参阅 LICENSE。

作者

Lsw

项目地址

GitHub：

https://github.com/JAYGZ1/Lsw_BrowserSpeedTest

Lsw_BrowserSpeedTest

A lightweight browser extension for measuring webpage loading performance.

Features

Lsw_BrowserSpeedTest measures key loading timings during the current page navigation, including:

DNS Resolution: Time spent resolving the domain name
Connection Establishment: Time spent establishing the network connection
Data Transfer: Time spent receiving the main webpage response data
Page Completion: Total time from navigation start until the page load event completes

The extension displays the total page loading time on the browser toolbar and provides detailed timing information through the popup window.

Support

This project is designed using WebExtension / Manifest V3 standards and can be used with browsers that support the corresponding extension APIs.

Installation
Install in Developer Mode
Download or clone this repository.
Open the browser's extension management page.
Enable Developer Mode.
Select "Load unpacked".
Select the BrowserSpeedTest extension directory from this project.
The extension will be installed.
Store Installation

Official browser extension store links will be provided after the extension is published.

Data and Privacy

Lsw_BrowserSpeedTest uses the browser's Navigation Timing API to obtain webpage loading performance information.

In the current version, measurement results are stored locally in the user's browser storage.

The current version does not actively upload measurement results to a developer-operated server.

For more information, please see:

Privacy Policy

Project Structure
BrowserSpeedTest/
 manifest.json
 background.js
 content.js
 popup.html
 popup.css
 popup.js
 icons/
     a1.ico
Version

Current version:

v1.0.0

License

This project is licensed under the MIT License.

Copyright:

Copyright (c) 2026 Lsw

See LICENSE for the full license text.

Author

Lsw

Project

GitHub:

https://github.com/JAYGZ1/Lsw_BrowserSpeedTest
