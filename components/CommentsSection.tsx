'use client';

import { FormEvent, useEffect, useState } from 'react';

type Comment = { id: number; name: string; body: string };

export function CommentsSection({ slug }: { slug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(`mosaic-comments-${slug}`);
      if (saved) setComments(JSON.parse(saved));
    } catch {
      setComments([]);
    }
  }, [slug]);

  function submitComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const comment = { id: Date.now(), name: name.trim() || 'Anonymous', body: body.trim() };
    if (!comment.body) return;
    const nextComments = [...comments, comment];
    setComments(nextComments);
    window.localStorage.setItem(`mosaic-comments-${slug}`, JSON.stringify(nextComments));
    setName('');
    setBody('');
    setMessage('Your comment was saved on this device.');
  }

  return <section className="comments-section" aria-labelledby="comments-title">
    <h2 id="comments-title">Comments</h2>
    <form className="comments-form" onSubmit={submitComment}>
      <label htmlFor="comment-name">Name <span>(optional)</span></label>
      <input id="comment-name" value={name} onChange={event => setName(event.target.value)} maxLength={80} placeholder="Your name" />
      <label htmlFor="comment-body">Write a comment...</label>
      <textarea id="comment-body" value={body} onChange={event => setBody(event.target.value)} maxLength={1000} rows={5} required placeholder="Write a comment..." />
      <div className="comments-actions"><button className="comment-submit" type="submit">Post comment</button><span>{body.length}/1000</span></div>
    </form>
    <p className="comments-note">Comments are currently saved only in this browser.</p>
    {message ? <p className="comments-status" role="status">{message}</p> : null}
    {comments.length ? <div className="comment-list" aria-label="Posted comments">{comments.map(comment => <article className="comment" key={comment.id}><p className="comment-author">{comment.name}</p><p>{comment.body}</p></article>)}</div> : null}
  </section>;
}
