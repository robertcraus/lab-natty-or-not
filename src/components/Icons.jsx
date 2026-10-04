export function Arrow({ className = '', ...props }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true" {...props}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export function Check({ className = '', ...props }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true" {...props}><path d="m5 12 4 4L19 6" /></svg>;
}

export function PainIcon({ kind }) {
  const paths = {
    clock: <><circle cx="12" cy="12" r="8" /><path d="M12 7v5l3 2" /></>,
    loop: <><path d="M19 8a8 8 0 0 0-13-2L3 9m0-5v5h5M5 16a8 8 0 0 0 13 2l3-3m0 5v-5h-5" /></>,
    test: <><path d="M5 19V9m7 10V5m7 14v-6M3 9h4m3-4h4m3 8h4" /></>,
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-7" aria-hidden="true">{paths[kind]}</svg>;
}
