text = open('content/UPGRADED/MODULE_D01_ART14-18_23SEC.md', encoding='utf-8').read()
parts, cur = [], ''
for para in text.split('\n\n'):
    if len(cur) + len(para) + 2 > 3200:
        parts.append(cur)
        cur = para
    else:
        cur = cur + '\n\n' + para if cur else para
if cur:
    parts.append(cur)
for i, p in enumerate(parts):
    open(f'chunk_d01_{i+1}.txt', 'w', encoding='utf-8').write(
        f'Day-1 UPGRADED ({i+1}/{len(parts)})\n' + p)
print('CHUNKS:', len(parts))
