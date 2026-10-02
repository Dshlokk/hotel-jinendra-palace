import re
with open(r'C:\Users\Divya Shlokk\.gemini\antigravity\brain\4d883b64-2da5-43cb-a8d7-36e0a042548f\.system_generated\steps\278\content.md', 'r', encoding='utf-8') as f:
    text = f.read()
ids = re.findall(r'"([a-zA-Z0-9-_]{33})"', text)
print(list(set(ids)))
