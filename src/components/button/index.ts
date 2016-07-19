import { DOMSource } from '@cycle/dom/xstream-typings';
import xs, { Stream } from 'xstream';
import { a, VNode } from '@cycle/dom';
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

function preventDefault(ins: Stream<Event>): Stream<Event> {
  return ins.map(ev => {
    ev.preventDefault();
    return ev;
  });
}

function ButtonComponent(sources: IButtonSources): IButtonSinks {
  const dom = sources.dom;
  const buttonElement = dom.select('a.cycle.ui.kit.button');
  const click$ = buttonElement.events('click').compose(preventDefault) as Stream<MouseEvent>;
  const hover$ = buttonElement.events('mouseover').compose(preventDefault) as Stream<MouseEvent>;
  const focus$ = buttonElement.events('focus').compose(preventDefault) as Stream<FocusEvent>;
  const pressed$ =
    xs.merge(
      buttonElement.events('mousedown').compose(preventDefault).mapTo(true),
      buttonElement.events('mouseup').compose(preventDefault).mapTo(false)
    );
  const disabled$ = sources.disabled$;
  const vdom$ =
    xs.combine(sources.disabled$, sources.content$)
      .map(([disabled, content]) => {
        const disabledClass = disabled ? '.disabled' : '';
        const buttonClasses = '.cycle.ui.kit' + disabledClass + '.button';
        return a(buttonClasses, [
          content
        ]);
      });
  return {
    dom: vdom$,
    click$,
    hover$,
    focus$,
    pressed$,
    disabled$
  };
}

export const Button = (sources: IButtonSources) => isolate(ButtonComponent)(sources);
