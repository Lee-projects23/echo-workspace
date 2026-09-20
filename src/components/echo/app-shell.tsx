import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, ChevronLeft, Menu, Moon, Search, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "./primitives";
import { navItems, searchRecords } from "@/lib/echo-data";

export function AppShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const isDark = window.localStorage.getItem("echo-theme") === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("echo-theme", next ? "dark" : "light");
  };
  const results = useMemo(() => query.trim() ? searchRecords.filter((item) => `${item.type} ${item.label} ${item.detail}`.toLowerCase().includes(query.toLowerCase())).slice(0, 8) : [], [query]);
  return <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
    <header className="sticky top-0 z-40 border-b border-border bg-background/75 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center gap-3 px-4 md:px-7">
        <Button variant="ghost" size="icon" aria-label="Go back" onClick={() => window.history.back()}><ChevronLeft className="size-5" /></Button>
        <Link to="/dashboard" aria-label="ECHO home"><Brand /></Link>
        <div className="relative ml-auto md:mx-auto md:w-full md:max-w-xl">
          <button type="button" onClick={() => setSearchOpen(true)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-muted-foreground md:w-full md:justify-start md:px-4"><Search className="size-4"/><span className="ml-2 hidden text-sm md:inline">Search everything…</span><kbd className="ml-auto hidden rounded-md border border-border px-1.5 py-0.5 text-[10px] md:block">⌘ K</kbd></button>
        </div>
        <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme}>{dark ? <Sun className="size-4"/> : <Moon className="size-4"/>}</Button>
        <Button variant="ghost" size="icon" aria-label="Notifications" className="relative"><Bell className="size-4"/><span className="absolute right-2 top-2 size-1.5 rounded-full bg-primary"/></Button>
        <Button variant="ghost" size="icon" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu className="size-5"/></Button>
      </div>
    </header>
    <main className="mx-auto min-h-[calc(100vh-8rem)] max-w-[1500px] px-4 py-7 md:px-7 md:py-10"><div className="animate-enter">{children}</div></main>
    <footer className="pb-5 text-center text-xs text-muted-foreground/50">Powered by Xelevate</footer>
    {menuOpen && <div className="fixed inset-0 z-50 bg-foreground/15 backdrop-blur-sm" onClick={() => setMenuOpen(false)}><aside className="glass-strong ml-auto flex h-full w-[min(88vw,360px)] flex-col rounded-l-[1.75rem] p-5 animate-enter" onClick={(e) => e.stopPropagation()}><div className="mb-8 flex items-center justify-between"><Brand/><Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)}><X className="size-5"/></Button></div><nav className="grid gap-1">{navItems.map((item) => <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${pathname === item.to ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground"}`}><item.icon className="size-4"/>{item.label}</Link>)}</nav><div className="mt-auto border-t border-border pt-5 text-xs text-muted-foreground/60">Powered by Xelevate</div></aside></div>}
    {searchOpen && <div className="fixed inset-0 z-50 flex items-start justify-center bg-foreground/15 px-4 pt-[12vh] backdrop-blur-md" onClick={() => setSearchOpen(false)}><div className="glass-strong w-full max-w-2xl rounded-[1.5rem] p-3" onClick={(e) => e.stopPropagation()}><div className="flex items-center gap-3 border-b border-border px-2 pb-3"><Search className="size-5 text-muted-foreground"/><input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search employees, clients, tasks, files…" className="h-10 flex-1 bg-transparent text-base outline-none"/><Button variant="ghost" size="icon" onClick={() => setSearchOpen(false)}><X className="size-4"/></Button></div><div className="max-h-[55vh] overflow-auto pt-2">{query && results.length === 0 && <p className="p-6 text-center text-sm text-muted-foreground">No results found</p>}{results.map((result) => <a key={`${result.type}-${result.label}`} href={result.to} className="flex items-center gap-4 rounded-xl p-3 hover:bg-accent"><span className="rounded-lg bg-primary/10 px-2 py-1 text-[10px] font-bold uppercase text-primary">{result.type}</span><span><strong className="block text-sm">{result.label}</strong><small className="text-muted-foreground">{result.detail}</small></span></a>)}</div></div></div>}
  </div>;
}