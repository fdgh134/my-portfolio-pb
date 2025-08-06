export default function Footer() {
  return (
    <footer className="absolute mx-auto max-w-[2560px] w-full flex-row text-center bg-white dark:bg-zinc-900">
      <div className="mx-auto px-[5vw] py-3 flex justify-between items-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2025 YoomJJu. All rights reserved.
        </p>
        <div className="flex flex-row space-x-4 py-4">
          <a href="https://github.com/fdgh134"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm text-white bg-zinc-700 rounded hover:bg-zinc-800 transition"
          >
            github
          </a>
          {/*
          <a
            href="https://velog.io/@yoomin101/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition"
          >
            blog
          </a>
          */}
        </div>
      </div>
    </footer>
  );
};