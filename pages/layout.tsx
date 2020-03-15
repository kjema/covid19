import React from 'react';
import { DarkModeToggle } from '../components/DarkModeToggle';

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = props => {
  return (
    <div className="page-layout">
      <header>
        <div className="links">
          <DarkModeToggle />
        </div>
      </header>
      <main>{props.children}</main>
      <footer>
        <span>Made with ❤️ by Marcus Kjell</span>
        <span>
          Data API provided by
          <a
            href="https://github.com/mathdroid/covid-19-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Mathdroid
          </a>
        </span>
      </footer>
      <style jsx global>{`
        html,
        body {
          color: var(--foreground);
          background: var(--background);
          padding: 0;
          margin: 0;
          font-family: var(--font-sans);
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          height: auto;
          font-size: 16px;
          text-align: center;
        }

        * {
          box-sizing: border-box;
        }

        :root {
          --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
          --transition: all 750ms;
          --page-margin: calc(64pt - 1px);
          --page-margin-m: calc(34pt - 1px);
        }

        body.light-mode {
          --foreground: #000;
          --background: #fff;
          --accents-1: #666;
          transition: var(--transition);
        }
        body.dark-mode {
          --foreground: #fff;
          --background: #000;
          --accents-1: #828282;
          transition: var(--transition);
        }

        header {
          width: 100%;
          margin: 0 auto;
          padding: 0 1rem;
          max-width: 1024px;
          text-align: center;
        }

        header .links {
          height: 50px;
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: flex-end;
        }

        .main {
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: center;
          align-items: center;
        }

        h2 {
          color: var(--foreground);
          text-align: center;
          margin: 0;
          line-height: 1.1em;
          letter-spacing: -0.049375rem;
          --size: 3.5rem;
          --size-t: 3rem;
          --size-m: 2rem;
          font-size: var(--size);
          font-weight: 700;
          text-transform: none;
        }

        h5 {
          color: var(--accents-1);
          text-align: center;
          margin: 16pt 0;
          font-weight: 600;
          line-height: 1.41em;
          letter-spacing: -0.01125rem;
          --size: 1.5rem;
          --size-t: 1.25rem;
          --size-m: 1rem;
          font-size: var(--size);
          font-weight: 400;
          text-transform: none;
        }

        .small {
          color: var(--accents-1);
          text-align: center;
          margin: 0;
          font-family: var(--font-sans);
          --size: 1rem;
          line-height: 1.5em;
          font-size: var(--size);
          text-transform: none;
        }

        .ui.search.selection.dropdown {
          color: #000;
          font-size: 1.25rem;
        }

        .spacer {
          display: block;
          width: 1px;
          height: 1px;
          margin-left: 15.25pt;
          margin-top: 15.25pt;
        }

        footer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: var(--page-margin);
          color: var(--foreground);
          margin-top: var(--page-margin);
          margin-bottom: 1rem;
        }

        @media (max-width: 960px) {
          h2 {
            font-size: var(--size-t);
          }

          h5 {
            font-size: var(--size-t);
          }

          .spacer {
            display: none;
          }
        }
        @media (max-width: 600px) {
          h2 {
            font-size: var(--size-m);
          }

          h5 {
            font-size: var(--size-m);
          }

          footer {
            margin-top: var(--page-margin-m);
          }

          .ui.search.selection.dropdown {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
