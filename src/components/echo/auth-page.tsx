import { useEffect, useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand, inputClass } from "./primitives";
import blue from "@/assets/echo-glass-blue.jpg";
import titanium from "@/assets/echo-titanium.jpg";
import orbit from "@/assets/echo-orbit.jpg";

const images = [blue, titanium, orbit];
export function AuthPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [image, setImage] = useState(0);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  useEffect(() => { const id = window.setInterval(() => setImage((i) => (i + 1) % images.length), 5000); return () => window.clearInterval(id); }, []);
  const submit = (e: FormEvent) => { e.preventDefault(); window.sessionStorage.setItem("echo-session", "demo"); navigate({ to: "/dashboard" }); };
  return <main className="relative grid min-h-screen place-items-center overflow-hidden bg-foreground px-4 py-10">
    {images.map((src, index) => <img key={src} src={src} alt="" width={1600} height={1000} className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${image === index ? "opacity-70" : "opacity-0"}`}/>) }
    <div className="absolute inset-0 bg-foreground/50"/>
    <div className="glass-strong relative z-10 w-full max-w-md rounded-[1.75rem] p-6 md:p-8">
      <div className="mb-8 flex items-center justify-between"><Link to="/"><Brand/></Link><span className="text-xs text-muted-foreground">Admin Workspace</span></div>
      <div className="mb-6 grid grid-cols-2 rounded-xl bg-muted p-1"><button type="button" onClick={() => setMode("signin")} className={`rounded-lg py-2 text-sm font-semibold transition ${mode === "signin" ? "bg-surface-strong shadow-soft" : "text-muted-foreground"}`}>Sign In</button><button type="button" onClick={() => setMode("signup")} className={`rounded-lg py-2 text-sm font-semibold transition ${mode === "signup" ? "bg-surface-strong shadow-soft" : "text-muted-foreground"}`}>Sign Up</button></div>
      <h1 className="text-3xl font-semibold">{mode === "signin" ? "Welcome back." : "Create your workspace."}</h1><p className="mt-2 text-sm text-muted-foreground">{mode === "signin" ? "Enter your details to continue to ECHO." : "Set up your ECHO administrator account."}</p>
      <form onSubmit={submit} className="mt-7 grid gap-4">{mode === "signup" && <><input className={inputClass} aria-label="Full name" placeholder="Full name" required maxLength={100}/><input className={inputClass} aria-label="Mobile number" placeholder="Mobile number" inputMode="tel" required maxLength={15}/></>}<input className={inputClass} aria-label="Email" type="email" placeholder="Email address" required maxLength={255}/><div className="relative"><input className={inputClass} aria-label="Password" type={show ? "text" : "password"} placeholder="Password" required minLength={6} maxLength={100}/><button type="button" aria-label="Show password" onClick={() => setShow(!show)} className="absolute right-3 top-3 text-muted-foreground">{show ? <EyeOff className="size-4"/> : <Eye className="size-4"/>}</button></div>{mode === "signin" && <div className="flex items-center justify-between text-xs"><label className="flex items-center gap-2"><input type="checkbox"/>Remember me</label><button type="button" className="text-primary">Forgot password?</button></div>}<Button size="lg" className="mt-2 w-full">{mode === "signin" ? "Enter ECHO" : "Create Account"}<ArrowRight className="size-4"/></Button></form>
    </div><p className="absolute bottom-5 z-10 text-xs text-primary-foreground/45">Powered by Xelevate</p>
  </main>;
}