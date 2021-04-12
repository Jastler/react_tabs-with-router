import React from 'react';
import { Route, Switch } from 'react-router';

import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { Tabs } from './components/Tabs';

import './App.scss';

/*
import { RouteComponentProps } from 'react-router-dom';

type TabsPageProps = React.FC<RouteComponentProps<{ tabId: string }>>;
const TabsPage: TabsPageProps = ({ match }) => {...};

or

import { useParams } from 'react-router-dom';

const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  ...
};
*/

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>
    <Header />
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route
        path="/tabs/:todoId?"
      >
        <Tabs
          tabs={tabs}
        />
      </Route>
    </Switch>
  </div>
);

export default App;
