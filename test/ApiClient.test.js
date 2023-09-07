const { ApiClient } = require('../index.js');

describe('ApiClient', () => {
  it('should set the type property', () => {
    const client = new ApiClient();
    expect(client.type).toBe('rest');
  });
});

// jest.mock('node-fetch', () => jest.fn());
// jest.mock('is-online', () => jest.fn());

// describe('ApiClient', () => {
// 	beforeEach(() => {
// 		fetch.mockClear();
// 		isOnline.mockClear();
// 	});

// 	it('should set the type property', () => {
// 		const client = new ApiClient();
// 		client.setType('rest');
// 		expect(client.type).toBe('rest');
// 	});

// 	it('should set the method property', () => {
// 		const client = new ApiClient();
// 		client.setMethod('GET');
// 		expect(client.method).toBe('GET');
// 	});

// 	it('should set the headers property', () => {
// 		const client = new ApiClient();
// 		const headers = { 'Content-Type': 'application/json' };
// 		client.setHeaders(headers);
// 		expect(client.headers).toEqual(headers);
// 	});

// 	it('should throw an error if headers are invalid', () => {
// 		const client = new ApiClient();
// 		expect(() => client.setHeaders(null)).toThrow('Invalid headers');
// 	});

// 	it('should set the body property', () => {
// 		const client = new ApiClient();
// 		const body = { test: 'test' };
// 		client.setBody(body);
// 		expect(client.body).toEqual(body);
// 	});

// 	it('should throw an error if body is invalid', () => {
// 		const client = new ApiClient();
// 		expect(() => client.setBody(null)).toThrow('Invalid body');
// 	});

// 	it('should throw an error if offline', async () => {
// 		isOnline.mockResolvedValue(false);
// 		const client = new ApiClient('rest', 'GET', 'https://example.com');
// 		await expect(client.query()).rejects.toThrow('Offline');
// 	});

// 	it('should return data if online', async () => {
// 		isOnline.mockResolvedValue(true);
// 		fetch.mockResolvedValue({
// 			json: () => Promise.resolve({ data: 'test' }),
// 		});
// 		const client = new ApiClient('rest', 'GET', 'https://example.com');
// 		const data = await client.query();
// 		expect(data).toEqual({ data: 'test' });
// 	});
// });
