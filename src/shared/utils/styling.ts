import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * className을 조합하는 유틸리티 함수
 * clsx로 다양한 조건부 클래스를 결합하고, tailwind-merge로 충돌을 해결
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * vanilla-extract와 외부 클래스를 병합하는 함수
 * @param baseClass vanilla-extract 클래스
 * @param className 외부에서 전달받은 클래스
 * @returns 병합된 클래스 문자열
 */
export function mergeStyles(baseClass: string, className?: string): string {
  if (!className) return baseClass;
  return `${baseClass} ${className}`;
}

/**
 * 다양한 props 형태에서 스타일 props를 추출하는 유틸리티 함수
 * @param props 컴포넌트 props
 * @returns className과 style을 제외한 나머지 props
 */
export function extractStyleProps<T extends { className?: string; style?: React.CSSProperties }>(
  props: T
): [string | undefined, React.CSSProperties | undefined, Omit<T, 'className' | 'style'>] {
  const { className, style, ...restProps } = props;
  return [className, style, restProps as Omit<T, 'className' | 'style'>];
}

/**
 * DOM 요소의 ref를 병합하는 유틸리티 함수
 * @param refs 병합할 ref 배열
 * @returns 병합된 ref 콜백
 */
export function mergeRefs<T = any>(...refs: Array<React.MutableRefObject<T> | React.LegacyRef<T> | null | undefined>) {
  return (value: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}

/**
 * 유효한 DOM 속성인지 체크하는 유틸리티 함수
 * @param propName 속성 이름
 * @returns DOM 속성 여부
 */
export function isDOMProp(propName: string): boolean {
  const validDOMProps = [
    // 공통 속성
    'id',
    'className',
    'style',
    'tabIndex',
    'role',
    'aria-',
    'data-',
    // 이벤트 핸들러
    'on',
    'onClick',
    'onChange',
    'onBlur',
    'onFocus',
    'onMouseEnter',
    'onMouseLeave',
    // 폼 속성
    'name',
    'type',
    'value',
    'defaultValue',
    'checked',
    'defaultChecked',
    'disabled',
    'required',
    'placeholder',
    'autoComplete',
    'autoFocus',
    // 기타 일반적인 속성
    'href',
    'src',
    'alt',
    'title',
    'rel',
    'target'
  ];

  return validDOMProps.some(
    (prop) =>
      propName === prop || propName.startsWith('on') || propName.startsWith('aria-') || propName.startsWith('data-')
  );
}

/**
 * 객체에서 DOM 속성만 추출하는 유틸리티 함수
 * @param props 모든 props 객체
 * @returns DOM 속성만 포함한 객체
 */
export function extractDOMProps(props: Record<string, any>): Record<string, any> {
  return Object.keys(props).reduce(
    (domProps, propName) => {
      if (isDOMProp(propName)) {
        domProps[propName] = props[propName];
      }
      return domProps;
    },
    {} as Record<string, any>
  );
}
