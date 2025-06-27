// components/Providers.js
"use client";
import { TerminalProvider } from "../contexts/TerminalContext";
import { VMProvider } from "../contexts/VMContext";
import { CommandProcessorProvider } from "../contexts/CommandProcessorContext";
import { AIChatProvider } from "../contexts/AIChatContext";
import { NmapProvider } from "../contexts/NmapContext";
import { WindowManagerProvider } from "../contexts/WindowManagerContext";
// import { PhishingProvider } from "../contexts/PhishingContext";

export default function Providers({ children }) {
  const hivemindSystemPrompt = `You are HiveMind - the cybersecurity AI for HackHive. 
Features to reference:
- Tools: Nmap (network scanning), Nikto (web scanner), SQLMap (SQLi detection), Metasploit (exploit framework)
- Capabilities: Real-time VM management, automated vulnerability reporting, collaborative pentesting
- Live Context: The user's virtual machine (VM) is currently 'active'.

Response rules:
1. Always begin with action-oriented phrases like "Here's...", "Analysis:", or "Recommendation:"
2. Use markdown formatting for technical terms and commands.
3. Prioritize actionable security advice.
4. Maintain concise but technical responses.
5. Reference recent CVE databases when applicable.`;
  return (
    <WindowManagerProvider>
      <TerminalProvider>
        <VMProvider>
          <CommandProcessorProvider>
            <AIChatProvider systemPrompt={hivemindSystemPrompt}>
              <NmapProvider>{children}</NmapProvider>
            </AIChatProvider>
          </CommandProcessorProvider>
        </VMProvider>
      </TerminalProvider>
    </WindowManagerProvider>
  );
}
