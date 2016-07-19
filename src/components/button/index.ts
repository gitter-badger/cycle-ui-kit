import { DOMSource } from '@cycle/dom/xstream-typings';
import xs, { Stream } from 'xstream';
import { VNode } from '@cycle/dom';

export interface IButtonSources {
  dom: DOMSource;
  disabled$: Stream<boolean>;
}

export interface IButtonSinks {
  dom: Stream<VNode>;
  click$: Stream<MouseEvent>;
  hover$: Stream<MouseEvent>;
  focus$: Stream<FocusEvent>;
  pressed$: Stream<boolean>;
  disabled$: Stream<boolean>;
}

export function Button(sources: IButtonSources): IButtonSinks {
  return null;
}
