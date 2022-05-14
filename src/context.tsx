import * as React from 'react';
import createPersistedState from 'use-persisted-state';

import { Engine, Model, Models } from './api';

export type Message = {
  name: string;
  message: string;
  created: number;
  isResponse: boolean;
};
type AppContextState = {
  model: Model;
  messages: {
    [key in Engine]?: Message[];
  };
};

type AppContextValue = {
  state: AppContextState;
  setState: React.Dispatch<React.SetStateAction<AppContextState>>;
};

const useMessages =
  createPersistedState<AppContextState["messages"]>("messages");

export const AppContext = React.createContext<AppContextValue | undefined>(
  undefined,
);

export const AppProvider: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [state, setState] = React.useState({
    model: Models[0],
    messages: {},
  });
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const [localData, setLocalData] = useMessages({});
  const { state, setState } = React.useContext(AppContext) || {};
  if (!state || !setState) {
    throw new Error("useAppContext must be used within a AppProvider");
  }

  const model = state.model;
  const setModel = (engine: Engine) => {
    setState(s => ({
      ...s,
      model: Models.find((m: Model) => m.engine === engine) || state.model,
    }));
  };

  const messages =
    state.messages[state.model.engine] || localData[state.model.engine] || [];
  const sendMessage = (message: Message) => {
    setState(s => {
      return {
        ...s,
        messages: {
          ...s.messages,
          [state.model.engine]: messages.concat(message),
        },
      };
    });

    setLocalData((s: AppContextState["messages"]) => ({
      ...s,
      [state.model.engine]: messages.concat(message),
    }));
  };

  return {
    model,
    setModel,
    messages,
    sendMessage,
  };
};
