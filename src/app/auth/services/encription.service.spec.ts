import { TestBed } from '@angular/core/testing';

import { EncriptionService } from './encription.service';

describe('EncriptionService', () => {
  let encriptionService: EncriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    encriptionService = TestBed.inject(EncriptionService);
  });

  it('should be created', () => {
    expect(encriptionService).toBeTruthy();
  });

  it('should get a random string', () => {
    spyOn(encriptionService, 'getRandomString').and.callThrough();

    let randomString: string;
    let randStrWithSpecialCharacter: string;

    randomString = encriptionService.getRandomString(200);
    randStrWithSpecialCharacter = encriptionService.getRandomString(300, true);

    expect(randomString).toHaveSize(200);
    expect(randomString).not.toContain('_');
    expect(randomString).not.toContain('.');
    expect(randomString).not.toContain('-');

    expect(randStrWithSpecialCharacter).toHaveSize(300);
    expect(randStrWithSpecialCharacter).toContain('_');
    expect(randStrWithSpecialCharacter).toContain('_');
    expect(randStrWithSpecialCharacter).toContain('.');
    expect(randStrWithSpecialCharacter).toContain('-');
  });

  it('should enconde string', () => {
    let str = 'test';
    let encodedString: string = encriptionService.encodeString(str);

    expect(encodedString).toBe('dGVzdA==');

    str = 'Cal244D_2532AS-.ASc24';
    encodedString = encriptionService.encodeString(str);

    expect(encodedString).toBe('Q2FsMjQ0RF8yNTMyQVMtLkFTYzI0');
  });

  it('should generate an encrypted string with SHA-255 in base 64', async () => {
    const str = 'Aj241CA_12434';
    const generateCodeExpected = 'J2yhcJjryMTXKk4EiUX0plWrVKoJfumKZxsML90fAF0=';
    const generateCodeCreated = await encriptionService.generateCodeChallenge(str);

    expect(generateCodeCreated).toEqual(generateCodeExpected.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, ''));
  });
});
