import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownDescriptionProps {
  content?: string;
}

export default function MarkdownDescription({ content }: MarkdownDescriptionProps) {
  if (!content) {
    return <p className="text-slate-500 italic">No description provided.</p>;
  }

  return (
    <div className="text-slate-300 leading-relaxed font-light text-base sm:text-lg">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ ...props }) => (
            <h1 className="text-2xl sm:text-3xl font-bold text-white mt-8 mb-4 tracking-tight border-b border-white/10 pb-2" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="text-xl sm:text-2xl font-semibold text-white mt-6 mb-3 tracking-tight" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="text-lg sm:text-xl font-medium text-slate-100 mt-5 mb-2" {...props} />
          ),
          p: ({ ...props }) => (
            <p className="mb-4 leading-relaxed text-slate-300" {...props} />
          ),
          ul: ({ ...props }) => (
            <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300 ml-2" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="list-decimal list-inside space-y-2 mb-4 text-slate-300 ml-2" {...props} />
          ),
          li: ({ ...props }) => (
            <li className="leading-relaxed marker:text-blue-400" {...props} />
          ),
          a: ({ ...props }) => (
            <a
              className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors font-normal"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          blockquote: ({ ...props }) => (
            <blockquote
              className="border-l-4 border-blue-500/70 pl-4 py-2 my-5 italic text-slate-300 bg-white/[0.03] rounded-r-xl"
              {...props}
            />
          ),
          code: ({ className, children, ...props }) => {
            const isInline = !className;
            return isInline ? (
              <code
                className="px-2 py-0.5 rounded-md bg-white/10 text-pink-300 font-mono text-sm border border-white/10"
                {...props}
              >
                {children}
              </code>
            ) : (
              <code
                className="block p-4 my-4 rounded-2xl bg-neutral-950/80 border border-white/10 text-slate-200 font-mono text-sm overflow-x-auto shadow-inner"
                {...props}
              >
                {children}
              </code>
            );
          },
          pre: ({ children }) => <pre className="my-4">{children}</pre>,
          hr: () => <hr className="my-8 border-white/10" />,
          table: ({ ...props }) => (
            <div className="overflow-x-auto my-6 rounded-xl border border-white/10">
              <table className="min-w-full divide-y divide-white/10 text-left text-sm" {...props} />
            </div>
          ),
          thead: ({ ...props }) => <thead className="bg-white/5" {...props} />,
          th: ({ ...props }) => (
            <th className="px-4 py-3 font-semibold text-white tracking-wider uppercase text-xs" {...props} />
          ),
          td: ({ ...props }) => (
            <td className="px-4 py-3 text-slate-300 border-t border-white/5" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
