import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export const Tabs = ({ tabs }) => {
  const match = useRouteMatch(0);
  const selectedTab = tabs.filter(tab => tab.id === match.params.todoId);

  return (
    <>
      <h2>Tabs</h2>
      <ul>
        {tabs.map(tab => (
          <React.Fragment key={tab.id}>
            <Link to={`/tabs/${tab.id}`}>
              {tab.title}
            </Link>
          </React.Fragment>
        ))}
      </ul>
      <p>
        {selectedTab[0] ? selectedTab[0].content : '-------'}
      </p>
    </>
  );
};
