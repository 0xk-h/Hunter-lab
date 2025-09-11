// ==UserScript==
// @name         PythonTutor paste wrapper
// @namespace    http://tampermonkey.net/
// @version      2025-09-04
// @description  auto-paste leetcode wrapper
// @author       Hunter
// @match        https://pythontutor.com/render.html
// @match        https://pythontutor.com/visualize.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pythontutor.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  console.log("🐒 Tampermonkey script loaded");

  function transformCode(pasted) {
    const raw = pasted.trim();
    if (!raw) return raw;

    const classMatch = raw.match(/class\s+(\w+)/);
    const className = classMatch ? classMatch[1] : null;

    const funcMatches = [...raw.matchAll(/^\s{4}def\s+(\w+)\s*\(/gm)];
    const funcNames = funcMatches.map((m) => m[1]);

    if (className && funcNames.length > 0) {
      let out = raw;

      if (!/^\s*from\s+typing\s+import\s+List\b/m.test(out)) {
        out = "from typing import List\n\n" + out;
      }

      out = out.replace(/\s+$/, "");
      out += "\n\n";

      let calls = `h = ${className}()\n`;
      funcNames.forEach((fn) => {
        calls += `print(h.${fn}())\n`;
      });

      return out + calls;
    }

    return raw;
  }

  function attachPasteHandler() {
    const aceInput = document.querySelector(".ace_text-input");
    if (!aceInput || !window.ace) {
      console.log("⏳ Waiting for Ace...");
      return false;
    }

    console.log("✅ Found Ace input, attaching paste handler");

    const editor = ace.edit(document.querySelector(".ace_editor"));

    aceInput.addEventListener("paste", (e) => {
      const data = e.clipboardData || window.clipboardData;
      if (!data) return;

      const text = data.getData("text");
      if (!text) return;

      console.log(
        "📋 Paste detected:",
        text.slice(0, 80).replace(/\n/g, "\\n")
      );

      const wrapped = transformCode(text);

      if (wrapped === text.trim()) {
        console.log("ℹ️ Snippet detected, allowing normal paste");
        return;
      }

      e.preventDefault();
      e.stopImmediatePropagation();

      editor.setValue(wrapped, -1);
      editor.focus();

      console.log("✨ Wrapped code injected into Ace editor");
    });

    return true;
  }

  if (!attachPasteHandler()) {
    const obs = new MutationObserver(() => {
      if (attachPasteHandler()) obs.disconnect();
    });
    obs.observe(document.body, { childList: true, subtree: true });
  }
})();
