import json, subprocess, sys
T = '8668139827:AAF9mcSUHjDBFyR6nWmhq80Sgwynq6eTtNs'
C = '1551411722'
fn = sys.argv[1] if len(sys.argv) > 1 else 'content/day01_quiz.json'
tag = sys.argv[2] if len(sys.argv) > 2 else 'D1'
qs = json.load(open(fn, encoding='utf-8'))
ok = 0
base = f'https://api.telegram.org/bot{T}/sendPoll'
for i, q in enumerate(qs):
    args = ['curl.exe', '-k', '-s', '-X', 'POST', base,
            '--data-urlencode', f'chat_id={C}',
            '--data-urlencode', f"question=[{tag} {i+1}/{len(qs)}] " + q['q'][:275],
            '--data-urlencode', 'options=' + json.dumps(q['options'][:4], ensure_ascii=False),
            '--data-urlencode', 'type=quiz',
            '--data-urlencode', f"correct_option_id={q['answer']}",
            '--data-urlencode', 'explanation=' + q['expl'][:190]]
    r = subprocess.run(args, capture_output=True, text=True)
    if '"ok":true' in r.stdout:
        ok += 1
    else:
        print('FAIL', i + 1, r.stdout[:120])
print(f'POLLS_SENT: {ok}/{len(qs)}')
