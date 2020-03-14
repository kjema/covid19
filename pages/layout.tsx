import React from 'react';
import { Container } from 'semantic-ui-react';

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
          font-size: 3.5rem;
          font-weight: 700;
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
            font-size: 3rem;
          }

          .ui.search.selection.dropdown {
            // font-size: 1.5rem;
          }

          .spacer {
            display: none;
          }
        }
        @media (max-width: 600px) {
          h2 {
            font-size: 2rem;
          }

          .ui.search.selection.dropdown {
            // font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
