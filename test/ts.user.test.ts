import axios from 'axios';
import Users from '../src/user';

jest.mock('axios'); // mock axios

interface User {
  name: string;
}

test('should fetch users', () => {
  const users: User[] = [{ name: 'Bob' }];
  const resp = { data: users };

  // 修改其 axios.get 方法，直接返回结果，避免发请求
  axios.get.mockResolvedValue(resp);

  // 也可以模拟其实现
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users));
});
