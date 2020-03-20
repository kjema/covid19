import React from 'react';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { Message, Loader, Dimmer } from 'semantic-ui-react';

import { useStats } from '../utils/useStats';

interface Props {
  title?: string;
  url: string;
  children?: React.ReactNode;
}

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 1px;
  max-width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: var(--page-margin);

  @media (max-width: 600px) {
    margin-top: var(--page-margin-m);
  }
`;

const Statistics = styled.div`
  margin: 0 auto;
  max-width: 782pt;
  padding: 16pt 0;
  background-color: transparent;
`;

const StatsContent = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 960px) {
    flex-direction: column;
    margin: 20px 0;
    padding: 0;
    border: none;
  }
`;

const StatsItem = styled.div`
  border-right: 1px solid #eaeaea;
  padding: 0 33px;
  flex-grow: 1;
  text-align: center;

  &:last-child {
    border-right: none;
  }

  @media (max-width: 960px) {
    margin: 20px 0;
    padding: 0;
    border: none;
  }
`;

const StatsValue = styled.div`
  font-size: calc(58px + (80 - 58) * ((100vw - 320px) / (1440 - 320)));
  line-height: 1.14em;
  letter-spacing: -0.05em;
  font-weight: bold;
  color: ${props => props.theme.foreground};
`;

const StatsLabel = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${props => props.theme.accents1};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  margin-top: 4px;
`;

export const Stats: React.FC<Props> = props => {
  const { stats, loading, error } = useStats(props.url);
  const darkMode = useDarkMode(false);

  const handleError = () => {
    return (
      <Message negative>
        <p>{error?.message}</p>
      </Message>
    );
  };

  const formatDate = (date: number) => {
    return new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  };

  return (
    <StatsContainer>
      {props.title && <h2>{props.title}</h2>}
      {props.children}
      <h5>{stats?.lastUpdate && formatDate(Date.parse(stats?.lastUpdate))}</h5>
      <div className="spacer"></div>
      {error ? (
        handleError()
      ) : (
        <Statistics>
          <StatsContent>
            {loading && (
              <Dimmer active inverted={!darkMode.value}>
                <Loader></Loader>
              </Dimmer>
            )}
            <StatsItem>
              <StatsValue>
                {stats?.confirmed?.value.toLocaleString()}
              </StatsValue>
              <StatsLabel>Confirmed</StatsLabel>
            </StatsItem>
            <StatsItem>
              <StatsValue>
                {stats?.recovered?.value.toLocaleString()}
              </StatsValue>
              <StatsLabel>Recovered</StatsLabel>
            </StatsItem>
            <StatsItem>
              <StatsValue>{stats?.deaths?.value.toLocaleString()}</StatsValue>
              <StatsLabel>Deceased</StatsLabel>
            </StatsItem>
          </StatsContent>
        </Statistics>
      )}
    </StatsContainer>
  );
};
