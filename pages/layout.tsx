import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = props => {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
        html,
        body {
          color: #000000;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          height: auto;
          font-size: 16px;
        }

        * {
          box-sizing: border-box;
        }

        h2 {
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
          color: #666666;
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
          color: #666666;
          text-align: center;
          margin: 0;
          font-family: var(--font-sans);
          --size: 1rem;
          line-height: 1.5em;
          font-size: var(--size);
          text-transform: none;
        }

        .ui.search.selection.dropdown {
          font-size: 1.25rem;
        }

        .spacer {
          display: block;
          width: 1px;
          height: 1px;
          margin-left: 15.25pt;
          margin-top: 15.25pt;
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

          .ui.search.selection.dropdown {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
