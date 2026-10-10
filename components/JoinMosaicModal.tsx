'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';

export function JoinMosaicModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);
  useEffect(() => {
    if (!open) triggerRef.current?.focus();
  }, [open]);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent('Join The Mosaic');
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nSchool or community: ${data.get('community')}\nWhy I want to join: ${data.get('reason')}`);
    window.location.href = `mailto:abhinavkrishna1008@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return <>
    <button className="join-button" type="button" ref={triggerRef} onClick={() => { setOpen(true); setSent(false); }}>Join The Mosaic</button>
    {open && <div className="modal-backdrop" role="presentation" onMouseDown={event => { if (event.currentTarget === event.target) setOpen(false); }}><section className="join-modal" role="dialog" aria-modal="true" aria-labelledby="join-title"><button className="modal-close" type="button" ref={closeButtonRef} aria-label="Close membership form" onClick={() => setOpen(false)}>×</button><h2 id="join-title">Join The Mosaic</h2><p>Tell us a little about yourself. Your email app will open with your response ready to send.</p>{sent ? <p className="form-success" role="status">Your email draft is ready. Send it to complete your request.</p> : <form onSubmit={submit}><label htmlFor="join-name">Name<input id="join-name" name="name" required /></label><label htmlFor="join-email">Email<input id="join-email" name="email" type="email" required /></label><label htmlFor="join-community">School or community<input id="join-community" name="community" required /></label><label htmlFor="join-reason">Why would you like to join?<textarea id="join-reason" name="reason" rows={3} required /></label><button className="join-submit" type="submit">Prepare my email →</button></form>}</section></div>}
  </>;
}
