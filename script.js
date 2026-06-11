:root {
    --bg-dark: #0f0f12;
    --bg-sidebar: #141417;
    --bg-input: #1c1c21;
    --bg-hover: #232329;
    --accent: #10b37e;
    --purple: #8b5cf6;
    --text: #f4f4f5;
    --text-muted: #a1a1aa;
    --border: #27272a;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: var(--bg-dark);
    color: var(--text);
    height: 100vh;
    overflow: hidden;
}

.app {
    display: flex;
    height: 100vh;
}

.sidebar {
    width: 240px;
    background: var(--bg-sidebar);
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    padding: 16px;
}

.new-chat-btn {
    width: 100%;
    padding: 14px;
    background: transparent;
    border: 1px solid var(--border);
    border-radius: 10px;
    color: var(--text);
    font-size: 14px;
    cursor: pointer;
    transition: 0.2s;
}

.new-chat-btn:hover {
    background: var(--bg-hover);
}

.sidebar-menu h3 {
    font-size: 11px;
    text-transform: uppercase;
    color: var(--text-muted);
    margin: 20px 0 12px;
}

.menu-btn {
    width: 100%;
    padding: 12px;
    background: transparent;
    border: none;
    border-radius: 8px;
    color: var(--text-muted);
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 4px;
    transition: 0.2s;
}

.menu-btn:hover {
    background: var(--bg-hover);
    color: var(--text);
}

.menu-btn.active {
    background: var(--accent);
    color: white;
}

.sidebar-bottom {
    margin-top: auto;
    padding-top: 16px;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 10px;
}

.avatar {
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, var(--accent), var(--purple));
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.main-header {
    padding: 16px 24px;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.main-header h1 {
    font-size: 20px;
    background: linear-gradient(90deg, var(--accent), var(--purple));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.icon-btn {
    width: 40px;
    height: 40px;
    background: transparent;
    border: 1px solid var(--border);
    border-radius: 10px;
    color: var(--text-muted);
    cursor: pointer;
    transition: 0.2s;
}

.icon-btn:hover {
    background: var(--bg-hover);
}

.chat-area {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
}

.welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;
    text-align: center;
}

.welcome-icon {
    width: 72px;
    height: 72px;
    background: linear-gradient(135deg, var(--accent), var(--purple));
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
}

.welcome h2 {
    font-size: 28px;
    margin: 20px 0 8px;
}

.welcome p {
    color: var(--text-muted);
    margin-bottom: 32px;
}

.quick-links {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
}

.quick-links button {
    padding: 12px 18px;
    background: var(--bg-input);
    border: 1px solid var(--border);
    border-radius: 10px;
    color: var(--text);
    font-size: 14px;
    cursor: pointer;
    transition: 0.2s;
}

.quick-links button:hover {
    background: var(--bg-hover);
    border-color: var(--accent);
}

#messages {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
}

.message {
    display: flex;
    gap: 14px;
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.message.user {
    flex-direction: row-reverse;
}

.msg-avatar {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.message.user .msg-avatar {
    background: var(--accent);
}

.message.bot .msg-avatar {
    background: var(--purple);
}

.msg-content {
    max-width: 70%;
    padding: 14px 18px;
    border-radius: 14px;
    font-size: 15px;
    line-height: 1.6;
}

.message.user .msg-content {
    background: var(--accent);
    color: white;
    border-bottom-right-radius: 4px;
}

.message.bot .msg-content {
    background: var(--bg-input);
    border: 1px solid var(--border);
}

.input-area {
    padding: 16px 24px;
    background: linear-gradient(transparent, var(--bg-dark) 30%);
}

.input-container {
    max-width: 800px;
    margin: 0 auto;
    background: var(--bg-input);
    border: 1px solid var(--border);
    border-radius: 14px;
    display: flex;
    padding: 10px;
    align-items: center;
}

.input-container input {
    flex: 1;
    background: transparent;
    border: none;
    color: var(--text);
    font-size: 15px;
    font-family: inherit;
    outline: none;
}

.input-container input::placeholder {
    color: var(--text-muted);
}

.send-btn {
    width: 44px;
    height: 44px;
    background: var(--accent);
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
}

.send-btn:hover {
    background: #0d8a5f;
}

.disclaimer {
    text-align: center;
    font-size: 12px;
    color: var(--text-muted);
    margin-top: 12px;
}

::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 3px;
}

@media (max-width: 768px) {
    .sidebar {
        display: none;
    }
}
