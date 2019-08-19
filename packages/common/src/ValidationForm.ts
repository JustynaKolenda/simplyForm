
export const required =(value:any) =>value != null && value.trim() ? undefined : 'Required';

export const requiredDate =(value:any) =>value != null ? undefined : 'Required';

export const email =(value : any) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;
