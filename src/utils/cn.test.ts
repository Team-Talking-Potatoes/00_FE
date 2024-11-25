import cn from './cn';

describe('cn utility', () => {
  it('합치기 기본 동작 테스트', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
    expect(cn('foo', undefined)).toBe('foo');
    expect(cn('foo', null)).toBe('foo');
  });

  it('조건부 클래스 테스트', () => {
    const result = cn('foo', {
      bar: true,
      baz: false,
    });

    expect(result).toBe('foo bar');
  });

  it('tailwind 클래스 충돌 해결 테스트', () => {
    const result = cn('px-2 bg-red-500', 'px-4 bg-blue-500');

    expect(result).toContain('px-4');
    expect(result).toContain('bg-blue-500');
  });

  it('복잡한 조합 테스트', () => {
    const result = cn(
      'base-class',
      {
        'conditional-true': true,
        'conditional-false': false,
      },
      ['array-class-1', 'array-class-2'],
      undefined,
      null,
    );

    expect(result).toBe(
      'base-class conditional-true array-class-1 array-class-2',
    );
    // 추가 테스트 필요
  });
});
