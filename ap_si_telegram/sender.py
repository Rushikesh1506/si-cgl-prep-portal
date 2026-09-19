"""Send generated message to Telegram. Env: BOT_TOKEN, CHAT_ID."""
import os, subprocess, sys
import urllib.request, urllib.parse, json

def send(text):
    token = os.environ.get("BOT_TOKEN", "")
    chat = os.environ.get("CHAT_ID", "")
    if not token or not chat:
        print("DRY-RUN (no BOT_TOKEN/CHAT_ID). Message preview:\n")
        print(text[:2000])
        return
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    # Telegram limit 4096 chars - split
    for i in range(0, len(text), 3900):
        chunk = text[i:i+3900]
        data = urllib.parse.urlencode({"chat_id": chat, "text": chunk, "parse_mode": "Markdown"}).encode()
        req = urllib.request.Request(url, data=data)
        with urllib.request.urlopen(req, timeout=20) as r:
            print(r.status, r.read()[:200])

if __name__ == "__main__":
    slot = sys.argv[1] if len(sys.argv) > 1 else "auto"
    out = subprocess.check_output([sys.executable, "generator.py", "--slot", slot], text=True)
    send(out)
