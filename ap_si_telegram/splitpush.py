import sys
text = open(sys.argv[1], encoding='utf-8').read()
label = sys.argv[2] if len(sys.argv) > 2 else 'Day'
parts, cur = [], ''
for para in text.split('\n\n'):
    if len(cur) + len(para) + 2 > 3200:
        parts.append(cur)
        cur = para
    else:
        cur = cur + '\n\n' + para if cur else para
if cur:
    parts.append(cur)
import glob, os
for f in glob.glob('pushchunk_*.txt'):
    os.remove(f)
for i, p in enumerate(parts):
    open(f'pushchunk_{i+1}.txt', 'w', encoding='utf-8').write(
        f'{label} ({i+1}/{len(parts)})\n' + p)
print('CHUNKS:', len(parts))
