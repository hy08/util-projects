import { DemoModelState } from './demo';

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    demo?: boolean;
  };
}

export interface ConnectState {
  loading: Loading;
  demo: DemoModelState;
}
