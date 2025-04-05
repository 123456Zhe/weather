# 南昌市天气预报应用

这是一个简单的天气预报应用，专门显示南昌市的天气信息。应用包含前端页面和后端API，提供当前天气和15天预报数据。

## 功能特点

- 显示南昌市当前天气信息（温度、天气描述、湿度、风速、气压）
- 提供未来15天的天气预报
- 响应式设计，适配各种设备屏幕

## 技术栈

- 前端：HTML, CSS, JavaScript
- 后端：Python (Flask)
- 数据来源：中国天气网和备用API

## 安装与运行

### 安装依赖

```bash
pip install -r requirements.txt
```

### 运行后端服务

```bash
python api.py
```

服务将在 http://localhost:5000 启动

### 访问应用

在浏览器中打开 index.html 文件，或者使用简单的HTTP服务器：

```bash
python -m http.server 8000
```

然后访问 http://localhost:8000

## 文件说明

- `index.html` - 前端页面
- `style.css` - 样式表
- `script.js` - 前端JavaScript代码
- `api.py` - 后端API服务
- `city.json` - 城市代码映射文件
- `requirements.txt` - Python依赖列表

## 注意事项

- 应用默认使用中国天气网数据，如果获取失败会自动切换到备用API
- 如果两个API都无法访问，将显示默认数据