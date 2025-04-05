import requests
from bs4 import BeautifulSoup

url = 'http://www.weather.com.cn/weather/101240101.shtml'
response = requests.get(url)

# 保存原始响应内容
with open('response.html', 'w', encoding='utf-8') as f:
    f.write(response.text)

# 测试解析逻辑
soup = BeautifulSoup(response.text, 'html.parser')

# 捕获可能变化的元素
parsed_elements = {
    'current_div': str(soup.find('div', {'id': '7d'})),
    'details_div': str(soup.find('div', class_='temperature'))
}

with open('parsed_elements.txt', 'w', encoding='utf-8') as f:
    for name, content in parsed_elements.items():
        f.write(f'{name}:\n{content}\n\n')