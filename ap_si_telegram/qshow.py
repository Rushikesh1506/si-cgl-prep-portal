import json
qs = json.load(open('content/day01_quiz.json', encoding='utf-8'))
out = []
for i, q in enumerate(qs, 1):
    out.append(f"### Q{i}. {q['q']}")
    for j, o in enumerate(q['options']):
        out.append(f"   ({chr(65+j)}) {o}")
    out.append(f"   >> Answer: ({chr(65+q['answer'])}) {q['options'][q['answer']]}")
    out.append(f"   Why: {q.get('expl', '')}")
    out.append('')
open('qshow.txt', 'w', encoding='utf-8').write('\n'.join(out))
print('QS:', len(qs))
