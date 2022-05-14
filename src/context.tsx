import * as React from 'react';

import { Engine, Model, Models } from './api';

export type Message = {
  name: string;
  message: string;
  date: Date;
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
  const { state, setState } = React.useContext(AppContext) || {};
  if (!state || !setState) {
    throw new Error("useAppContext must be used within a AppProvider");
  }

  const setModel = (engine: Engine) => {
    const model = Models.find((m: Model) => m.engine === engine) || state.model;
    setState(s => ({ ...s, model }));
  };

  const messages = state.messages[state.model.engine] || [];
  const sendMessage = (to: Engine, message: Message) => {
    setState(s => {
      return {
        ...s,
        messages: { ...s.messages, [to]: s.messages[to]?.concat(message) },
      };
    });
  };

  return {
    model: state.model,
    setModel,
    messages,
    sendMessage,
  };
};
