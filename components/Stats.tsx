import React from 'react';
import { Message, Loader, Dimmer } from 'semantic-ui-react';
import { useStats } from '../utils/useStats';

interface Props {
  title?: string;
  url: string;
  children?: React.ReactNode;
}

export const Stats: React.FC<Props> = props => {
  const { stats, loading, error } = useStats(props.url);

  const handleError = () => {
    return (
      <Message negative>
        <p>{error?.message}</p>
      </Message>
    );
  };

  return (
    <div className="stats-container">
      {props.title && <h2>{props.title}</h2>}
      {props.children}
      <div className="spacer"></div>
      {error ? (
        handleError()
      ) : (
        <div className="statistics">
          <div className="stats">
            {loading && (
              <Dimmer active inverted>
                <Loader>Loading</Loader>
              </Dimmer>
            )}
            <div className="stats-item">
              <div className="value">
                {stats?.confirmed?.value.toLocaleString()}
              </div>
              <div className="label">Confirmed</div>
            </div>
            <div className="stats-item">
              <div className="value">
                {stats?.recovered?.value.toLocaleString()}
              </div>
              <div className="label">Recovered</div>
            </div>
            <div className="stats-item">
              <div className="value">
                {stats?.deaths?.value.toLocaleString()}
              </div>
              <div className="label">Deaths</div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .stats-container {
          display: flex;
          flex-direction: column;
          position: relative;
          min-width: 1px;
          max-width: 100%;
          flex: 1;
          justify-content: center;
          align-items: center;

          margin-top: calc(64pt - 1px);
        }

        .statistics {
          margin: 0 auto;
          max-width: 782pt;
          padding: 16pt 0;
          background-color: transparent;
        }

        .stats {
          display: flex;
          align-items: center;
          justify-items: center;
          width: 100%;
          margin: 0 auto;
        }

        .stats-item {
          border-right: 1px solid #eaeaea;
          padding: 0 33px;
          flex-grow: 1;
          text-align: center;
        }

        .stats-item:last-child {
          border-right: none;
        }

        .value {
          font-size: calc(58px + (80 - 58) * ((100vw - 320px) / (1440 - 320)));
          line-height: 1.14em;
          letter-spacing: -0.05em;
          font-weight: bold;
          color: #000000;
        }

        .label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #666666;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-align: center;
          margin-top: 4px;
        }

        @media (max-width: 960px) {
          .stats {
            flex-direction: column;
          }

          .stats .stats-item {
            margin: 20px 0;
            padding: 0;
            border: none;
          }
        }
      `}</style>
    </div>
  );
};
