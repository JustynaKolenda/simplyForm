import {required, email} from './ValidationForm';

test('test email' ,() => {
    expect(email('test@gmail.com')).toBe(undefined);
    expect(email('test_@gmail.pl')).toBe(undefined);
    expect(email('t.o.j.e.s.t.e.m.a.i.l@interia.pl')).toBe(undefined);
    expect(email('_t_e_s_t!@o2.pl')).not.toBe(undefined);
    expect(email('TO___GMAIL.PL')).not.toBe(undefined);
   expect(email('!##444##.@gmail.com')).not.toBe(undefined);
   expect(email('      @interia.pl')).not.toBe(undefined);
});

test('validation test',()=> {
    expect(required('   ')).not.toBe(undefined);
    expect(required('name')).toBe(undefined);
    expect(required('hshsh44')).toBe(undefined);
    expect(required('@@##@#@#2')).toBe(undefined);
    expect(required(null)).not.toBe(undefined);
})


