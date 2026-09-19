import json
targets = [
 ('content/STAGING/day01/day01_quiz.json', 5, 'panchayat bars Dalit'),
 ('content/STAGING/day02/day02_ca.json', 10, 'armed rebellion'),
 ('content/STAGING/day05/day05_quiz.json', 3, None),
 ('content/STAGING/day05/day05_hard.json', 5, None),
 ('content/STAGING/day05/day05_ca.json', 4, None),
 ('content/STAGING/day06/day06_quiz.json', 1, None),
 ('content/STAGING/day06/day06_quiz.json', 11, None),
 ('content/STAGING/day06/day06_hard.json', 4, None),
 ('content/STAGING/day06/day06_ca.json', 1, None),
 ('content/STAGING/day06/day06_ca.json', 4, None),
 ('content/STAGING/day07/day07_quiz.json', 8, None),
 ('content/STAGING/day08/day08_hard.json', 6, None),
 ('content/STAGING/day09/day09_hard.json', 9, None),
 ('content/STAGING/day11/day11_hard.json', 8, None),
 ('content/STAGING/day12/day12_quiz.json', 7, None),
 ('content/STAGING/day12/day12_ca.json', 10, None),
]
for fp, n, hint in targets:
    qs = json.load(open(fp, encoding='utf-8'))
    q = qs[n-1]
    print('####', fp, 'Q' + str(n))
    print('Q:', q['q'])
    for i, o in enumerate(q['options']):
        print(f'  ({i}) {o}')
    print('ANS:', q['answer'], '| EXPL:', q.get('expl', ''))
    print()
