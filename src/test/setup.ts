import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// With globals: false, RTL's automatic cleanup isn't auto-registered.
afterEach(cleanup);
