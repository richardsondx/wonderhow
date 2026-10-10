#!/usr/bin/env python3
"""Call OpenAI chat completions with the stored custom.openai credential.

Usage:
  oai_chat.py --model gpt-4o-mini --system "..." --user "..." [--json]
Reads system/user from flags (or --user-file). Prints response text to stdout.
"""
import argparse, json, sys, urllib.request

sys.path.insert(0, "/opt/hatch/skills/skill-creator/bin")
from dynamic_credentials import add_surrogate_to_request, read_json_response

API = "https://api.openai.com/v1/chat/completions"

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--model", default="gpt-4o-mini")
    ap.add_argument("--system", default="You are a helpful assistant.")
    ap.add_argument("--user", default="")
    ap.add_argument("--user-file", default="")
    ap.add_argument("--json", action="store_true", help="request JSON object output")
    ap.add_argument("--max-tokens", type=int, default=2000)
    ap.add_argument("--temperature", type=float, default=0.7)
    args = ap.parse_args()

    user_text = args.user
    if args.user_file:
        with open(args.user_file) as f:
            user_text = f.read()

    payload = {
        "model": args.model,
        "messages": [
            {"role": "system", "content": args.system},
            {"role": "user", "content": user_text},
        ],
        "max_tokens": args.max_tokens,
        "temperature": args.temperature,
    }
    if args.json:
        payload["response_format"] = {"type": "json_object"}

    req = urllib.request.Request(
        API,
        data=json.dumps(payload).encode(),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    add_surrogate_to_request(req, "custom.openai", allowed_hosts=["api.openai.com"])
    with urllib.request.urlopen(req, timeout=120) as resp:
        data = read_json_response(resp)
    text = data["choices"][0]["message"]["content"]
    print(text)

if __name__ == "__main__":
    main()
