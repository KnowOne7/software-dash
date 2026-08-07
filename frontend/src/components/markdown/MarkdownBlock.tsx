import { useEffect, useMemo, type FC } from 'react';
import mermaid from 'mermaid';

type MarkdownBlockProps = {
  content: string;
  className?: string;
};

type RenderSegment =
  | { type: 'html'; html: string }
  | { type: 'mermaid'; code: string };

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const formatInline = (value: string) =>
  escapeHtml(value)
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');

const renderTextBlock = (markdown: string) => {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const html: string[] = [];
  const listItems: string[] = [];

  const flushList = () => {
    if (listItems.length) {
      html.push(
        `<ul class="list-disc pl-5 space-y-1">${listItems
          .map((item) => `<li>${item}</li>`)
          .join('')}</ul>`
      );
      listItems.length = 0;
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      return;
    }

    if (trimmed.startsWith('### ')) {
      flushList();
      html.push(
        `<h3 class="text-base font-semibold mt-3 mb-2">${formatInline(trimmed.slice(4))}</h3>`
      );
      return;
    }

    if (trimmed.startsWith('## ')) {
      flushList();
      html.push(
        `<h2 class="text-lg font-semibold mt-3 mb-2">${formatInline(trimmed.slice(3))}</h2>`
      );
      return;
    }

    if (trimmed.startsWith('# ')) {
      flushList();
      html.push(
        `<h1 class="text-xl font-semibold mt-3 mb-2">${formatInline(trimmed.slice(2))}</h1>`
      );
      return;
    }

    if (trimmed.startsWith('- ')) {
      listItems.push(formatInline(trimmed.slice(2)));
      return;
    }

    flushList();
    html.push(`<p class="mb-2 leading-6">${formatInline(trimmed)}</p>`);
  });

  flushList();
  return html.join('');
};

const parseMarkdown = (markdown: string): RenderSegment[] => {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const segments: RenderSegment[] = [];
  let buffer: string[] = [];

  const flushBuffer = () => {
    const block = buffer.join('\n').trim();
    if (block) {
      segments.push({ type: 'html', html: renderTextBlock(block) });
    }
    buffer = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();

    if (trimmed.startsWith('```mermaid')) {
      flushBuffer();

      const codeLines: string[] = [];
      i++;

      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }

      if (codeLines.length) {
        segments.push({ type: 'mermaid', code: codeLines.join('\n').trim() });
      }

      continue;
    }

    buffer.push(lines[i]);
  }

  flushBuffer();
  return segments;
};

const MarkdownBlock: FC<MarkdownBlockProps> = ({ content, className = '' }) => {
  const segments = useMemo(() => parseMarkdown(content), [content]);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      theme: 'default',
      fontFamily: 'Inter, sans-serif',
    });

    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.mermaid-diagram'));

    nodes.forEach((node, index) => {
      const code = node.dataset.mermaid || '';
      if (!code) return;

      const id = `mermaid-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`;
      node.innerHTML = '';

      mermaid
        .render(id, code)
        .then(({ svg }) => {
          if (node.isConnected) {
            node.innerHTML = svg;
          }
        })
        .catch((error) => {
          console.error('Mermaid render error:', error);
          node.innerHTML = `<pre class="text-red-600">${escapeHtml(code)}</pre>`;
        });
    });
  }, [segments]);

  return (
    <div className={`rounded-lg border border-gray-200 bg-slate-50 p-4 text-sm text-gray-700 ${className}`}>
      {segments.map((segment, index) =>
        segment.type === 'mermaid' ? (
          <div
            key={index}
            className="mermaid-diagram my-4 overflow-x-auto rounded-lg border border-gray-200 bg-white p-3"
            data-mermaid={segment.code}
          />
        ) : (
          <div key={index} dangerouslySetInnerHTML={{ __html: segment.html }} />
        )
      )}
    </div>
  );
};

export default MarkdownBlock;