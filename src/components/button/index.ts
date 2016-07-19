import { DOMSource } from '@cycle/dom/xstream-typings';
import xs, { Stream } from 'xstream';
import { VNode } from '@cycle/dom';
import isolate from '@cycle/isolate';

export interface IButtonSources {
  dom: DOMSource;
  disabled$: Stream<boolean>;
  content$: Stream<VNode>;
}

export interface IButtonSinks {
  dom: Stream<VNode>;
  click$: Stream<MouseEvent>;
  hover$: Stream<MouseEvent>;
  focus$: Stream<FocusEvent>;
  pressed$: Stream<boolean>;
  disabled$: Stream<boolean>;
}

function ButtonComponent(sources: IButtonSources): IButtonSinks {

  return null;
}

export const Button = (sources: IButtonSources) => isolate(ButtonComponent)(sources);
